import Home from '@pages/home';
import PublicRoute from '@/routes/public-route';
import PublicLayout from '@/layout/public-layout';
import NoHeaderLayout from '@/layout/no-header-layout';
import Login from '@pages/login';
import SignUp from '@pages/sign-up';
import AllProjects from '@/pages/dashboard/all-projects';
import DashboardLayout from '@/pages/dashboard';
import CompleteProfile from '@pages/complete-profile';
import ProtectedRoute from '@/routes/protected-route';
import ErrorBoundary from '@/components/ErrorBoundary';
import NotFoundPage from '@pages/error';
import ProtectedLayout from '@/layout/protected-layout';
import FavoriteProjects from '@/pages/dashboard/favorite-projects.tsx';
import OngoingProjects from '@/pages/dashboard/ongoing-projects.tsx';
import NewProject from '@/pages/projects';
import NotificationLayout from '@/pages/notifications';
import AllNotifications from '@/pages/notifications/all';
import ProjectUpdatesAlert from '@/pages/notifications/project-updates-alerts';
import SystemAlerts from '@/pages/notifications/system-alerts';
import ProfileLayout from '@/pages/profile';
import Overview from '@/pages/profile/overview';
import Skills from '@/pages/profile/skills-and-links';

const routeConfig = [
	{
		path: '/',
		element: (
			<PublicRoute>
				<PublicLayout />
			</PublicRoute>
		),
		children: [
			{
				index: true,
				element: (
					<ErrorBoundary>
						<Home />
					</ErrorBoundary>
				),
			},
			{
				path: 'login',
				element: (
					<ErrorBoundary>
						<Login />
					</ErrorBoundary>
				),
			},
			{
				path: 'register',
				element: (
					<ErrorBoundary>
						<SignUp />
					</ErrorBoundary>
				),
			},
		],
	},

	{
		path: '/',
		element: (
			<ProtectedRoute>
				<NoHeaderLayout />
			</ProtectedRoute>
		),
		children: [
			{
				path: 'create-profile',
				element: (
					<ErrorBoundary>
						<CompleteProfile />
					</ErrorBoundary>
				),
			},
		],
	},

	{
		path: '/',
		element: (
			<ProtectedRoute>
				<ProtectedLayout />
			</ProtectedRoute>
		),
		children: [
			{
				path: 'dashboard',
				element: (
					<ErrorBoundary>
						<DashboardLayout />
					</ErrorBoundary>
				),
				children: [
					{
						index: true,
						element: (
							<ErrorBoundary>
								<AllProjects />
							</ErrorBoundary>
						),
					},
					{
						path: 'favorite-projects',
						element: (
							<ErrorBoundary>
								<FavoriteProjects />
							</ErrorBoundary>
						),
					},
					{
						path: 'ongoing-projects',
						element: (
							<ErrorBoundary>
								<OngoingProjects />
							</ErrorBoundary>
						),
					},
				],
			},
			{
				path: '/post-project',
				element: (
					<ErrorBoundary>
						<NewProject />
					</ErrorBoundary>
				),
			},
			{
				path: 'notifications',
				element: (
					<ErrorBoundary>
						<NotificationLayout />
					</ErrorBoundary>
				),
				children: [
					{
						index: true,
						element: (
							<ErrorBoundary>
								<AllNotifications />
							</ErrorBoundary>
						),
					},
					{
						path: 'projects',
						element: (
							<ErrorBoundary>
								<ProjectUpdatesAlert />
							</ErrorBoundary>
						),
					},
					{
						path: 'systems',
						element: (
							<ErrorBoundary>
								<SystemAlerts />
							</ErrorBoundary>
						),
					},
				],
			},
			{
				path: 'profile',
				element: (
					<ErrorBoundary>
						<ProfileLayout />
					</ErrorBoundary>
				),
				children: [
					{
						index: true,
						element: (
							<ErrorBoundary>
								<Overview />
							</ErrorBoundary>
						),
					},
					{
						path: 'skills',
						element: (
							<ErrorBoundary>
								<Skills />
							</ErrorBoundary>
						),
					},
				],
			},
		],
	},
	{
		path: '*',
		element: <NotFoundPage />,
	},
];

export default routeConfig;
