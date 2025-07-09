import { CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import { Skeleton } from '.';

export function NotificationSkeleton() {
	return (
		<div className="mt-4 w-full border-y animate-pulse">
			<CardHeader className="pt-3 px-5">
				<CardDescription className="flex items-center justify-between">
					<div className="flex items-center gap-2">
						<Skeleton className="h-5 w-5 rounded-full" />
						<Skeleton className="h-4 w-24" />
					</div>
                    <div className='flex gap-2'>
                        <Skeleton className="h-5 w-8 rounded-full" />
					<Skeleton className="h-5 w-8 rounded-full" />
                    </div>
					
				</CardDescription>
			</CardHeader>
			<CardContent className="py-3 space-y-2">
				<Skeleton className="h-4 w-1/3" />
				<Skeleton className="h-4 w-2/3" />
				<Skeleton className="h-8 w-32 mt-3 rounded-3xl" />
			</CardContent>
		</div>
	);
}
