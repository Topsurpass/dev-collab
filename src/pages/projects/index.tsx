/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm, FormProvider, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addProjectSchema, type AddProjectInputs } from "@/validations/project-skills-schema";
import CreateNewProject from "./add-project-form";
import useProject from "@/api/projects/use-mutate-project";

const initialValues = {
	title: "",
	description: "",
	status: "pending",
};

export default function NewProject() {
	const methods = useForm<AddProjectInputs>({
		resolver: zodResolver(addProjectSchema),
		defaultValues: initialValues,
	});

	const { mutate: addNewProject, isPending } = useProject();

	const processForm: SubmitHandler<AddProjectInputs> = async (data) => {
		const transformFormData = {
			title: data.title,
			description: data.description,
			status: data.status,
			roles: data.roles.map((role: any) => ({
				role_input: role.role,
				number_required: Number(role.number_required),
				skills_input: role.skills.map((skill: any) => skill.label),
			})),
		};

		addNewProject(transformFormData);
	};

	return (
		<FormProvider {...methods}>
			<div>
				{/* <pre>{JSON.stringify(methods.watch(), null, 2)}</pre> */}
				<CreateNewProject
					handleSubmit={methods.handleSubmit(processForm)}
					isLoading={isPending}
				/>
			</div>
		</FormProvider>
	);
}
