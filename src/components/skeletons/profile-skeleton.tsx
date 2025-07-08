export default function ProfileSkeleton() {
	return (
		<section className="animate-pulse space-y-6">
			<div className="h-6 bg-gray-300 rounded w-1/4"></div>
			<div className="h-4 bg-gray-200 rounded w-1/2"></div>

			<div className="flex items-center gap-5">
				<div className="w-24 h-24 bg-gray-300 rounded-full"></div>
				<div>
					<div className="h-4 bg-gray-300 rounded w-32 mb-2"></div>
					<div className="h-3 bg-gray-200 rounded w-48"></div>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div className="h-10 bg-gray-200 rounded"></div>
				<div className="h-10 bg-gray-200 rounded"></div>
				<div className="h-10 bg-gray-200 rounded"></div>
				<div className="h-10 bg-gray-200 rounded"></div>
			</div>

			<div className="flex justify-end">
				<div className="h-10 w-36 bg-gray-300 rounded"></div>
			</div>
		</section>
	);
}
