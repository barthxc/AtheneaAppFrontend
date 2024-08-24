import { z } from "zod";

export const collaboratorFormSchema = z.object({
	title: z.string().min(3, {
		message: "El título del colaborador debe tener al menos 3 caracteres",
	}),
	image: z
		.instanceof(File, { message: "El archivo no es válido" })
		.refine((file) => ["image/jpeg", "image/png"].includes(file.type), {
			message: "La imagen debe ser un archivo JPEG o PNG",
		})
		.refine((file) => file.size <= 5 * 1024 * 1024, {
			message: "La imagen no debe ser mayor a 5MB",
		})
		.nullable(),
});

export const collaboratorsFormSchema = z.object({
	collaboratorsFields: z.array(collaboratorFormSchema),
});
