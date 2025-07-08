import { Outlet } from 'react-router-dom';
import ProtectedHeader from '@/components/protected-header';
import ScrollToTop from '@/components/scrollToTop';
import { ProtectedNavigationMenuData } from '@/data/nav-menu-data';

export default function ProtectedLayout() {
	return (
		<div className="min-h-screen flex flex-col">
			<ScrollToTop />
			<ProtectedHeader menuData={ProtectedNavigationMenuData} />
			<main className="pt-[80px] flex-1">
				<Outlet />
			</main>
		</div>
	);
}
