import * as React from 'react';
import { Link } from 'react-router-dom';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

type MenuLink = {
	title: string;
	href?: string;
	description?: string;
	icon?: React.ReactNode;
	children?: MenuLink[];
};

type NavigationGroup = {
	label: string;
	items: MenuLink[];
};

export function NavigationMenuBar({ menuData }: { menuData: NavigationGroup[] }) {
	return (
		<NavigationMenu viewport={false}>
			<NavigationMenuList>
				{menuData.map(group => (
					<NavigationMenuItem key={group.label}>
						<NavigationMenuTrigger>{group.label}</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul
								className={`grid gap-2 ${
									group.items.length > 4
										? 'w-[600px] md:grid-cols-2'
										: 'w-[300px] grid-cols-1'
								}`}
							>
								{group.items.map(item => (
									<ListItem
										key={item.title}
										href={item.href ?? '#'}
										title={item.title}
										icon={item.icon}
									>
										{item.description}
									</ListItem>
								))}
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);
}

function ListItem({
	title,
	children,
	href,
	icon,
}: {
	title: string;
	href: string;
	children?: React.ReactNode;
	icon?: React.ReactNode;
}) {
	return (
		<li>
			<NavigationMenuLink asChild>
				<Link to={href} className="flex items-start no-underline">
					<div>
						<div className="flex gap-2  items-center">
							{icon && <span className="text-muted-foreground">{icon}</span>}
							<div className="text-sm font-medium leading-none">{title}</div>
						</div>
						{children && (
							<p className="text-muted-foreground text-sm leading-snug">{children}</p>
						)}
					</div>
				</Link>
			</NavigationMenuLink>
		</li>
	);
}
