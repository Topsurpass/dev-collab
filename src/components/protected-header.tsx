import { useState } from 'react';
import { FiMenu, FiX, FiHelpCircle, FiBell } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { NavigationMenuBar } from '@/components/navigation-bar';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import DataSearchInput from './ui/search-bar';
import { CustomDropdownMenu } from './dropdown';
import { dropdownItems } from '@/data/nav-menu-data';
import ThemeToggleButton from '@/components/theme-toggle';
import useGetProfile from '@/api/profile/use-get-profile';
import _ from 'lodash';
import type { NavigationItem } from '@/data/nav-menu-data';

function MobileMenuButton({ isOpen, toggle }: { isOpen: boolean; toggle: () => void }) {
	return (
		<Button variant="ghost" onClick={toggle} className="md:hidden  pl-2 py-0 pr-0">
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

function HelpButton() {
	return (
		<Button variant="ghost" size="icon" className="rounded-full hidden md:flex cursor-pointer">
			<FiHelpCircle className="h-5 w-5" />
			{/*Onclick function props to be added */}
		</Button>
	);
}

function NotificationButton() {
	return (
		<Button variant="ghost" size="icon" className="rounded-full relative cursor-pointer">
			<FiBell className="h-5 w-5" />
			<span className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
				3
			</span>
			{/*Count notification and on click function props to be added */}
		</Button>
	);
}

interface HeaderProps {
	menuData?: NavigationItem[];
}

export default function ProtectedHeader({ menuData = [] }: HeaderProps) {
	const { data } = useGetProfile();
	const user = (data as any)?.data;
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);
	const initials = _.join(
		_.map(_.words(user?.full_name), word => _.toUpper(word[0])),
		'',
	);

	return (
		<header className="fixed top-0 left-0 w-full bg-background z-50 py-4 md:p-4 flex items-center gap-2 md:gap-5 border-b">
			<div>
				<MobileMenuButton isOpen={mobileMenuOpen} toggle={toggleMobileMenu} />
			</div>
			<Logo />
			<nav className="hidden md:flex flex-1">
				<NavigationMenuBar menuData={menuData} />
			</nav>
			<div className="flex-1 flex justify-end items-center gap-2 md:gap-4 pr-5">
				<DataSearchInput
					value=""
					onChange={() => {}}
					debounce={1000}
					className="hidden md:flex py-2 rounded-full bg-muted border-0 focus-visible:ring-1"
					placeholder="Search projects"
				/>
				<ThemeToggleButton />
				<HelpButton />
				<NotificationButton />
				<CustomDropdownMenu
					trigger={
						<div className="cursor-pointer">
							<Avatar className="rounded-full h-8 w-8">
								<AvatarImage src={user?.profile_picture_url} alt="@leerob" />
								<AvatarFallback>{initials}</AvatarFallback>
							</Avatar>
						</div>
					}
					items={dropdownItems}
					align="end"
					className="w-60"
				/>
			</div>
		</header>
	);
}
