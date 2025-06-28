import { NavigationMenuBar } from '@/components/navigation-bar';
import { useTheme } from '@/context/theme-context';
import { WiDayLightWind } from 'react-icons/wi';
import { GiNightSleep } from 'react-icons/gi';
import { useState } from 'react';
import { FiMenu, FiX, FiCode } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

function MobileMenuButton({ isOpen, toggle }: { isOpen: boolean; toggle: () => void }) {
	return (
		<Button
			variant="ghost"
			onClick={toggle}
			className=" md:hidden"
		>
			{isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
		</Button>
	);
}

function Logo() {
	return (
		<div className="flex-shrink-0 flex items-center">
			<FiCode className="h-8 w-8 text-indigo-600" />
			<span className="ml-2 text-xl font-bold text-foreground">DevCollab</span>
		</div>
	);
}

function ThemeToggleButton() {
	const { theme, toggleTheme } = useTheme();

	return (
		<div onClick={toggleTheme} className="text-white rounded hover:cursor-pointer hover:bg-none ">
			{theme === 'dark' ? (
				<GiNightSleep className="ml-2 dark:text-yellow-400 mr-2" size={25} />
			) : (
				<WiDayLightWind className="ml-2 text-blue-600 mr-2" size={25} />
			)}
		</div>
	);
}

function AuthButtons() {
	const navigate = useNavigate();
	return (
		<div className="space-x-3 md:space-x-5 flex">
			<Button
				className="md:px-5 md:py-2 rounded-md cursor-pointer bg-blue-700 text-white hover:bg-blue-800"
				label="Login"
				onClick={() => navigate('/login')}
			/>
			<Button
				className="md:px-5 md:py-2 rounded-md border border-foreground cursor-pointer hidden md:block"
				label="Sign up"
				onClick={() => navigate('/signup')}
			/>
		</div>
	);
}

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);

	return (
		<header className="fixed top-0 left-0 w-full bg-background z-50 py-4 md:p-4 flex items-center gap-2 md:gap-5 border-b">
			<MobileMenuButton isOpen={mobileMenuOpen} toggle={toggleMobileMenu} />
			<Logo />

			<nav className="hidden md:flex-1 md:flex">
				<NavigationMenuBar />
			</nav>

			<div className="flex-1 flex justify-end items-center">
				<ThemeToggleButton />
			</div>

			<AuthButtons />
		</header>
	);
}
