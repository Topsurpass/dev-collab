interface IStepperLabel {
	steps: {
		step: number;
		label?: string;
	}[];
	activeStep: number;
}

export default function StepperLabel({ steps, activeStep }: IStepperLabel) {
	return (
		<div className="flex w-full flex-col items-center justify-center gap-5 px-5">
			<p className="text-center  text-primary text-xl">
				Complete your profile in 2 simple steps
			</p>

			<div className="relative w-full max-w-md">
				<div className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-gray-300" />

				<div className="relative z-10 flex justify-between">
					{steps.map((item, index) => {
						const isActive = activeStep === item.step;
						const isCompleted = activeStep > item.step;

						return (
							<div
								key={index}
								className={`flex h-8 w-8 items-center justify-center rounded-full border-2 text-[12px] font-medium ${
									isActive
										? 'bg-black text-white border-black dark:bg-white dark:text-black '
										: isCompleted
											? 'bg-black text-white dark:bg-white dark:text-black'
											: 'bg-gray-300 dark:bg-gray-400 dark:text-white'
								} `}
							>
								{item.step}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
