import { Skeleton } from '@/components/ui/skeleton';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { FiFolder, FiFileText, FiCalendar } from 'react-icons/fi';

export default function ProjectSkeleton() {
	return (
		<section className="space-y-4 animate-pulse">
			<div className="h-8 bg-gray-200 rounded w-3/4" />

			<div className="border text-sm rounded">
				<div className="p-2 border-b flex items-center gap-2">
					<div className="w-4 h-4 bg-gray-300 rounded-full" />
					<div className="h-4 bg-gray-200 rounded w-1/4" />
				</div>
				<div className="p-2 flex items-center gap-2 border-b">
					<div className="w-4 h-4 bg-gray-300 rounded-full" />
					<div className="h-4 bg-gray-200 rounded w-1/3" />
				</div>
				<div className="p-2 flex items-center gap-2">
					<div className="w-4 h-4 bg-gray-300 rounded-full" />
					<div className="h-4 bg-gray-200 rounded w-1/2" />
				</div>
			</div>

			<div className="border p-2 rounded space-y-2">
				<div className="h-4 bg-gray-200 rounded w-full" />
				<div className="h-4 bg-gray-200 rounded w-5/6" />
				<div className="h-4 bg-gray-200 rounded w-4/5" />
			</div>

			<div className="space-y-4">
				<div className="h-8 bg-gray-200 rounded w-1/4" />

				{[1, 2, 3].map((i) => (
					<div className="border rounded" key={i}>
						<div className="border-b p-2 h-6 bg-gray-200" />
						<div className="min-h-44 p-2 space-y-2">
							<div className="h-4 bg-gray-200 rounded w-full" />
							<div className="h-4 bg-gray-200 rounded w-5/6" />
							<div className="h-4 bg-gray-200 rounded w-4/5" />
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export function ProjectAccordionSkeleton() {
	const fakeStacks = Array.from({ length: 1 });
	const fakeCourses = Array.from({ length: 2 });
	const fakeLessons = Array.from({ length: 3 });
	const defaultAccordionValues = fakeStacks.map((_, i) => `stack-${i}`);

	return (
		<div className="space-y-4">
			<Accordion
				type="multiple"
				className="space-y-4"
				defaultValue={defaultAccordionValues}
			>
				{fakeStacks.map((_, stackIdx) => (
					<AccordionItem
						key={`stack-${stackIdx}`}
						value={`stack-${stackIdx}`}
						className="rounded-lg border"
					>
						<AccordionTrigger className="hover:no-underline px-2 bg-muted/50 hover:bg-muted/70">
							<div className="flex items-center gap-2">
								<FiFolder className="h-5 w-5 text-primary" />
								<Skeleton className="h-6 w-40 rounded" />
							</div>
						</AccordionTrigger>

						<AccordionContent className="px-0 pt-4 pb-2">
							<div className="space-y-4">
								{fakeCourses.map((_, courseIdx) => (
									<div
										key={`course-${courseIdx}`}
										className="px-2"
									>
										<div className="flex items-center gap-3 mb-4 border-b pb-2">
											<FiFileText className="h-4 w-4 text-muted-foreground" />
											<Skeleton className="h-5 w-48 rounded" />
										</div>

										<div className="space-y-3">
											{fakeLessons.map((_, lessonIdx) => (
												<div
													key={`lesson-${lessonIdx}`}
													className="flex items-center justify-between rounded-lg border p-2 hover:bg-muted/30 transition-colors"
												>
													<div className="flex items-center gap-4 w-full">
														<Skeleton className="h-6 w-10 rounded bg-muted" />
														<div className="flex flex-col gap-2 w-full">
															<Skeleton className="h-4 w-56" />
															<div className="flex items-center gap-2 text-xs text-muted-foreground">
																<FiCalendar className="h-4 w-4" />
																<Skeleton className="h-3 w-32" />
															</div>
														</div>
													</div>
													<Skeleton className="h-6 w-12 rounded-full" />
												</div>
											))}
										</div>
									</div>
								))}
							</div>
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
}



export  function ProjectResourceSkeleton() {
	return (
		<section className="space-y-4">
			<div className="flex h-[calc(100vh-100px)] border rounded shadow-sm">
				<div className="w-1/3 border-r overflow-y-auto p-4">
					<ul className="space-y-2">
						{Array.from({ length: 6 }).map((_, index) => (
							<li key={index}>
								<Skeleton className="h-6 w-full rounded" />
							</li>
						))}
					</ul>
				</div>

				<div className="flex-1 p-3 overflow-y-auto">
					<div className="prose max-w-none dark:prose-invert">
						<Skeleton className="h-8 w-3/4 mb-4" />
						<div className="space-y-3">
							{Array.from({ length: 10 }).map((_, i) => (
								<Skeleton key={i} className="h-4 w-full" />
							))}
							<Skeleton className="h-4 w-5/6" />
							<Skeleton className="h-4 w-2/3" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
