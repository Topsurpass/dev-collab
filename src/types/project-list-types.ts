// export type ProjectListProps = {
// 	id: number;
// 	title: string;
// 	status: "Ongoing" | "Completed" | "Pending";
// 	description: string;
// 	profession: string[];
// 	date: string;
// 	members: {
// 		name: string;
// 		role: string;
// 		avatar: string;
// 	}[];

import { StatusColor } from "@/types/enum";


export type ProjectStatus = keyof typeof StatusColor;
interface Member {
	name: string;
	role: string;
	avatar: string;
}

export interface ProjectCardProps {
	id: number;
	title: string;
	description: string;
	skills: string[];
	proposals: number;
	status: ProjectStatus;
	members: Member[];
}
