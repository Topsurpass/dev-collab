import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '.';


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



export function ProfileSkillsFormSkeleton() {
	return (
		<div className="flex justify-center">
			<Card className="w-full border-0 shadow-none bg-background">
				<CardContent>
					<div className="flex w-full justify-end">
						<Skeleton className="h-10 w-[100px] rounded-3xl" />
					</div>

					<div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
						<div>
							<Skeleton className="h-6 w-24 mb-2" />
							<Skeleton className="h-10 w-full rounded-md" />
						</div>

						<div>
							<Skeleton className="h-6 w-24 mb-2" />
							<Skeleton className="h-10 w-full rounded-md" />
						</div>

						<div>
							<Skeleton className="h-6 w-24 mb-2" />
							<Skeleton className="h-10 w-full rounded-md" />
						</div>
						<div>
							<Skeleton className="h-6 w-24 mb-2" />
							<Skeleton className="h-10 w-full rounded-md" />
						</div>
					</div>
				</CardContent>

				<div className="flex justify-end p-4">
					<div className="">
						<Skeleton className="h-10 w-[100px] rounded-3xl" />
					</div>
				</div>
			</Card>
		</div>
	);
}


export function ProfileOverviewSkeleton() {
	return (
		<div className="flex w-full justify-center">
			<form className="w-full">
				<Card className="w-full border-0 shadow-none bg-background">
					<CardContent className="grid w-full gap-3 p-2">
						<div className="flex items-center justify-between gap-4">
							<Skeleton className="h-20 w-20 rounded-full" />
							<Skeleton className="h-10 w-[100px] rounded-3xl" />
						</div>

						<div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-4">
							<div>
								<Skeleton className="h-6 w-24 mb-2" />
								<Skeleton className="h-10 w-full rounded-md" />
							</div>

							<div>
								<Skeleton className="h-6 w-24 mb-2" />
								<Skeleton className="h-10 w-full rounded-md" />
							</div>

							<div>
								<Skeleton className="h-6 w-32 mb-2" />
								<Skeleton className="h-10 w-full rounded-md" />
							</div>

							<div />

							<div className="col-span-1 md:col-span-2">
								<Skeleton className="h-6 w-16 mb-2" />
								<Skeleton className="h-28 w-full rounded-md" />
							</div>
						</div>
					</CardContent>

					<div className="flex justify-end p-4">
						<div className="">
							<Skeleton className="h-10 w-[100px] rounded-3xl" />
						</div>
					</div>
				</Card>
			</form>
		</div>
	);
}
