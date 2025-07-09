//import _ from "lodash";

export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export function formatTime(isoDate: string): string {
	const date = new Date(isoDate);
	const now = new Date();
	const diffInMs = now.getTime() - date.getTime();
	const diffInSec = Math.floor(diffInMs / 1000);
	const diffInMin = Math.floor(diffInSec / 60);
	const diffInHours = Math.floor(diffInMin / 60);
	const diffInDays = Math.floor(diffInHours / 24);

	if (diffInSec < 60) return 'Just now';
	if (diffInMin < 60) return `${diffInMin} minute${diffInMin > 1 ? 's' : ''} ago`;
	if (diffInHours < 24) return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
	if (diffInDays === 1) return 'Yesterday';
	if (diffInDays <= 7) return `${diffInDays} days ago`;

	return date.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
}

// Utility function to generate a range of numbers
export const range = (start: number, end: number, step: number = 1): number[] => {
	const output: number[] = [];
	for (let i = start; i < end; i += step) {
		output.push(i);
	}
	return output;
};
