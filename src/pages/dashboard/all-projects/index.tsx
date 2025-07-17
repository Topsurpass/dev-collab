import ProjectListPage from '../project-listing';
import useGetProjects from '@/api/projects/use-get-projects';
import { ProjectLoadingSkeleton } from '@/components/skeletons/projectLoading-skeleton';
import { ErrorDisplay } from '@/components/errorDisplay';
import useProjectFavorite from '@/api/projects/use-mutate-favorite';

export default function AllProjects() {
	const { data: projectData, isLoading, isError, error, refetch } = useGetProjects();
	const { mutate: addFavoriteProject } = useProjectFavorite();

	function toggleFavorite(id: number) {
		const requestPayload = {
			project: id,
		};
		addFavoriteProject(requestPayload);
	}

	if (isError) {
		return (
			<div className="p-4">
				<ErrorDisplay
					title="Projects Failed to Load"
					message={error?.message || 'Failed to load projects. Please try again later.'}
					onRetry={refetch}
				/>
			</div>
		);
	}
console.log(projectData);
	return (
		<ProjectListPage
			title="Project Dashboard"
			description="Browse and manage all projects"
			projects={projectData ?? []}
			isLoading={isLoading}
			loadingComponent={<ProjectLoadingSkeleton length={6} />}
			onClickFavorite={toggleFavorite}
		/>
	);
}
