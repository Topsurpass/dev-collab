type ProjectLengthProp = {
	length?: number;
};

export function ProjectLoadingSkeleton({ length = 6 }: ProjectLengthProp) {
	return (
		<div className="min-h-screen-minus-100">
			<header className="mb-8">
				<div className="h-6 w-1/3 rounded bg-muted animate-pulse mb-2" />
				<div className="h-4 w-1/2 rounded bg-muted animate-pulse" />
			</header>

			<div className="mb-8">
				<div className="flex flex-col md:flex-row gap-4 justify-between">
					<div className="w-full md:max-w-xs">
						<div className="h-10 w-full rounded-xl bg-muted animate-pulse" />
					</div>

					<div className="md:hidden flex justify-end">
						<div className="h-10 w-24 rounded bg-muted animate-pulse" />
					</div>

					<div className="hidden md:flex flex-wrap gap-2">
						{Array.from({ length: 4 }).map((_, i) => (
							<div key={i} className="h-8 w-20 rounded bg-muted animate-pulse" />
						))}
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{Array.from({ length }).map((_, i) => (
					<div
						key={i}
						className="animate-pulse space-y-4 rounded-xl border bg-card p-6 shadow-sm"
					>
						<div className="flex justify-between items-center">
							<div className="h-4 w-1/3 rounded bg-muted" />
							<div className="h-4 w-16 rounded bg-muted" />
						</div>

						<div className="h-3 w-5/6 rounded bg-muted" />

						<div className="space-y-2">
							<div className="flex flex-wrap gap-2">
								<div className="h-5 w-16 rounded-full bg-muted" />
								<div className="h-5 w-20 rounded-full bg-muted" />
								<div className="h-5 w-12 rounded-full bg-muted" />
							</div>
						</div>

						<div className="flex justify-between items-center mt-4">
							<div className="flex -space-x-2">
								{Array.from({ length: 3 }).map((_, idx) => (
									<div
										key={idx}
										className="size-8 rounded-full bg-muted ring-2 ring-white"
									/>
								))}
								<div className="size-8 rounded-full bg-muted ring-2 ring-white" />
							</div>
							<div className="h-5 w-5 rounded bg-muted" />
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
