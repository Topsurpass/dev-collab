import { NavLink, Outlet } from 'react-router-dom';

const tabs = [
	{ path: '', label: 'All projects' },
	{ path: 'favorite-projects', label: 'Favorite projects' },
	{ path: 'ongoing-projects', label: 'Ongoing projects' },
];

export default function DashBoardLayout() {
	return (
		<div className="mx-auto w-full px-5 md:max-w-7xl">
			<div className="my-2 md:mb-5 flex gap-4 pb-0">
				{tabs.map(tab => (
					<NavLink
						key={tab.path}
						to={tab.path}
						end
						className={({ isActive }) =>
							`pb-2 text-sm font-medium ${
								isActive
									? 'border-b-2 border-primary font-bold text-primary'
									: 'text-gray-500 hover:text-primary'
							}`
						}
					>
						{tab.label}
					</NavLink>
				))}
			</div>
			<Outlet />
		</div>
	);
}
