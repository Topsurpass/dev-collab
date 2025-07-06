import Home from '@pages/home';
import PublicRoute from '@/routes/public-route';
import PublicLayout from '@/layout/public-layout';
import NoHeaderLayout from '@/layout/no-header-layout';
import Login from '@pages/login';
import SignUp from '@pages/sign-up';
import Dashboard from '@/pages/dashboard';
import CompleteProfile from '@pages/complete-profile';
import ProtectedRoute from '@/routes/protected-route';
import ErrorBoundary from '@/components/ErrorBoundary';
import NotFoundPage from '@pages/error';
import ProtectedLayout from '@/layout/protected-layout';

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
				path: '/login',
				element: (
					<ErrorBoundary>
						<Login />
					</ErrorBoundary>
				),
			},
			{
				path: '/register',
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
				index: true,
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
				index: true,
				path: 'dashboard',
				element: (
					<ErrorBoundary>
						<Dashboard />
					</ErrorBoundary>
				),
			},
		],
	},
	{
		path: '*',
		element: <NotFoundPage />,
	},
];

export default routeConfig;
