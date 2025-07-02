import { Component, type ErrorInfo, type ReactNode } from 'react';
import { Button } from '@/components/ui/button';

interface ErrorBoundaryProps {
	children: ReactNode;
	fallback?: ReactNode;
}

interface ErrorBoundaryState {
	hasError: boolean;
	error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	state: ErrorBoundaryState = {
		hasError: false,
		error: null,
	};

	static getDerivedStateFromError(error: Error): ErrorBoundaryState {
		return {
			hasError: true,
			error,
		};
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
		console.error('Error caught by boundary:', error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return this.props.fallback || this.defaultFallback;
		}
		return this.props.children;
	}

	private get defaultFallback(): ReactNode {
		return (
			<div className="flex items-center justify-center p-4">
				<div className="max-w-md w-full p-8 rounded-xl  text-center">
					<div className="mx-auto w-16 h-16 flex items-center justify-center bg-red-100 rounded-full mb-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-8 w-8 text-red-600"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
								clipRule="evenodd"
							/>
						</svg>
					</div>

					<h2 className="text-2xl font-bold text-gray-800 mb-2 dark:text-white">
						Oops! Something went wrong
					</h2>
					<p className="text-gray-600 mb-6 dark:text-white">
						We're sorry for the inconvenience. Our team has been notified about this
						issue.
					</p>

					<div className="bg-gray-50 p-4 rounded-lg text-left mb-6 font-mono text-sm overflow-x-auto">
						<div className="text-red-500 font-semibold mb-1">Error details:</div>
						<div className="truncate dark:text-black">
							{this.state.error?.message || 'Unknown error'}
						</div>
					</div>

					<div className="flex flex-col sm:flex-row gap-3 justify-center">
						<Button
							label="Reload Page"
							className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200"
							onClick={() => window.location.reload()}
						/>
						<Button
							label="Try Again"
							className="px-5 py-2.5  text-white dark:text-black font-medium rounded-lg transition-colors duration-200"
							onClick={() => this.setState({ hasError: false })}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default ErrorBoundary;
