import { FiSearch, FiUser, FiUsers, FiDollarSign } from 'react-icons/fi';
import type { ProjectCardProps } from '@/types/project-list-types';

export const ProjectData: ProjectCardProps[] = [
	{
		id: 1,
		title: 'E-commerce Platform Migration',
		description:
			'A comprehensive overhaul of a Magento store into a headless commerce solution using React and Node.js with GraphQL integration.',
		status: 'completed',
		owner: 1,
		created_at: '2025-07-01T10:00:00Z',
		updated_at: '2025-07-05T15:00:00Z',
		required_roles: [
			{
				id: 1,
				role_name: 'Frontend Developer',
				number_required: 2,
				required_skills: [
					{ id: 1, skill_name: 'React' },
					{ id: 2, skill_name: 'GraphQL' },
				],
			},
			{
				id: 2,
				role_name: 'Backend Developer',
				number_required: 1,
				required_skills: [{ id: 3, skill_name: 'Node.js' }],
			},
		],
		team_members: [
			{
				id: '1a',
				full_name: 'sansra',
				role_name: 'frontend',
				user_id: 101,
				project_id: 1,
				profile_picture_url: 'https://randomuser.me/api/portraits/women/1.jpg',
				role_id: 1,
				status: 'active',
				joined_at: 'join1',
			},
			{
				id: '1b',
				full_name: 'sansra',
				role_name: 'frontend',
				user_id: 102,
				project_id: 1,
				profile_picture_url: 'https://randomuser.me/api/portraits/men/2.jpg',
				role_id: 2,
				status: 'active',
				joined_at: 'join2',
			},
		],
	},
	{
		id: 2,
		title: 'AI-Powered Analytics Dashboard',
		description:
			'An intelligent dashboard providing machine learning insights into e-commerce performance with real-time visualizations.',
		status: 'completed',
		owner: 2,
		created_at: '2025-06-15T09:00:00Z',
		updated_at: '2025-07-04T11:30:00Z',
		required_roles: [
			{
				id: 3,
				role_name: 'AI Engineer',
				number_required: 1,
				required_skills: [
					{ id: 4, skill_name: 'Python' },
					{ id: 5, skill_name: 'TensorFlow' },
				],
			},
			{
				id: 4,
				role_name: 'Data Visualization Engineer',
				number_required: 1,
				required_skills: [{ id: 6, skill_name: 'D3.js' }],
			},
		],
		team_members: [
			{
				id: '2a',
				full_name: 'sansra',
				role_name: 'frontend',
				user_id: 103,
				project_id: 2,
				profile_picture_url: 'https://randomuser.me/api/portraits/women/6.jpg',
				role_id: 3,
				status: 'active',
				joined_at: 'join3',
			},
			{
				id: '2b',
				full_name: 'sansra',
				role_name: 'frontend',
				user_id: 104,
				project_id: 2,
				profile_picture_url: 'https://randomuser.me/api/portraits/men/7.jpg',
				role_id: 4,
				status: 'active',
				joined_at: 'join4',
			},
		],
	},
	{
		id: 3,
		title: 'Mobile App for Fitness Tracking',
		description:
			'A fitness tracking app with social features, built using React Native, integrating with wearable devices and Firebase backend.',
		status: 'cancelled',
		owner: 3,
		created_at: '2025-05-20T14:00:00Z',
		updated_at: '2025-06-30T10:00:00Z',
		required_roles: [
			{
				id: 5,
				role_name: 'Mobile Developer',
				number_required: 1,
				required_skills: [{ id: 7, skill_name: 'React Native' }],
			},
			{
				id: 6,
				role_name: 'Backend Developer',
				number_required: 1,
				required_skills: [{ id: 8, skill_name: 'Firebase' }],
			},
		],
		team_members: [
			{
				id: '3a',
				full_name: 'sansra',
				role_name: 'frontend',
				user_id: 105,
				project_id: 3,
				profile_picture_url: 'https://randomuser.me/api/portraits/men/9.jpg',
				role_id: 5,
				status: 'left',
				joined_at: 'join5',
			},
		],
	},
	{
		id: 4,
		title: 'Blockchain Supply Chain Solution',
		description:
			'A blockchain-based solution for supply chain transparency, using Ethereum smart contracts, Web3.js, and Node.js.',
		status: 'on_hold',
		owner: 4,
		created_at: '2025-04-01T12:00:00Z',
		updated_at: '2025-07-01T12:00:00Z',
		required_roles: [
			{
				id: 7,
				role_name: 'Blockchain Developer',
				number_required: 1,
				required_skills: [
					{ id: 9, skill_name: 'Solidity' },
					{ id: 10, skill_name: 'Ethereum' },
				],
			},
			{
				id: 8,
				role_name: 'Frontend Developer',
				number_required: 2,
				required_skills: [{ id: 11, skill_name: 'Web3.js' }],
			},
			{
				id: 9,
				role_name: 'Backend Developer',
				number_required: 1,
				required_skills: [{ id: 12, skill_name: 'Node.js' }],
			},
		],
		team_members: [
			{
				id: '4a',
				full_name: 'sansra',
				role_name: 'frontend',
				user_id: 106,
				project_id: 4,
				profile_picture_url: 'https://randomuser.me/api/portraits/men/11.jpg',
				role_id: 7,
				status: 'active',
				joined_at: 'join6',
			},
			{
				id: '4b',
				full_name: 'sansra',
				role_name: 'frontend',
				user_id: 107,
				project_id: 4,
				profile_picture_url: 'https://randomuser.me/api/portraits/women/12.jpg',
				role_id: 8,
				status: 'active',
				joined_at: 'join7',
			},
		],
	},
];

export const processSteps = [
	{
		icon: FiUser,
		title: 'Create Profile',
		description: 'Showcase your skills, experience, and portfolio to attract collaborators.',
	},
	{
		icon: FiSearch,
		title: 'Find Projects',
		description: 'Browse projects that match your skills and interests.',
	},
	{
		icon: FiUsers,
		title: 'Connect & Collaborate',
		description: 'Join projects, communicate with team members, and start working together.',
	},
	{
		icon: FiDollarSign,
		title: 'Get Compensated',
		description: 'Receive payment for your contributions through our secure platform.',
	},
];

export const footerSections = [
	{
		title: 'Product',
		items: ['Features', 'Pricing', 'Enterprise', 'API'],
	},
	{
		title: 'Resources',
		items: ['Documentation', 'Guides', 'Blog', 'Community'],
	},
	{
		title: 'Company',
		items: ['About', 'Careers', 'Contact', 'Partners'],
	},
	{
		title: 'Legal',
		items: ['Privacy', 'Terms', 'Security', 'Compliance'],
	},
];

export const benefits = [
	{
		title: 'Build Your Portfolio',
		description:
			'Work on real projects that you can showcase to potential employers or clients.',
	},
	{
		title: 'Learn New Skills',
		description: 'Collaborate with experienced developers and learn best practices.',
	},
	{
		title: 'Flexible Work',
		description: 'Contribute to projects on your own schedule, from anywhere in the world.',
	},
];
