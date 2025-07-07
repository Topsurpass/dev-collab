
import ProjectListPage from '../project-listing';
import { ProjectData } from '@/data/homepage-data';

export default function OngoingProjects() {
	return (
			<ProjectListPage
				title="Ongoing Projects"
				description="Browse and manage all your current projects"
				projects={ProjectData}
			/>
		);
}
