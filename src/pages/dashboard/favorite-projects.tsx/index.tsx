import ProjectListPage from '../project-listing';
import { ProjectData } from '@/data/homepage-data';

export default function FavoriteProjects() {
	return (
		<ProjectListPage
			title="Favorite Projects"
			description="Browse and manage all your favorite projects"
			projects={ProjectData}
		/>
	);
}
