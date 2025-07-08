import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export function ExamReviewSkeleton() {
	return (
		<div className="max-w-3xl mx-auto py-10 px-4 space-y-8">
			<Skeleton className="h-8 w-1/2" />
			<Skeleton className="h-6 w-1/4" />
			{[...Array(3)].map((_, i) => (
				<Card key={i}>
					<CardHeader>
						<Skeleton className="h-6 w-1/3" />
					</CardHeader>
					<CardContent className="space-y-4">
						<Skeleton className="h-5 w-full" />
						<div className="space-y-2">
							{[...Array(2)].map((_, j) => (
								<Skeleton key={j} className="h-12 w-full" />
							))}
						</div>
					</CardContent>
				</Card>
			))}
		</div>
	);
}
