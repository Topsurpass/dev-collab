import { ProtectedNavigationMenuData } from '@/data/nav-menu-data';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import useAuthStore from '@/stores/user-store';
import { CiLogout } from 'react-icons/ci';
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarFooter,
} from '@/components/ui/sidebar';

function Logo() {
	return (
		<div className="flex-shrink-0 flex items-center justify-center gap-2">
			<Link to="/" className="flex items-center gap-2">
				<span className="text-xl font-bold text-indigo-800 dark:text-foreground">
					TeamInSync
				</span>
			</Link>
		</div>
	);
}

export function AppSidebar() {
	const location = useLocation();

	return (
		<Sidebar>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupContent>
						<Logo />
						<SidebarMenu className="gap-2 mt-5">
							{ProtectedNavigationMenuData.map(item => {
								const isActive = location.pathname.startsWith(item.href ?? '');
								return (
									<SidebarMenuItem key={item.title}>
										<SidebarMenuButton
											asChild
											className="text-md py-5"
											isActive={isActive}
										>
											<Link to={item.href ?? '#'}>
												{item.icon}
												<span>{item.title}</span>
											</Link>
										</SidebarMenuButton>
									</SidebarMenuItem>
								);
							})}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter>
				<Button
					label="Logout"
					onClick={() => useAuthStore.getState().reset()}
					icon={CiLogout}
				/>
			</SidebarFooter>
		</Sidebar>
	);
}
