import { NotificationsList } from '../notification-list';
import useGetNotifications from '@/api/notifications/use-get-notifications';
import { NotificationSkeleton } from '@/components/skeletons/notification-loading-skeleton';
import useMarkNotificationRead from '@/api/notifications/use-mutate-mark-read';
import { RequestMethod } from '@/types/enum';
import { useQueryClient } from '@tanstack/react-query';
import QueryKeys from '@/api/query-keys';

export default function AllNotifications() {
	const { data: NotificationsData, isLoading } = useGetNotifications();
	const { mutateAsync: mutateNotification } = useMarkNotificationRead();
	const queryClient = useQueryClient();

	const processForm = async (id: number) => {
		const requestPayload = {
			read: true,
		};

		await mutateNotification({
			requestMethod: RequestMethod.PATCH,
			requestPayload,
			msgId: id,
		});

		queryClient.invalidateQueries({
			queryKey: [QueryKeys.GET_NOTIFICATIONS],
		});
	};

	return (
		<>
			{isLoading ? (
				<div className="space-y-3">
					{Array.from({ length: 3 }).map((_, idx) => (
						<NotificationSkeleton key={idx} />
					))}
				</div>
			) : (
				<NotificationsList
					notifications={NotificationsData}
					onDelete={id => console.log('Delete', id)}
					onAction={(action, notif) => console.log(action, notif)}
					onRead={id => processForm(id)}
				/>
			)}
		</>
	);
}
