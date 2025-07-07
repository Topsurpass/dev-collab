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
		],
	},
	{
		path: '*',
		element: <NotFoundPage />,
	},
];

export default routeConfig;
