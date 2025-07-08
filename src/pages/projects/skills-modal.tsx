import { useMemo, useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import Modal from '@/components/modal';
import useGlobalProvider from '@/hooks/use-global-provider';
import { EntityType } from '@/types/enum';
import { ReactSelect } from '@/components/ui/forms';
import useGetSkills from '@/api/skills/use-get-skills';
import { TextField } from '@/components/ui/forms';

interface SkillOption {
	value: string;
	label: string;
}

interface Role {
	role: string;
	skills: SkillOption[];
}

export default function SkillsModal() {
	const { isModalOpen, onModalClose, entity } = useGlobalProvider();
	const { control, watch, setValue, trigger } = useFormContext();
	const roles = watch('roles', []) as Role[];

	const { data, isLoading } = useGetSkills();

	const formattedSkills: SkillOption[] = useMemo(() => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		return ((data as any)?.data || []).map((skill: any) => ({
			value: skill.id,
			label: skill.name,
		}));
	}, [data]);

	const handleSkillsChange = useCallback(
		(selected: SkillOption[], roleIndex: number) => {
			const updatedRoles = [...roles];
			updatedRoles[roleIndex].skills = selected;
			setValue('roles', updatedRoles);
			trigger('roles');
		},
		[roles, setValue, trigger],
	);

	return (
		<Modal
			title="Add skills to selected roles"
			open={isModalOpen && entity === EntityType.PROJECT}
			className="rounded-2xl pb-5"
			handleClose={onModalClose}
			size="2xl"
			titleClass="text-xl md:text-2xl"
			headerClass="bg-gradient-to-r from-blue-900 to-blue-500 text-white items-center h-18 py-4"
			backdrop
		>
			<div className="h-96 w-full space-y-5 overflow-y-scroll px-5 text-gray-700 md:w-[600px] md:p-0">
				{roles.map((role, index) => (
					<div key={index}>
						<p className="mb-1 font-semibold">{role.role}</p>
						<ReactSelect
							label="Skills"
							name={`roles.${index}.skills`}
							options={formattedSkills}
							isLoading={isLoading}
							isDisabled={isLoading}
							placeholder="Select skills"
							control={control}
							isMulti
							onChange={selected =>
								handleSkillsChange(selected as SkillOption[], index)
							}
							value={role.skills ?? []}
						/>
						<TextField
							label="Number of Contributors"
							name={`roles.${index}.number_required`}
							control={control}
							placeholder="How many contributors do you need?"
							className="bg-white border-gray-300 text-black"
						/>
					</div>
				))}
			</div>
		</Modal>
	);
}
