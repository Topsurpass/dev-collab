import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function ProfilePicture() {
	return (
		<Avatar>
			<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
			<AvatarFallback>User</AvatarFallback>
		</Avatar>
	);
}
