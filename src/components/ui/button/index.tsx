import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';
import LoadingSpinner from '@/assets/icons/loading-spinner';

const buttonVariants = cva(
	'inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				primary:
					'bg-primary text-background dark: shadow-lg hover:shadow-xl hover:bg-primary/90 active:scale-[0.98] shadow-primary/30',
				destructive:
					'bg-destructive text-destructive-foreground shadow-lg hover:shadow-xl hover:bg-destructive/90 active:scale-[0.98] shadow-destructive/30',
				outline:
					'border-2 border-input bg-transparent text-foreground shadow-sm hover:bg-accent/50 hover:text-accent-foreground active:scale-[0.98] backdrop-blur-sm',
				secondary:
					'bg-secondary text-secondary-foreground shadow-md hover:shadow-lg hover:bg-secondary/80 active:scale-[0.98] shadow-secondary/20',
				ghost: 'hover:bg-accent/50 hover:text-accent-foreground active:scale-[0.98] backdrop-blur-sm',
				link: 'text-primary underline-offset-4 hover:underline',
				success:
					'bg-green-500 text-success-foreground shadow-lg hover:shadow-xl hover:bg-success/90 active:scale-[0.98] shadow-success/30',
				warning:
					'bg-warning text-warning-foreground shadow-lg hover:shadow-xl hover:bg-warning/90 active:scale-[0.98] shadow-warning/30',
				danger: 'bg-danger text-danger-foreground shadow-lg hover:shadow-xl hover:bg-danger/90 active:scale-[0.98] shadow-danger/30',
			},
			size: {
				md: 'h-10 px-4 py-2',
				sm: 'h-9 rounded-md px-3 text-xs',
				lg: 'h-11 rounded-md px-8 text-base',
				icon: 'h-10 w-10',
			},
			fullWidth: {
				true: 'w-full',
			},
			disabled: {
				true: 'disabled:cursor-not-allowed disabled:opacity-70',
			},
		},
		defaultVariants: {
			variant: 'primary',
			size: 'md',
		},
	},
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
	label?: string;
	isLoading?: boolean;
	disabled?: boolean;
	loadingText?: string;
	children?: React.ReactNode;
	icon?: React.ElementType;
	iconPosition?: 'start' | 'end';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			label = '',
			className,
			variant,
			size,
			asChild = false,
			isLoading = false,
			disabled = false,
			fullWidth,
			loadingText = 'Please wait',
			icon,
			iconPosition = 'start',
			children,
			...props
		},
		ref,
	) => {
		const Comp = asChild ? Slot : 'button';
		const Icon = icon;

		const render = () => {
			if (children) return children;

			if (isLoading) {
				return (
					<div className="flex items-center gap-2 animate-pulse">
						<LoadingSpinner className="text-current animate-spin" />
						<div className="flex items-center">
							<span className="capitalize">{loadingText}</span>
							<MoreHorizontal size={20} className="ml-1 animate-pulse" />
						</div>
					</div>
				);
			}

			return (
				<div className="flex items-center gap-2">
					{Icon && iconPosition === 'start' && (
						<Icon
							size={18}
							className="transition-transform group-hover:translate-x-0.5"
						/>
					)}
					<span>{label}</span>
					{Icon && iconPosition === 'end' && (
						<Icon
							size={18}
							className="transition-transform group-hover:translate-x-0.5"
						/>
					)}
				</div>
			);
		};

		return (
			<Comp
				className={cn(
					buttonVariants({ variant, size, disabled, fullWidth }),
					'group relative overflow-hidden',
					!disabled && 'hover:before:opacity-100',
					className,
				)}
				ref={ref}
				disabled={disabled || isLoading}
				{...props}
			>
				{!disabled && variant !== 'ghost' && variant !== 'outline' && (
					<span className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 -translate-x-full group-hover:translate-x-0" />
				)}
				{render()}
			</Comp>
		);
	},
);

Button.displayName = 'Button';

export { Button, buttonVariants };
