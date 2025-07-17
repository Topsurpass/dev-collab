import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/projectCard';
import DataSearchInput from '@/components/ui/search-bar';
import { FiFilter } from 'react-icons/fi';
import type { ProjectCardProps } from '@/types/project-list-types';
import { CustomDropdownMenu } from '@/components/dropdown';
import { getProjectFilterItems } from '@/data/nav-menu-data';
import Empty from '@/components/empty';
import ProjectSheet from './project-sheet';
import useProjectMembership from '@/api/projects/use-mutate-project-membership';
import useAuthStore from '@/stores/user-store';
import useGetProfile from '@/api/profile/use-get-profile';
import { LiaProjectDiagramSolid } from 'react-icons/lia';

const PROJECTS_PER_PAGE = 10;

const statusLabels: Record<string, string> = {
	active: 'Active',
	completed: 'Completed',
	cancelled: 'Cancelled',
	on_hold: 'On Hold',
	pending: 'Pending',
	all: 'All',
};

interface ProjectListPageProps {
	title: string;
	description?: string;
	projects: ProjectCardProps[];
	defaultStatusFilter?: string;
	isLoading?: boolean;
	is_favorited?: boolean;
	loadingComponent?: React.ReactNode;
	onClickFavorite: (id: number) => void;
}
// Define the expected profile data type
type ProfileData = {
	data?: {
		role?: {
			id?: number;
		};
	};
};

export default function ProjectListPage({
	title,
	description = 'Browse and manage your projects',
	projects,
	defaultStatusFilter = 'all',
	isLoading,
	loadingComponent,
	onClickFavorite,
}: ProjectListPageProps) {
	const [displayCount, setDisplayCount] = useState(PROJECTS_PER_PAGE);
	const [activeFilter, setActiveFilter] = useState(defaultStatusFilter);
	const [searchQuery, setSearchQuery] = useState('');
	const [selectedProject, setSelectedProject] = useState<ProjectCardProps | null>(null);
	const [isSheetOpen, setIsSheetOpen] = useState(false);
	const userId = useAuthStore(state => state.id);

	const { data } = useGetProfile() as { data?: ProfileData };
	const { mutateAsync: mutateMembership, isPending } = useProjectMembership();
	const roleId = data?.data?.role?.id;

	const handleProjectClick = (id: number) => {
		const project = projects?.find(p => p.id === id);
		if (project) {
			setSelectedProject(project);
			setIsSheetOpen(true);
		}
	};

	const handleJoinRequest = () => {
		if (!selectedProject || !userId || !data) {
			return;
		}
		const requestPayload = {
			user: userId,
			project: selectedProject.id,
			role_id: roleId,
		};
		mutateMembership(requestPayload);
	};

	const filteredProjects = projects?.filter(project => {
		const matchesSearch =
			project?.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
			project?.description?.toLowerCase().includes(searchQuery.toLowerCase());

		const matchesFilter = activeFilter === 'all' || project.status === activeFilter;

		return matchesSearch && matchesFilter;
	});

	const visibleProjects = filteredProjects?.slice(0, displayCount);
	const hasMoreProjects = displayCount < filteredProjects.length;

	const statuses = ['all', ...new Set(projects.map(p => p.status))];

	const loadMore = () => setDisplayCount(prev => prev + PROJECTS_PER_PAGE);

	const mobileFilterItems = getProjectFilterItems(activeFilter, setActiveFilter);
	return (
		<div className="pb-10">
			<header className="mb-8">
				<h1 className="text-2xl font-bold">{title}</h1>
				<p className="text-sm text-muted-foreground">{description}</p>
			</header>

			<div className="mb-8">
				<div className="flex flex-col md:flex-row gap-4 justify-between">
					<div className="w-full md:max-w-xs">
						<DataSearchInput
							placeholder="Search projects..."
							value={searchQuery}
							onChange={value => setSearchQuery(String(value))}
							className="rounded-xl"
						/>
					</div>

					<div className="md:hidden flex justify-end">
						<CustomDropdownMenu
							trigger={
								<Button variant="outline" className="flex items-center gap-2">
									<FiFilter /> Filters
								</Button>
							}
							items={mobileFilterItems}
							align="end"
							className="w-60"
						/>
					</div>

					<div className="hidden md:flex flex-wrap gap-2">
						{statuses.map((status, idx) => (
							<Button
								key={idx}
								variant={activeFilter === status ? 'primary' : 'outline'}
								onClick={() => setActiveFilter(status)}
								className="capitalize text-xs px-2 md:px-4 py-0"
							>
								{statusLabels[status] || status}
							</Button>
						))}
					</div>
				</div>
			</div>
			<div>
				{isLoading ? (
					(loadingComponent ?? null)
				) : visibleProjects.length > 0 ? (
					<>
						<ProjectSheet
							project={selectedProject}
							open={isSheetOpen}
							onOpenChange={setIsSheetOpen}
							onJoinRequest={handleJoinRequest}
							isLoading={isPending}
						/>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{visibleProjects.map(project => (
								<ProjectCard
									key={project.id}
									{...project}
									onclickCard={() => handleProjectClick(project.id)}
									onclickFavorite={id => onClickFavorite(id)}
									is_favorited={project.is_favorited}
								/>
							))}
						</div>

						{hasMoreProjects && (
							<div className="mt-5 text-center">
								<Button onClick={loadMore} className="text-base" variant="primary">
									Load More
								</Button>
							</div>
						)}
					</>
				) : (
					<Empty
						title="No projects found"
						description="Try adjusting your search or filter criteria"
						Icon={LiaProjectDiagramSolid}
					/>
				)}
			</div>
		</div>
	);
}
