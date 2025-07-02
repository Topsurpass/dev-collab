import { Outlet } from 'react-router-dom';

export default function NoHeaderLayout() {
	return (
		<div>
			<Outlet />
		</div>
	);
}
