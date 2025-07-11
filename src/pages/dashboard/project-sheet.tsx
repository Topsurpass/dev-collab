import ReusableSheet from '@/components/sheet';
import { Button } from '@/components/ui/button';
import type { ProjectCardProps } from '@/types/project-list-types';
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '@/components/ui/card';
import EmptyAlert from '@/assets/empty-alert-pic.svg';

interface ProjectSheetProps {
	project: ProjectCardProps | null;
	open: boolean;
	onOpenChange: (open: boolean) => void;
	onJoinRequest: () => void;
	isLoading?: boolean;
}

export default function ProjectSheet({
	project,
	open,
	onOpenChange,
	onJoinRequest,
	isLoading = false,
}: ProjectSheetProps) {
	if (!project) return null;

	return (
		<ReusableSheet
			open={open}
			onOpenChange={onOpenChange}
			title={project.title}
			description="Detailed description of the selected project"
			className="bg-gray-200 px-5 py-3 dark:bg-gray-600"
		>
			<Card className="shadow-none border-0 rounded-0 bg-background">
				<CardContent className="space-y-4">
					<CardTitle>Description</CardTitle>
					<CardDescription>{project.description}</CardDescription>

					<RoleSection roles={project.required_roles} />
					<TeamMembersSection members={project.team_members} />
				</CardContent>

				<CardFooter className="justify-center">
					<Button
						className="w-2/3 rounded-full"
						size="lg"
						onClick={onJoinRequest}
						disabled={isLoading}
						label="Request to Join"
						isLoading={isLoading}
					/>
				</CardFooter>
			</Card>
		</ReusableSheet>
	);
}

const RoleSection = ({ roles }: { roles: ProjectCardProps['required_roles'] }) => (
	<div>
		<p className="font-bold mb-2">Required Roles</p>
		{roles.map(role => (
			<div
				key={role.id}
				className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-2 mb-3"
			>
				<h2 className="mb-1 text-sm">{role.role_name}</h2>
				<div className="flex gap-2">
					<p className="text-sm text-muted-foreground">Skills:</p>
					<span className="text-sm text-muted-foreground">
						{role.required_skills.map(skill => skill.skill_name).join(', ')}
					</span>
				</div>
			</div>
		))}
	</div>
);

const TeamMembersSection = ({ members }: { members: ProjectCardProps['team_members'] }) => (
	<div>
		<p className="font-bold">Team Members</p>
		{members.length === 0 ? (
			<div className="flex mt-5 md:mt-10 w-full flex-col items-center justify-center text-center">
				<img src={EmptyAlert} alt="No Notifications" width={80} />
				<p className="mt-4 text-sm text-muted-foreground">
					No team member on this project yet.
				</p>
				<p className="text-sm text-muted-foreground">
					Become the first. Send a request to join!
				</p>
			</div>
		) : (
			<div className="flex flex-col flex-wrap gap-3 mt-2">
				{members.map(member => (
					<div
						key={member.id}
						className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-lg"
					>
						<img
							src={member.profile_picture_url}
							alt={member.profile_picture_url}
							className="w-8 h-8 rounded-full object-cover"
						/>
						<span className="text-sm text-muted-foreground">{member.status}</span>
					</div>
				))}
			</div>
		)}
	</div>
);
