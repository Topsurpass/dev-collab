import type { DropdownItem } from '@/components/dropdown';
import { FiUser, FiSettings, FiLogOut } from 'react-icons/fi';
import useAuthStore from '@/stores/user-store';

type MenuLink = {
	title: string;
	href?: string;
	description?: string;
	icon?: React.ReactNode;
	children?: MenuLink[];
};

type NavigationGroup = {
	label: string;
	items: MenuLink[];
};

export const navigationMenuData: NavigationGroup[] = [
	{
		label: 'Find project',
		items: [
			{
				title: 'Post a project',
				href: '/post-project',
				description: 'Create a new project to find collaborators.',
			},
			{
				title: 'Browse projects',
				href: '/browse-projects',
				description: 'Explore existing projects and find collaborators.',
			},
		],
	},
	{
		label: 'Why devCollab?',
		items: [
			{
				title: 'For Developers',
				href: '/why-devcollab/developers',
				description: 'Learn how devCollab benefits developers.',
			},
			{
				title: 'For Companies',
				href: '/why-devcollab/companies',
				description: 'Discover how devCollab helps companies find talent.',
			},
			{
				title: 'For Open Source',
				href: '/why-devcollab/open-source',
				description: 'Understand the value of devCollab for open source projects.',
			},
			{
				title: 'For Students',
				href: '/why-devcollab/students',
				description: 'See how devCollab supports students in their projects.',
			},
		],
	},
	{
		label: 'Resources',
		items: [
			{
				title: 'Documentation',
				href: '/docs',
				description: 'Access the devCollab documentation for guides and tutorials.',
			},
			{
				title: 'Blog',
				href: '/blog',
				description: 'Read articles and updates about devCollab.',
			},
			{
				title: 'Community',
				href: '/community',
				description: 'Join the devCollab community to connect with others.',
			},
			{
				title: 'Support',
				href: '/support',
				description: 'Get help and support for using devCollab.',
			},
		],
	},
];

export const dropdownItems: DropdownItem[] = [
	{
		type: 'label',
		label: 'My Account',
	},
	{
		type: 'item',
		label: 'Profile',
		icon: <FiUser />,
		href: '/profile',
	},
	{
		type: 'item',
		label: 'Settings',
		icon: <FiSettings />,
		href: '/settings',
	},
	{
		type: 'separator',
	},
	{
		type: 'submenu',
		label: 'Invite Users',
		items: [
			{
				type: 'item',
				label: 'Email',
				href: '/invite/email',
			},
			{
				type: 'item',
				label: 'Message',
				href: '/invite/message',
			},
		],
	},
	{
		type: 'separator',
	},
	{
		type: 'auth',
		label: 'Logout',
		icon: <FiLogOut />,
		onClick: () => useAuthStore.getState().reset(),
	},
];
