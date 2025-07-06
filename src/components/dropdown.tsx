import { type ButtonProps } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import type { ReactNode } from 'react';

export interface DropdownItem {
	type: 'item' | 'label' | 'separator' | 'submenu' | 'group' | 'auth';
	label?: string;
	shortcut?: string;
	disabled?: boolean;
	onClick?: () => void;
	items?: DropdownItem[];
	icon?: ReactNode;
	href?: string;
}

interface DropdownMenuProps {
	trigger: ReactNode;
	items: DropdownItem[];
	align?: 'start' | 'end' | 'center';
	className?: string;
	triggerProps?: ButtonProps;
}

export function CustomDropdownMenu({
	trigger,
	items,
	align = 'start',
	className = 'w-56',
}: DropdownMenuProps) {
	const navigate = useNavigate();
	const renderItem = (item: DropdownItem, index: number) => {
		switch (item.type) {
			case 'item':
				return (
					<DropdownMenuItem
						key={index}
						onClick={() => {
							if (item.href) navigate(item.href);
						}}
						disabled={item.disabled}
						className='cursor-pointer'
					>
						{item.icon && <span className="mr-2">{item.icon}</span>}
						{item.label}
						{item.shortcut && (
							<DropdownMenuShortcut>{item.shortcut}</DropdownMenuShortcut>
						)}
					</DropdownMenuItem>
				);

			case 'auth':
				return (
					<DropdownMenuItem key={index} onClick={item.onClick} disabled={item.disabled}>
						{item.icon && <span className="mr-2">{item.icon}</span>}
						{item.label}
						{item.shortcut && (
							<DropdownMenuShortcut>{item.shortcut}</DropdownMenuShortcut>
						)}
					</DropdownMenuItem>
				);

			case 'label':
				return <DropdownMenuLabel key={index}>{item.label}</DropdownMenuLabel>;

			case 'separator':
				return <DropdownMenuSeparator key={index} />;

			case 'submenu':
				return (
					<DropdownMenuSub key={index}>
						<DropdownMenuSubTrigger>
							{item.icon && <span className="mr-2">{item.icon}</span>}
							{item.label}
						</DropdownMenuSubTrigger>
						<DropdownMenuPortal>
							<DropdownMenuSubContent>
								{item.items?.map(renderItem)}
							</DropdownMenuSubContent>
						</DropdownMenuPortal>
					</DropdownMenuSub>
				);

			case 'group':
				return (
					<div key={index}>
						{item.label && <DropdownMenuLabel>{item.label}</DropdownMenuLabel>}
						{item.items?.map(renderItem)}
					</div>
				);

			default:
				return null;
		}
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
			<DropdownMenuContent className={className} align={align}>
				{items.map(renderItem)}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
