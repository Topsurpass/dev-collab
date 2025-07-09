import type { Notification } from '@/types';
import { NotificationCard } from './notification-card';
import EmptyAlert from '@/assets/empty-alert-pic.svg';

interface NotificationsListProps {
	notifications: Notification[];
	filterTypes?: string[];
	onRead?: (id: number) => void;
	onDelete?: (id: number) => void;
	onAction?: (action: string, notification: Notification) => void;
}

export function NotificationsList({
	notifications = [],
	filterTypes,
	onDelete,
	onRead,
	onAction,
}: NotificationsListProps) {
	const filteredNotifications = filterTypes
		? notifications.filter(notif => filterTypes.includes(notif.type))
		: notifications;

	if (filteredNotifications.length === 0) {
		return (
			<div className="flex md:mt-44 w-full flex-col items-center justify-center text-center">
				<img src={EmptyAlert} alt="No Notifications" width={100} />
				<p className="mt-4 text-sm text-muted-foreground">
					You&apos;re all caught up! No notifications at the moment.
				</p>
			</div>
		);
	}

	return (
		<div className="w-full mb-5">
			{filteredNotifications.map(notif => (
				<NotificationCard
					key={notif.id}
					notification={notif}
					onRead={onRead}
					onDelete={onDelete}
					onAction={onAction}
				/>
			))}
		</div>
	);
}
