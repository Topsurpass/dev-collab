import { Outlet } from 'react-router-dom';
import Header from '@/components/header';

export default function RootLayout() {
	return (
		<div className="min-h-screen flex flex-col ">
			{/*<Header />*/}
			<main className="pt-[80px] flex-1">
				<Outlet />
			</main>
		</div>
	);
}
