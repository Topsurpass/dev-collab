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
import type { NavigationItem } from '@/data/nav-menu-data';

export function NavigationMenuBar({ menuData }: { menuData: NavigationItem[] }) {
	return (
		<NavigationMenu viewport={false}>
			<NavigationMenuList>
				{menuData.map((item, index) => {
					if ('items' in item) {
						return (
							<NavigationMenuItem key={index}>
								<NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul
										className={`grid gap-2 ${
											item.items.length > 4
												? 'w-[600px] md:grid-cols-2'
												: 'w-[300px] grid-cols-1'
										}`}
									>
										{item.items.map(subItem => (
											<ListItem
												key={subItem.title}
												href={subItem.href ?? '#'}
												title={subItem.title}
												icon={subItem.icon}
											>
												{subItem.description}
											</ListItem>
										))}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
						);
					}

					return (
						<NavigationMenuItem key={item.title}>
							<NavigationMenuLink asChild>
								<Link
									to={item.href ?? '#'}
									className="px-4 py-2 text-sm flex gap-2 items-center hover:underline"
								>
									{item.icon && (
										<span className="text-muted-foreground">{item.icon}</span>
									)}
									{item.title}
								</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>
					);
				})}
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
	children?: React.ReactNode;
	href: string;
	icon?: React.ReactNode;
}) {
	return (
		<li>
			<NavigationMenuLink asChild>
				<Link
					to={href}
					className="block select-none space-y-1 rounded-md px-4 py-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
				>
					<div className="flex gap-2 items-center font-medium">
						{icon && <span className="text-muted-foreground">{icon}</span>}
						{title}
					</div>
					{children && (
						<p className="text-muted-foreground text-sm leading-snug">{children}</p>
					)}
				</Link>
			</NavigationMenuLink>
		</li>
	);
}
