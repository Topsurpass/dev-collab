import { Card, CardContent } from '@/components/ui/card';

export function ProfileFormSkeleton() {
	return (
		<div className="flex justify-center">
			<Card className="w-full max-w-3xl border-0 bg-transparent shadow-none">
				<CardContent className="mt-5 space-y-6">
					<div className="flex justify-center">
						<div className="size-24 rounded-full bg-muted animate-pulse" />
					</div>

					<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
						<div className="md:col-span-2 space-y-2">
							<div className="h-4 w-1/4 bg-muted rounded animate-pulse" />
							<div className="h-10 w-full bg-muted rounded-md animate-pulse" />
						</div>

						<div className="space-y-2">
							<div className="h-4 w-1/4 bg-muted rounded animate-pulse" />
							<div className="h-10 w-full bg-muted rounded-md animate-pulse" />
						</div>

						<div className="space-y-2">
							<div className="h-4 w-1/3 bg-muted rounded animate-pulse" />
							<div className="h-10 w-full bg-muted rounded-md animate-pulse" />
						</div>

						<div className="md:col-span-2 space-y-2">
							<div className="h-4 w-1/4 bg-muted rounded animate-pulse" />
							<div className="space-y-2">
								{Array.from({ length: 5 }).map((_, i) => (
									<div
										key={i}
										className="h-4 w-full bg-muted rounded animate-pulse"
									/>
								))}
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}



export function ProfileLinksSkeleton() {
	return (
		<div className="flex justify-center">
			<Card className="w-full border-0 shadow-none mb-5 bg-transparent">
				<CardContent className="grid gap-4 animate-pulse">
					<div className="space-y-2">
						<div className="h-4 w-16 bg-muted rounded" />
						<div className="h-10 w-full bg-muted/50 rounded" />
					</div>

					<div className="space-y-2">
						<div className="h-4 w-20 bg-muted rounded" />
						<div className="h-10 w-full bg-muted/50 rounded" />
					</div>

					<div className="space-y-2">
						<div className="h-4 w-16 bg-muted rounded" />
						<div className="h-10 w-full bg-muted/50 rounded" />
					</div>

					<div className="space-y-2">
						<div className="h-4 w-20 bg-muted rounded" />
						<div className="h-10 w-full bg-muted/50 rounded" />
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
