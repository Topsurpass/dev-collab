import {
	Card,
	CardHeader,
	CardContent,
	CardTitle,
	CardDescription,
	CardFooter,
} from '@/components/ui/card';

interface Member {
	name: string;
	role: string;
	avatar: string;
}

interface Project {
	id: number;
	title: string;
	description: string;
	skills: string[];
	budget: string;
	proposals: number;
	status: string;
	members: Member[];
}

interface ProjectCardProps {
	project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
	const visibleMembers = project.members.slice(0, 4);
	const extraMembers = project.members.length - visibleMembers.length;

	return (
		<Card className="hover:shadow-lg transition-shadow duration-300">
			<CardHeader>
				<div className="flex justify-between items-start">
					<CardTitle className="text-lg font-normal">{project.title}</CardTitle>
					<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
						{project.status}
					</span>
				</div>
				<CardDescription className="text-sm truncate">
					{project.description}
				</CardDescription>
			</CardHeader>

			<CardContent>
				<div className="flex flex-wrap gap-2">
					{project.skills.map((skill, index) => (
						<span
							key={index}
							className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
						>
							{skill}
						</span>
					))}
				</div>
			</CardContent>

			<CardFooter className="flex justify-between items-center">
				<div className="flex -space-x-2">
					{visibleMembers.map((member, idx) => (
						<img
							key={idx}
							alt={member.name}
							src={member.avatar}
							className="inline-block size-8 rounded-full ring-2 ring-white"
						/>
					))}
					{extraMembers > 0 && (
						<div className="flex size-8 items-center justify-center rounded-full bg-gray-300 text-sm text-white ring-2 ring-white">
							+{extraMembers}
						</div>
					)}
				</div>

				<p className="text-xs">{project.proposals} proposals</p>
			</CardFooter>
		</Card>
	);
};

export default ProjectCard;
