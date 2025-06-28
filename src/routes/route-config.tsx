import Home from '@pages/home';
import PublicRoute from '@/routes/public-route';
import PublicLayout from '@/layout/public-layout';

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
				element: <Home />,
			},
		],
	},
];

export default routeConfig;
