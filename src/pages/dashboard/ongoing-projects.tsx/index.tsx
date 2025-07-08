import ProjectListPage from '../project-listing';
import useGetProjects from '@/api/projects/use-get-projects';
import { ProjectLoadingSkeleton } from '@/components/skeletons/projectLoading-skeleton';
import { ErrorDisplay } from '@/components/errorDisplay';

export default function OngoingProjects() {
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
		<ProjectListPage
			title="Ongoing Projects"
			description="Browse and manage all your current projects"
			projects={projectData ?? []}
			isLoading={isLoading}
			loadingComponent={<ProjectLoadingSkeleton length={6} />}
		/>
	);
}
