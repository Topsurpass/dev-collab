import { Outlet } from 'react-router-dom';
import Header from '@/components/header';
import ScrollToTop from '@/components/scrollToTop';
import { navigationMenuData } from '@/data/nav-menu-data';

export default function PublicLayout() {
	return (
		<div className="min-h-screen flex flex-col ">
			<ScrollToTop />
			<Header menuData={navigationMenuData}/>
			<main className="pt-[80px] flex-1">
				<Outlet />
			</main>
		</div>
	);
}
