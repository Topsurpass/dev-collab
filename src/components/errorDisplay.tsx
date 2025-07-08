import { Button } from '@/components/ui/button';
import { RxExclamationTriangle } from 'react-icons/rx';
import { cn } from '@/lib/utils';

interface ErrorDisplayProps {
	title?: string;
	message: string;
	onRetry?: () => void;
	retryText?: string;
	className?: string;
}

export const ErrorDisplay = ({
	title = 'Something went wrong',
	message,
	onRetry,
	retryText = 'Retry',
	className,
}: ErrorDisplayProps) => (
	<div
		className={cn(
			'flex flex-col items-center justify-center text-center border rounded-xl p-6 bg-red-100 dark:bg-red-900/10 border-red-300 dark:border-red-700 shadow-sm',
			className,
		)}
	>
		<RxExclamationTriangle className="text-red-500 dark:text-red-300 w-10 h-10 mb-3" />

		<h2 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-1">{title}</h2>

		<p className="text-sm text-red-700 dark:text-red-300 mb-4 max-w-md">{message}</p>

		{onRetry && (
			<Button onClick={onRetry} variant="destructive" className="text-sm px-4 py-2">
				{retryText}
			</Button>
		)}
	</div>
);
