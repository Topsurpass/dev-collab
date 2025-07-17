import {
	Card,
	CardHeader,
	CardContent,
	CardTitle,
	CardDescription,
	CardFooter,
} from '@/components/ui/card';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import _ from 'lodash';
import type { ProjectCardProps } from '@/types/project-list-types';
import { StatusColor } from '@/types/enum';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { MdFavorite } from 'react-icons/md';

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
	is_favorited,
	onclickCard,
	onclickFavorite,
}: ProjectCardFullProps) {
	const [expanded, setExpanded] = useState(false);

	const visibleMembers = team_members?.slice(0, 4);
	const extraMembers = team_members?.length - visibleMembers?.length;

	const toggleDescription = () => setExpanded(prev => !prev);
	const descriptionLimit = 100;
	const shouldTruncate = description.length > descriptionLimit;
	const shortDescription = description.slice(0, descriptionLimit);

	return (
		<Card className="hover:shadow-lg transition-shadow duration-300 w-full py-3 gap-3">
			<CardHeader className="px-3">
				<div className="flex justify-between items-start gap-5">
					<div>
						<CardTitle className="text-lg font-normal">{title}</CardTitle>
						<Badge className={StatusColor[status as keyof typeof StatusColor]}>
							{_.capitalize(status)}
						</Badge>
					</div>

					<MdFavorite
						className={cn('cursor-pointer text-gray-500 hover:text-red-500', {
							'text-red-500': is_favorited,
						})}
						onClick={e => {
							e.stopPropagation();
							onclickFavorite?.(id);
						}}
					/>
				</div>

				<CardDescription className="text-sm">
					{expanded || !shouldTruncate ? description : `${shortDescription}...`}
					{shouldTruncate && (
						<span
							onClick={e => {
								e.stopPropagation();
								toggleDescription();
							}}
							className="ml-1 text-blue-600 dark:text-green-500 cursor-pointer underline text-sm"
						>
							{expanded ? 'less' : 'more'}
						</span>
					)}
				</CardDescription>
			</CardHeader>

			<CardContent className="grid px-0 mx-3">
				<div>
					<div className="flex items-center justify-between">
						<h3 className="text-sm font-medium flex items-center">Looking For</h3>
					</div>
					<div>
						<span className="font-medium text-sm text-gray-500 dark:text-gray-400">
							{required_roles?.map(role => role.role_name).join(', ')}
						</span>
					</div>
				</div>
			</CardContent>

			<CardFooter className="flex justify-between items-center">
				<div className="flex items-center gap-2">
					<div className="flex -space-x-2">
						{team_members?.length > 0 ? (
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
				</div>

				<Button
					label="View details"
					className="rounded-3xl py-0 my-0 text-xs cursor-pointer"
					onClick={() => {
						onclickCard?.(id);
					}}
				/>
			</CardFooter>
		</Card>
	);
}
