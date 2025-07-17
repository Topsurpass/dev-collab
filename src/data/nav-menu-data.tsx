import type { DropdownItem } from '@/components/dropdown';
import { FiUser, FiSettings } from 'react-icons/fi';
import { Home } from 'lucide-react';
import { GoProjectRoadmap } from 'react-icons/go';
import { IoNotificationsOutline } from 'react-icons/io5';

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

export type NavigationItem = NavigationGroup | MenuLink;

export const PublicNavigationMenuData: NavigationGroup[] = [
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

export const ProtectedNavigationMenuData: MenuLink[] = [
	{
		title: 'Dashboard',
		href: '/dashboard',
		description: 'Welcome.',
		icon: <Home />,
	},
	{
		title: 'Post a project',
		href: '/post-project',
		description: 'Create a new project to find collaborators.',
		icon: <GoProjectRoadmap />,
	},
	{
		title: 'My Profile',
		href: '/profile',
		description: 'Your personalized profile page.',
		icon: <FiUser />,
	},
	{
		title: 'Notifications',
		href: '/notifications',
		description: 'Your personalized notifications page.',
		icon: <IoNotificationsOutline />,
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
];

export const getProjectFilterItems = (
	_currentFilter: string,
	setActiveFilter: (value: string) => void,
): DropdownItem[] => {
	const statuses = ['all', 'active', 'completed', 'cancelled', 'on_hold'];

	const statusLabels: Record<string, string> = {
		all: 'All',
		active: 'Active',
		completed: 'Completed',
		cancelled: 'Cancelled',
		on_hold: 'On Hold',
	};

	return [
		{
			type: 'label',
			label: 'Filter Project',
		},
		{
			type: 'separator',
		},
		...statuses.flatMap(status => [
			{
				type: 'auth' as const,
				label: statusLabels[status] || status,
				onClick: () => setActiveFilter(status),
			},
		]),
	];
};
