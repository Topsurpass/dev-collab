const codeLines = [
	{
		text: (
			<>
				<span className="text-purple-400">import</span>{' '}
				<span className="text-yellow-300">React</span> from{' '}
				<span className="text-green-300">'react'</span>;
			</>
		),
	},
	{
		text: (
			<>
				<span className="text-purple-400">import</span>{' '}
				<span className="text-yellow-300">{`{ useState }`}</span> from{' '}
				<span className="text-green-300">'react'</span>;
			</>
		),
	},
];

const avatarUrls = [
	'https://randomuser.me/api/portraits/men/41.jpg',
	'https://randomuser.me/api/portraits/women/32.jpg',
	'https://randomuser.me/api/portraits/men/22.jpg',
	'https://randomuser.me/api/portraits/men/27.jpg',
];

const techTags = ['JavaScript', 'Reactjs', 'Typescript'];

export default function CodeEditor() {
	return (
		<div className="bg-gray-50 rounded-xl shadow-xl p-6">
			<div className="text-center">
				<h3 className="text-lg font-medium text-gray-900">Featured Project</h3>
				<p className="mt-2 text-sm text-gray-500">Real-time collaborative code editor</p>
			</div>

			<div className="mt-4">
				<div className="bg-gray-800 rounded-lg overflow-hidden">
					<div className="px-4 py-2 bg-gray-700 flex items-center">
						<div className="flex space-x-1">
							{['red', 'yellow', 'green'].map(color => (
								<div
									key={color}
									className={`w-3 h-3 rounded-full bg-${color}-400`}
								/>
							))}
						</div>
						<div className="ml-2 text-xs text-gray-300">collab-editor.js</div>
					</div>

					<div>
						{codeLines.map((line, index) => (
							<div key={index} className="px-4 text-gray-300">
								{line.text}
							</div>
						))}
					</div>

					<div className="p-4 font-mono text-sm text-green-400">
						<div>
							<span className="text-purple-400">function</span>{' '}
							<span className="text-yellow-300">handleCollaboration</span>() {'{'}
						</div>
						<div className="ml-4">
							<span className="text-blue-400">const</span>{' '}
							<span className="text-yellow-300">[code, setCode]</span> ={' '}
							<span className="text-blue-400">useState</span>(
							<span className="text-green-300">''</span>);
						</div>
						<div className="ml-4">
							<span className="text-blue-400">const</span>{' '}
							<span className="text-yellow-300">
								[collaborators, setCollaborators]
							</span>{' '}
							= <span className="text-blue-400">useState</span>([]);
						</div>
						<div className="ml-8">
							<span className="text-gray-500">// Real-time updates...</span>
						</div>
						<div>{'}'}</div>
					</div>
				</div>

				<div className="mt-4 flex justify-between items-center">
					<div className="flex items-center">
						<div className="flex -space-x-2">
							{avatarUrls.map((src, i) => (
								<img
									key={i}
									className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
									src={src}
									alt=""
								/>
							))}
						</div>
						<span className="ml-2 text-sm text-gray-500">
							{avatarUrls.length} collaborators
						</span>
					</div>

					<div className="space-x-2">
						{techTags.map(tag => (
							<span
								key={tag}
								className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
							>
								{tag}
							</span>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}