export type ProjectStatus = 'in_progress' | 'completed' | 'cancelled' | 'on_hold' | 'all' | 'pending';

export interface Skill {
	id: number;
	skill_name: string;
}

export interface RequiredRole {
	id: number;
	role_name: string;
	number_required: number;
	required_skills: Skill[];
}

export interface Member {
	id: string;
	user_id: number;
	project_id: number;
	profile_picture_url: string;
	role_id: number
	status: string;
	full_name: string;
	role_name: string;
	joined_at: string;
}

export interface ProjectCardProps {
	id: number;
	title: string;
	description: string;
	status: ProjectStatus;
	owner: number;
	created_at: string;
	updated_at: string;
	required_roles: RequiredRole[];
	team_members: Member[];
}
