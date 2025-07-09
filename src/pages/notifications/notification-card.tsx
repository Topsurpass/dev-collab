import { MdDelete } from 'react-icons/md';
import { RiToolsFill } from 'react-icons/ri';
import { GrCheckmark } from 'react-icons/gr';
import { CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Notification } from '@/types';
import { formatTime } from '@/lib/helpers';
import { cn } from '@/lib/utils';

interface NotificationCardProps {
	notification: Notification;
	onDelete?: (id: number) => void;
	onRead?: (id: number) => void;
	onAction?: (action: string, notification: Notification) => void;
}

export function NotificationCard({
	notification,
	onDelete,
	onAction,
	onRead,
}: NotificationCardProps) {
	return (
		<div className="mt-4 w-full border-y">
			<CardHeader className="pt-3 px-5">
				<CardDescription className="flex items-center justify-between">
					<div className="flex items-center gap-2">
						<RiToolsFill size={22} />
						<span className="text-blue-600">{formatTime(notification.created_at)}</span>
					</div>
					<div className="flex gap-4">
						{onRead && (
							<GrCheckmark
								size={23}
								className={cn('cursor-pointer text-red-500', {
									'font-bold text-lg': !notification.read,
									hidden: notification.read,
								})}
								onClick={() => onRead(notification.id)}
							/>
						)}
						{onDelete && (
							<MdDelete
								size={23}
								className="cursor-pointer text-red-500"
								onClick={() => onDelete(notification.id)}
							/>
						)}
					</div>
				</CardDescription>
			</CardHeader>
			<CardContent className="py-3">
				<h2
					className={cn('', {
						'font-bold text-lg': !notification.read,
					})}
				>
					{notification.title}
				</h2>
				<CardDescription>{notification.message}</CardDescription>

				{notification.type === 'project_added' && onAction && (
					<Button
						className="mt-3 rounded-3xl"
						onClick={() => onAction('view_project', notification)}
						label="View Project"
					/>
				)}

				{notification.type === 'join_request' && onAction && (
					<div className="space-x-2 mt-3">
						<Button
							onClick={() => onAction('accept_request', notification)}
							label="Accept"
						/>
						<Button
							variant="outline"
							onClick={() => onAction('decline_request', notification)}
							label="Decline"
						/>
					</div>
				)}
			</CardContent>
		</div>
	);
}
