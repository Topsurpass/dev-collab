import { FiSearch, FiUser, FiUsers, FiDollarSign } from 'react-icons/fi';
import type { ProjectCardProps } from '@/types/project-list-types';

export const ProjectData: ProjectCardProps[] = [
	{
		id: 1,
		title: 'E-commerce Platform Migration',
		description:
			'A comprehensive overhaul of an existing Magento-based e-commerce store to a modern, performant headless commerce solution powered by React. The project aims to improve site performance, scalability, and flexibility while integrating with a Node.js backend and GraphQL API layer. The migration includes redesigning the user experience, optimizing SEO, and ensuring seamless third-party integrations.',
		skills: ['React', 'Node.js', 'GraphQL'],
		proposals: 12,
		status: 'active',
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
		description:
			'Development of an intelligent analytics dashboard that leverages machine learning models to deliver real-time insights into customer behavior, sales trends, and inventory performance for e-commerce businesses. The dashboard features interactive visualizations powered by D3.js, a React frontend for responsiveness, and backend ML models built with Python and TensorFlow.',
		skills: ['Python', 'TensorFlow', 'D3.js', 'React'],
		proposals: 8,
		status: 'completed',
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
			'Design and development of a cross-platform fitness tracking mobile application aimed at social engagement and health monitoring. The app features personalized workout plans, real-time activity tracking, integration with wearable devices via HealthKit API, and a social feed for sharing progress. Built using React Native and Firebase for real-time data and authentication.',
		skills: ['React Native', 'Firebase', 'HealthKit API'],
		proposals: 15,
		status: 'cancelled',
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
		description:
			'An enterprise-grade supply chain solution using blockchain technology to ensure product authenticity, traceability, and real-time tracking across distribution networks. Built on Ethereum using Solidity smart contracts, this solution integrates Web3.js for frontend interactions and Node.js for business logic. The system enables all supply chain participants to verify transactions in a transparent, tamper-proof environment.',
		skills: ['Solidity', 'Ethereum', 'Web3.js', 'Node.js'],
		proposals: 6,
		status: 'on_hold',
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
