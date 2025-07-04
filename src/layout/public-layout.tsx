import { Outlet } from 'react-router-dom';
import Header from '@/components/header';
import ScrollToTop from '@/components/scrollToTop';

export default function PublicLayout() {
	return (
		<div className="min-h-screen flex flex-col ">
			<ScrollToTop />
			<Header />
			<main className="pt-[80px] flex-1">
				<Outlet />
			</main>
		</div>
	);
}
