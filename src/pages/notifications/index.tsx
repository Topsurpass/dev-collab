import { NavLink, Outlet } from "react-router-dom";

const tabs = [
	{ path: "", label: "All" },
	{ path: "projects", label: "Project Updates" },
	{ path: "systems", label: "System Alerts" },
];

export default function NotificationLayout() {
	return (
		<div className="mx-auto w-full px-3 md:px-2 md:max-w-7xl">
			<div className="m-2 flex gap-4 pb-0">
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
