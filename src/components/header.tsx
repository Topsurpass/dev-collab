import { useLocation, useNavigate, matchPath } from 'react-router-dom';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { NavigationMenuBar } from '@/components/navigation-bar';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import ThemeToggleButton from '@/components/theme-toggle';
import type { NavigationItem } from '@/data/nav-menu-data';

function MobileMenuButton({ isOpen, toggle }: { isOpen: boolean; toggle: () => void }) {
	return (
		<Button variant="ghost" onClick={toggle} className="md:hidden">
			{isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
		</Button>
	);
}

function Logo() {
	return (
		<div className="flex-shrink-0 flex items-center gap-2">
			<Link to="/" className="flex items-center gap-2">
				<span className="text-xl font-bold text-indigo-800 dark:text-foreground">
					TeamInSync
				</span>
			</Link>
		</div>
	);
}

function AuthButtons() {
	const navigate = useNavigate();
	return (
		<div className="space-x-3 md:space-x-5 flex">
			<Button
				className="md:px-5 md:py-2 rounded-md cursor-pointer bg-blue-700 text-white hover:bg-blue-800"
				onClick={() => navigate('/login')}
			>
				Login
			</Button>
			<Button
				variant="outline"
				className="md:px-5 md:py-2 rounded-md cursor-pointer hidden md:block"
				onClick={() => navigate('/register')}
			>
				Sign up
			</Button>
		</div>
	);
}

interface HeaderProps {
	menuData?: NavigationItem[];
}

export default function Header({ menuData = [] }: HeaderProps) {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);

	const location = useLocation();
	const hideAuthRoutes = ['/login', '/register', '/verify-email/:token'].some(path =>
		matchPath({ path, end: false }, location.pathname),
	);
	const showNav = !hideAuthRoutes && menuData.length > 0;

	return (
		<header className="fixed top-0 left-0 w-full bg-background z-50 py-4 md:p-4 flex items-center gap-2 md:gap-5 border-b">
			{showNav && <MobileMenuButton isOpen={mobileMenuOpen} toggle={toggleMobileMenu} />}
			<div className={cn({ 'ml-4 md:ml-0': !showNav })}>
				<Logo />
			</div>

			{showNav && (
				<nav className="hidden md:flex flex-1">
					<NavigationMenuBar menuData={menuData} />
				</nav>
			)}

			<div className="flex-1 flex justify-end items-center gap-2 md:gap-4 pr-5">
				<div className="order-0 sm:order-1">
					<ThemeToggleButton />
				</div>
				{!hideAuthRoutes ? <AuthButtons /> : null}
			</div>
		</header>
	);
}
