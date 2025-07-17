import { Outlet } from 'react-router-dom';
import ProtectedHeader from '@/components/protected-header';
import ScrollToTop from '@/components/scrollToTop';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/sidebar';

export default function ProtectedLayout() {
	return (
		<SidebarProvider>
			<AppSidebar />
			<ScrollToTop />
			<main className="w-full">
				<ProtectedHeader />
				<Outlet />
			</main>
		</SidebarProvider>
	);
}
