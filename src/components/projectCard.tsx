import {
	Card,
	CardHeader,
	CardContent,
	CardTitle,
	CardDescription,
	CardFooter,
} from '@/components/ui/card';
import { useState, useMemo } from 'react';
import { GrFavorite } from 'react-icons/gr';
import { Badge } from '@/components/ui/badge';
import _ from 'lodash';
import type { ProjectCardProps } from '@/types/project-list-types';
import { StatusColor } from '@/types/enum';
import { FaUserAlt, FaTools } from 'react-icons/fa';

interface ProjectCardFullProps extends ProjectCardProps {
	onclickCard?: (id: number) => void;
	onclickFavorite?: (id: number) => void;
}

export default function ProjectCard({
	id,
	title,
	description,
	status,
	required_roles,
	team_members,
	onclickCard,
	onclickFavorite,
}: ProjectCardFullProps) {
	const [expanded, setExpanded] = useState(false);

	const visibleMembers = team_members.slice(0, 4);
	const extraMembers = team_members.length - visibleMembers.length;

	const toggleDescription = () => setExpanded(prev => !prev);
	const descriptionLimit = 100;
	const shouldTruncate = description.length > descriptionLimit;
	const shortDescription = description.slice(0, descriptionLimit);

	const allSkills = useMemo(() => {
		const skills = required_roles.flatMap(role =>
			role.required_skills.map(skill => skill.skill_name),
		);
		return Array.from(new Set(skills));
	}, [required_roles]);

	return (
		<Card
			className="hover:shadow-lg transition-shadow duration-300 w-full cursor-pointer"
			onClick={() => {
				onclickCard?.(id);
			}}
		>
			<CardHeader>
				<div className="flex justify-between items-start gap-5">
					<CardTitle className="text-lg font-normal">{title}</CardTitle>
					<Badge className={StatusColor[status as keyof typeof StatusColor]}>
						{_.capitalize(status)}
					</Badge>
				</div>

				<CardDescription className="text-sm">
					{expanded || !shouldTruncate ? description : `${shortDescription}...`}
					{shouldTruncate && (
						<span
							onClick={e => {
								e.stopPropagation();
								toggleDescription();
							}}
							className="ml-1 text-blue-600 dark:text-green-500 cursor-pointer underline text-xs"
						>
							{expanded ? 'less' : 'more'}
						</span>
					)}
				</CardDescription>
			</CardHeader>

			<CardContent className="grid gap-4">
				<div>
					<div className="flex items-center justify-between mb-1">
						<h3 className="text-sm font-medium flex items-center gap-2">
							<FaUserAlt className="" />
							Roles Needed
						</h3>
					</div>

					<div className="flex flex-wrap gap-2">
						{required_roles.map(role => (
							<div key={role.id} className="h-3">
								<div className="flex justify-between items-center">
									<span className="font-medium text-sm text-gray-500 dark:text-gray-400">{role.role_name}</span>
								</div>
							</div>
						))}
					</div>
				</div>

				<div>
					<div className="flex items-center justify-between mb-1">
						<h3 className="text-sm font-medium flex items-center gap-2">
							<FaTools className="" />
							Required Skills
						</h3>
					</div>

					<div className="flex flex-wrap gap-2">
						{allSkills.length > 0 ? (
							allSkills.map((skill, index) => (
								<span
									key={index}
									className="inline-flex items-center px-2 rounded-full text-xs font-medium bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200"
								>
									{skill}
								</span>
							))
						) : (
							<span className="text-xs text-gray-500 italic">
								No specific skills required
							</span>
						)}
					</div>
				</div>
			</CardContent>

			<CardFooter className="flex justify-between items-center">
				<div className="flex items-center gap-2">
					<div className="flex -space-x-2">
						{team_members.length > 0 ? (
							visibleMembers.map((member, idx) => (
								<img
									key={idx}
									alt={member.profile_picture_url}
									src={member.profile_picture_url}
									className="inline-block size-8 rounded-full ring-2 ring-white dark:ring-gray-800"
								/>
							))
						) : (
							<p className="text-xs text-gray-500">0 collaborators</p>
						)}
						{extraMembers > 0 && (
							<div className="flex size-8 items-center justify-center rounded-full bg-gray-300 dark:bg-gray-700 text-xs text-white ring-2 ring-white dark:ring-gray-800">
								+{extraMembers}
							</div>
						)}
					</div>
					<span className="text-xs text-gray-500 dark:text-gray-400">
						{team_members.length} joined
					</span>
				</div>

				<GrFavorite
					className="cursor-pointer text-gray-500 hover:text-red-500"
					onClick={e => {
						e.stopPropagation();
						onclickFavorite?.(id);
					}}
				/>
			</CardFooter>
		</Card>
	);
}
