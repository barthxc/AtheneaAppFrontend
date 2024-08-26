import { useState } from "react";
import { type FieldElement, useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, Gallery, Input, Modal, Form } from "@/features/core/components/ui";
import { useCreateColaborator, useGetColaborators } from "@/features/content/hooks";
import { collaboratorsFormSchema } from "@/features/content/schemas";
import type { CollaboratorsFormValues } from "@/features/content/types";
import { FormField, Icons } from "@/features/core/components";

// https://github.com/colinhacks/zod/issues/387#issuecomment-1191390673
// const MAX_FILE_SIZE = 500000;
// const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

// const RegistrationSchema = z.object({
//   profileImage: z
//     .any()
//     .refine((files) => files?.length == 1, "Image is required.")
//     .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
//     .refine(
//       (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
//       ".jpg, .jpeg, .png and .webp files are accepted."
//     ),
// });

export function Collaborators() {
	const { data, isLoading } = useGetColaborators();
	const { mutate: createColaborator, isPending } = useCreateColaborator();
	const [open, setOpen] = useState(false);
	// const [collaboratorsFields, setCollaboratorsField] = useState([{
	// 	title: '',
	// }])

	const initialValues = {
		collaboratorsFields: [
			{
				title: "",
				image: new File([], ""),
			},
		],
	};

	const form = useForm<CollaboratorsFormValues>({
		resolver: zodResolver(collaboratorsFormSchema),
		defaultValues: initialValues,
	});

	const {
		fields: collaboratorsFields,
		append,
		remove,
	} = useFieldArray({
		control: form.control,
		name: "collaboratorsFields",
	});

	console.log({ collaboratorsFields });

	const handleSubmit = async (data: CollaboratorsFormValues) => {
		console.log("FORM_DATA", data.collaboratorsFields);
		// TODO: Check what type of data the backend is expecting
		// createColaborator(data.collaboratorsFields);
	};

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const image = e.target.files?.[0];
		if (!image) return;

		const imageId = Number.parseInt(e.target.name.split(".")[1]);
		form.setValue(`collaboratorsFields.${imageId}.image`, image);
		console.log({ fieldName: `collaboratorsFields.${imageId}.image`, image });
	};

	const addField = () => {
		const maxFieldAmountAtOnce = 5;
		if (collaboratorsFields.length >= maxFieldAmountAtOnce) return;
		append(initialValues.collaboratorsFields[0]);
	};

	const removeField = (field: FieldElement) => {
		if (collaboratorsFields.length === 1) return;
		const fieldId = Number.parseInt(field.name.split(".")[1]);
		remove(fieldId);
	};

	return (
		<div className="flex flex-col items-start gap-10">
			<div className="flex flex-wrap justify-end items-center gap-5 w-full">
				<Button
					onClick={() => {
						setOpen(true);
					}}>
					Crear colaborador
				</Button>
			</div>

			<Modal title="Agrega un colaborador" description="" isOpen={open} onClose={() => setOpen(false)}>
				<div className="flex items-start justify-end flex-wrap mb-5 gap-5">
					<Button onClick={addField}>Agregar otro</Button>
				</div>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(handleSubmit)} className="w-full space-y-8">
						{collaboratorsFields.map((field, index) => (
							<div className="flex flex-col md:flex-row items-start gap-5" key={field.id}>
								<FormField
									formControl={form.control}
									name={`collaboratorsFields.${index}.title`}
									label="Título"
									render={{
										renderProp: ({ field }) => <Input disabled={isPending} placeholder="Título" {...field} />,
									}}
								/>

								<FormField
									formControl={form.control}
									name={`collaboratorsFields.${index}.image`}
									label="Imagen"
									render={{
										renderProp: ({ field }) => (
											<div className="flex justify-between items-center gap-5">
												<Input type="file" disabled={isPending} {...field} onChange={handleImageChange} />
												<Button
													variant="destructive"
													size="sm"
													className="max-w-max"
													onClick={() => removeField(field)}>
													<Icons.trash size={20} />
												</Button>
											</div>
										),
									}}
								/>
							</div>
						))}

						<Button disabled={isPending} className="mr-auto space-y-2" type="submit">
							Crear
						</Button>
					</form>
				</Form>
			</Modal>
			<Gallery isLoading={isLoading}>
				{data?.map((item) => (
					<Gallery.Image
						key={item.id}
						src={item.imageUrl}
						alt={`Imagen del colaborador ${item.title}`}
						className="h-48 object-contain">
						<Gallery.ImageHeading>{item.title}</Gallery.ImageHeading>
						<Gallery.ImageActions>
							<button
								type="button"
								className="hover:animate-pulse font-bold text-2xl"
								onClick={() => console.log(`delete ${item.id}`)}>
								<Icons.close />
							</button>
						</Gallery.ImageActions>
					</Gallery.Image>
				))}
			</Gallery>
		</div>
	);
}
