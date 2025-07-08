import ProjectListPage from '../project-listing';
import useGetProjects from '@/api/projects/use-get-projects';
import { ProjectLoadingSkeleton } from '@/components/skeletons/projectLoading-skeleton';
import { ErrorDisplay } from '@/components/errorDisplay';

export default function AllProjects() {
	const { data: projectData, isLoading, isError, error, refetch } = useGetProjects();

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

	return (
		<>
			{isLoading ? (
				<ProjectLoadingSkeleton length={6} />
			) : (
				<ProjectListPage
					title="Project Dashboard"
					description="Browse and manage all projects"
					projects={projectData ?? []}
				/>
			)}
		</>
	);
}
