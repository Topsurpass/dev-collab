import { FiSearch, FiUser, FiUsers, FiDollarSign } from 'react-icons/fi';

export const projects = [
	{
		id: 1,
		title: 'E-commerce Platform Migration',
		description:
			'Migrate existing Magento store to a modern React-based headless commerce solution',
		skills: ['React', 'Node.js', 'GraphQL'],
		budget: '$5,000 - $10,000',
		proposals: 12,
		status: 'Ongoing',
		members: [
			{
				name: 'Alice Johnson',
				role: 'Frontend Developer',
				avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
			},
			{
				name: 'Bob Smith',
				role: 'Backend Developer',
				avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
			},
			{
				name: 'Charlie Davis',
				role: 'UI/UX Designer',
				avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
			},
			{
				name: 'Diana Ross',
				role: 'DevOps Engineer',
				avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
			},
			{
				name: 'Ethan Carter',
				role: 'QA Engineer',
				avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
			},
		],
	},
	{
		id: 2,
		title: 'AI-Powered Analytics Dashboard',
		description: 'Develop a dashboard with machine learning insights for e-commerce businesses',
		skills: ['Python', 'TensorFlow', 'D3.js', 'React'],
		budget: '$15,000+',
		proposals: 8,
		status: 'Ongoing',
		members: [
			{
				name: 'Fiona Brooks',
				role: 'AI Engineer',
				avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
			},
			{
				name: 'George Reed',
				role: 'Backend Developer',
				avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
			},
			{
				name: 'Hannah Lewis',
				role: 'Product Manager',
				avatar: 'https://randomuser.me/api/portraits/women/8.jpg',
			},
		],
	},
	{
		id: 3,
		title: 'Mobile App for Fitness Tracking',
		description:
			'Create a cross-platform fitness app with social features and health integrations',
		skills: ['React Native', 'Firebase', 'HealthKit API'],
		budget: '$8,000 - $12,000',
		proposals: 15,
		status: 'Ongoing',
		members: [
			{
				name: 'Ian Brown',
				role: 'Mobile Developer',
				avatar: 'https://randomuser.me/api/portraits/men/9.jpg',
			},
			{
				name: 'Jessica White',
				role: 'Backend Developer',
				avatar: 'https://randomuser.me/api/portraits/women/10.jpg',
			},
		],
	},
	{
		id: 4,
		title: 'Blockchain Supply Chain Solution',
		description: 'Implement a blockchain-based system for supply chain transparency',
		skills: ['Solidity', 'Ethereum', 'Web3.js', 'Node.js'],
		budget: '$20,000+',
		proposals: 6,
		status: 'Ongoing',
		members: [
			{
				name: 'Kevin Hart',
				role: 'Blockchain Developer',
				avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
			},
			{
				name: 'Linda Green',
				role: 'Frontend Developer',
				avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
			},
			{
				name: 'Michael Scott',
				role: 'UI/UX Designer',
				avatar: 'https://randomuser.me/api/portraits/men/13.jpg',
			},
			{
				name: 'John Doe',
				role: 'Frontend Developer',
				avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
			},
			{
				name: 'Sara Lee',
				role: 'UI/UX Designer',
				avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
			},
			{
				name: 'David Kim',
				role: 'Backend Developer',
				avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
			},
			{
				name: 'Michael Scott',
				role: 'QA Engineer',
				avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
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
