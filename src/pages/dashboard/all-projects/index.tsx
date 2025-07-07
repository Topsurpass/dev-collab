import ProjectListPage from "../project-listing";
import { ProjectData } from "@/data/homepage-data";

export default function AllProjects() {
	return (
		<ProjectListPage
			title="Project Dashboard"
			description="Browse and manage all projects"
			projects={ProjectData}
		/>
	);
}
