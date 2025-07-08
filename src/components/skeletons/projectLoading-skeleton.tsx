type ProjectLengthProp = {
	length?: number;
};

export function ProjectLoadingSkeleton({ length = 6 }: ProjectLengthProp) {
	return (
		<div className="min-h-screen-minus-100">
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
