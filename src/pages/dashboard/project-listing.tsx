import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/projectCard';
import DataSearchInput from '@/components/ui/search-bar';
import { FiFilter } from 'react-icons/fi';
import type { ProjectCardProps } from '@/types/project-list-types';
import { CustomDropdownMenu } from '@/components/dropdown';
import { getProjectFilterItems } from '@/data/nav-menu-data';
import Empty from '@/components/empty';
import { FaProjectDiagram } from 'react-icons/fa';

const PROJECTS_PER_PAGE = 4;

const statusLabels: Record<string, string> = {
	active: 'Active',
	completed: 'Completed',
	cancelled: 'Cancelled',
	on_hold: 'On Hold',
	all: 'All',
};

interface ProjectListPageProps {
	title: string;
	description?: string;
	projects: ProjectCardProps[];
	defaultStatusFilter?: string;
}

export default function ProjectListPage({
	title,
	description = 'Browse and manage your projects',
	projects,
	defaultStatusFilter = 'all',
}: ProjectListPageProps) {
	const [displayCount, setDisplayCount] = useState(PROJECTS_PER_PAGE);
	const [activeFilter, setActiveFilter] = useState(defaultStatusFilter);
	const [searchQuery, setSearchQuery] = useState('');

	const filteredProjects = projects.filter(project => {
		const matchesSearch =
			project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			project.description.toLowerCase().includes(searchQuery.toLowerCase());

		const matchesFilter = activeFilter === 'all' || project.status === activeFilter;

		return matchesSearch && matchesFilter;
	});

	const visibleProjects = filteredProjects.slice(0, displayCount);
	const hasMoreProjects = displayCount < filteredProjects.length;

	const statuses = ['all', ...new Set(projects.map(p => p.status))];

	const loadMore = () => setDisplayCount(prev => prev + PROJECTS_PER_PAGE);

	// Create mobile filter items
	const mobileFilterItems = getProjectFilterItems(activeFilter, setActiveFilter);


	return (
		<div className="min-h-screen-minus-100">
			<header className="mb-8">
				<h1 className="text-2xl font-bold">{title}</h1>
				<p className="text-sm text-muted-foreground">{description}</p>
			</header>

			{/* Search and Filter Section */}
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

					{/* Mobile Filter Dropdown */}
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

					{/* Desktop Filters */}
					<div className="hidden md:flex flex-wrap gap-2">
						{statuses.map(status => (
							<Button
								key={status}
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

			{/* Project List */}
			<div>
				{visibleProjects.length > 0 ? (
					<>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{visibleProjects.map(project => (
								<ProjectCard key={project.id} {...project} />
							))}
						</div>

						{hasMoreProjects && (
							<div className="mt-10 text-center">
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
						Icon={FaProjectDiagram}
					/>
				)}
			</div>
		</div>
	);
}
