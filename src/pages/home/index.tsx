import { FiCheck } from 'react-icons/fi';
import { projects, processSteps, footerSections, benefits } from '@/data/homepage-data';
import type { IconType } from 'react-icons';
import CodeEditor from '@/components/code-editor';
import { Button } from '@/components/ui/button';
import { View } from 'lucide-react';

export interface SectionHeaderProps {
	title: string;
	subtitle: string;
	description?: string;
}

export interface Project {
	id: number;
	title: string;
	description: string;
	skills: string[];
	budget: string;
	proposals: number;
}

export interface ProjectCardProps {
	project: Project;
}

export interface ProcessStepProps {
	icon: IconType;
	title: string;
	children: React.ReactNode;
}

export interface BenefitItemProps {
	title: string;
	children: React.ReactNode;
}

export interface FooterColumnProps {
	title: string;
	items: string[];
}

const SectionHeader = ({ title, subtitle, description }: SectionHeaderProps) => (
	<div className="lg:text-center">
		<h2 className="text-base font-semibold tracking-wide uppercase">{title}</h2>
		<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
			{subtitle}
		</p>
		{description && <p className="mt-4 max-w-2xl text-xl lg:mx-auto">{description}</p>}
	</div>
);

const ProjectCard = ({ project }: ProjectCardProps) => (
	<div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
		<div className="p-6">
			<div className="flex justify-between">
				<h3 className="text-lg font-medium text-gray-900">{project.title}</h3>
				<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
					Open
				</span>
			</div>
			<p className="mt-2 text-sm text-gray-500">{project.description}</p>
			<div className="mt-4">
				<div className="flex flex-wrap gap-2">
					{project.skills.map((skill, index) => (
						<span
							key={index}
							className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
						>
							{skill}
						</span>
					))}
				</div>
			</div>
			<div className="mt-6 flex justify-between items-center">
				<div>
					<p className="text-sm font-medium text-gray-900">{project.budget}</p>
					<p className="text-xs text-gray-500">{project.proposals} proposals</p>
				</div>

				<View className="cursor-pointer dark:text-black" />
			</div>
		</div>
	</div>
);

const ProcessStep = ({ icon: Icon, title, children }: ProcessStepProps) => (
	<div className="text-center">
		<div className="mx-auto flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
			<Icon className="h-6 w-6" />
		</div>
		<div className="mt-5">
			<h3 className="text-lg font-medium ">{title}</h3>
			<p className="mt-2 text-sm">{children}</p>
		</div>
	</div>
);

const BenefitItem = ({ title, children }: BenefitItemProps) => (
	<div className="flex items-start mt-6 first:mt-0">
		<div className="flex-shrink-0">
			<FiCheck className="h-6 w-6 text-green-500" />
		</div>
		<div className="ml-3">
			<p className="text-lg font-medium">{title}</p>
			<p className="mt-1">{children}</p>
		</div>
	</div>
);

const FooterColumn = ({ title, items }: FooterColumnProps) => (
	<div>
		<h3 className="text-sm font-semibold tracking-wider uppercase">{title}</h3>
		<ul className="mt-4 space-y-4">
			{items.map((item, index) => (
				<li key={index}>
					<a href="#" className="text-base hover:text-gray-900">
						{item}
					</a>
				</li>
			))}
		</ul>
	</div>
);

function Home() {
	return (
		<div className="min-h-screen">
			<main>
				<div className="relative">
					<div className="absolute inset-0">
						<div
							className="absolute inset-0 mix-blend-multiply"
							aria-hidden="true"
						></div>
					</div>
					<div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
							<div>
								<h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
									Collaborate on Amazing Software Projects
								</h1>
								<p className="mt-6 text-xl text-gray-800 dark:text-gray-100 max-w-3xl">
									DevCollab connects talented developers with exciting projects.
									Whether you're building something new or need help with an
									existing project, find the perfect collaborators.
								</p>
								<div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
									<Button className="">Find Projects</Button>
									<Button className="bg-blue-700 dark:text-white">
										Post a Project
									</Button>
								</div>
							</div>
							<div className="hidden lg:block">
								<CodeEditor />
							</div>
						</div>
					</div>
				</div>

				<div className="py-12">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<SectionHeader
							title="Projects"
							subtitle="Find Your Next Collaboration"
							description="Browse through exciting software projects looking for talented contributors."
						/>
						<div className="mt-10">
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
								{projects.map(project => (
									<ProjectCard key={project.id} project={project} />
								))}
							</div>
							<div className="mt-12 text-center">
								<Button label="Browse All Projects" />
							</div>
						</div>
					</div>
				</div>

				<div className="py-12">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<SectionHeader
							title="Process"
							subtitle="How DevCollab Works"
							description="Simple steps to start collaborating on software projects"
						/>
						<div className="mt-10">
							<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
								{processSteps.map((step, index) => (
									<ProcessStep key={index} icon={step.icon} title={step.title}>
										{step.description}
									</ProcessStep>
								))}
							</div>
						</div>
					</div>
				</div>

				<div className="py-12">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
							<div>
								<img
									className="rounded-lg shadow-lg"
									src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
									alt="Developers collaborating"
								/>
							</div>
							<div>
								<h2 className="text-3xl font-extrabold sm:text-4xl">
									Why Collaborate on DevCollab?
								</h2>
								<p className="mt-4 text-lg">
									Join a community of developers building amazing software
									together. Whether you're looking to gain experience, earn money,
									or build something great, DevCollab has you covered.
								</p>
								<div className="mt-8">
									{benefits.map((benefit, index) => (
										<BenefitItem key={index} title={benefit.title}>
											{benefit.description}
										</BenefitItem>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="bg-indigo-700">
					<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
						<h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
							<span className="block">Ready to collaborate?</span>
							<span className="block text-indigo-200">
								Join thousands of developers building amazing software.
							</span>
						</h2>
						<div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
							<div className="inline-flex rounded-md shadow">
								<Button
									className=" text-indigo-600 bg-white hover:bg-indigo-50"
									label="Get Started"
								/>
							</div>
						</div>
					</div>
				</div>
			</main>

			<footer className="">
				<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
						{footerSections.map((section, index) => (
							<FooterColumn key={index} title={section.title} items={section.items} />
						))}
					</div>
					<div className="mt-12 border-t border-gray-200 pt-8">
						<p className="text-base text-gray-400 text-center">
							&copy; 2025 DevCollab. All rights reserved.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Home;
