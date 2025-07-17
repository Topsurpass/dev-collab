import ProjectListPage from '../project-listing';
import useGetFavoriteProjects from '@/api/projects/use-get-favorites';
import { ProjectLoadingSkeleton } from '@/components/skeletons/projectLoading-skeleton';
import { ErrorDisplay } from '@/components/errorDisplay';

export default function FavoriteProjects() {
	const { data: projectData, isLoading, isError, error, refetch } = useGetFavoriteProjects();

	function toggleFavorite(id: number) {
		console.log(id);
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
			title="Favorite Projects"
			description="Browse and manage all your favorite projects"
			projects={projectData ?? []}
			isLoading={isLoading}
			loadingComponent={<ProjectLoadingSkeleton length={6} />}
			onClickFavorite={toggleFavorite}
		/>
	);
}
