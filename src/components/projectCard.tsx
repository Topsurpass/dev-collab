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
import { FaUserAlt } from 'react-icons/fa';

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

	// Calculate total roles needed
	const totalRolesNeeded = useMemo(() => {
		return required_roles.reduce((sum, role) => sum + role.number_required, 0);
	}, [required_roles]);

	return (
		<Card
			className="hover:shadow-lg transition-shadow duration-300 w-full"
			onClick={e => {
				e.stopPropagation();
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
					<div className="flex items-center justify-between mb-2">
						<h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
							Roles Needed
						</h3>
						<div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
							<FaUserAlt className="text-xs" />
							<span>{totalRolesNeeded} positions</span>
						</div>
					</div>

					<div className="flex flex-wrap gap-2">
						{required_roles.map(role => (
							<div
								key={role.id}
								className="border rounded-lg p-2 bg-gray-50 dark:bg-gray-800 w-full max-w-[200px]"
							>
								<div className="flex justify-between items-center mb-1">
									<span className="font-medium text-sm">{role.role_name}</span>
									<span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full px-2 py-0.5">
										{role.number_required} needed
									</span>
								</div>

								{role.required_skills.length > 0 && (
									<div className="flex flex-wrap gap-1 mt-1">
										{role.required_skills.map(skill => (
											<span
												key={skill.id}
												className="inline-block bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs px-2 py-0.5 rounded"
											>
												{skill.skill_name}
											</span>
										))}
									</div>
								)}
							</div>
						))}
					</div>
				</div>

				{/* Skills Summary */}
				<div>
					<h3 className="text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
						Key Skills
					</h3>
					<div className="flex flex-wrap gap-1">
						{Array.from(
							new Set(
								required_roles.flatMap(role =>
									role.required_skills.map(skill => skill.skill_name),
								),
							),
						).map((skill, index) => (
							<span
								key={index}
								className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200"
							>
								{skill}
							</span>
						))}
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
