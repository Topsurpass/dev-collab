/* eslint-disable @typescript-eslint/no-explicit-any */
import { FiBell } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import DataSearchInput from './ui/search-bar';
import { CustomDropdownMenu } from './dropdown';
import { dropdownItems } from '@/data/nav-menu-data';
import ThemeToggleButton from '@/components/theme-toggle';
import useGetProfile from '@/api/profile/use-get-profile';
import _ from 'lodash';
import { useNavigate } from 'react-router-dom';
import useGetUnreadNotification from '@/api/notifications/use-get-unread';
import { SidebarTrigger } from '@/components/ui/sidebar';

interface NotificationProp {
	count: number;
	onClick: () => void;
}

function NotificationButton({ count, onClick }: NotificationProp) {
	return (
		<Button
			variant="ghost"
			size="icon"
			className="rounded-full relative cursor-pointer"
			onClick={onClick}
		>
			<FiBell className="h-5 w-5" />
			{count > 0 ? (
				<span className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
					{count}
				</span>
			) : (
				''
			)}
		</Button>
	);
}

export default function ProtectedHeader() {
	const { data: Count } = useGetUnreadNotification();
	const { data } = useGetProfile();
	const user = (data as any)?.data;
	const initials = _.join(
		_.map(_.words(user?.full_name), word => _.toUpper(word[0])),
		'',
	);
	const navigate = useNavigate();

	return (
		<header className="w-full bg-background  py-4 px-3 flex items-center gap-2 md:gap-5 border-b">
			<SidebarTrigger className="text-muted-foreground" />
			<CustomDropdownMenu
				trigger={
					<div className="cursor-pointer flex gap-2 items-center text-muted-foreground">
						<Avatar className="rounded-full h-8 w-8">
							<AvatarImage src={user?.profile_picture_url} alt="@leerob" />
							<AvatarFallback>{initials}</AvatarFallback>
						</Avatar>
						<p className="">{user?.full_name}</p>
					</div>
				}
				items={dropdownItems}
				align="end"
				className="w-60"
			/>
			<div className="flex-1 flex justify-end items-center gap-2 md:gap-4 md:pr-5">
				<DataSearchInput
					value=""
					onChange={() => {}}
					debounce={1000}
					className="hidden md:flex py-2 rounded-full bg-muted border-0 focus-visible:ring-1"
					placeholder="Search projects"
				/>
				<ThemeToggleButton />
				<NotificationButton
					count={Count?.data?.count}
					onClick={() => navigate('/notifications')}
				/>
			</div>
		</header>
	);
}
