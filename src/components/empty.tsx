import type { ComponentType } from 'react';

type Props = {
	title: string;
	description: string;
	Icon: ComponentType<{ className?: string }>;
};

export default function Empty({ title, description, Icon }: Props) {
	return (
		<div className="col-span-full flex w-full flex-col items-center justify-center p-3 md:p-8 text-center">
			<Icon className="mb-4 h-8 w-8 md:h-10 md:w-10 text-muted-foreground" />
			<h2 className="md:text-lg text-md font-semibold text-muted-foreground">{title}</h2>
			<p className="mt-2 text-xs md:text-sm text-muted-foreground max-w-md">{description}</p>
		</div>
	);
}
