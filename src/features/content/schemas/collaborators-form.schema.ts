import { z } from "zod";

const MAX_FILE_SIZE_MB = 5;
const ACCEPTED_IMAGE_TYPES = ["image/jpg", "image/jpeg", "image/png", "image/webp"];

export const collaboratorFormSchema = z.object({
	title: z.string().min(3, {
		message: "El título del colaborador debe tener al menos 3 caracteres",
	}),
	image: z
		.instanceof(File)
		// .refine((files) => files?.size === 0, "Se requiere una imagen")
		.refine((files) => ACCEPTED_IMAGE_TYPES.includes(files.type), {
			message: "La imagen debe ser un archivo .jpg, .jepg, .png o .webp",
		})
		.refine((files) => files.size <= MAX_FILE_SIZE_MB * 1024 * 1024, {
			message: "La imagen no debe ser mayor a 5MB",
		}),
});

export const collaboratorsFormSchema = z.object({
	collaboratorsFields: z.array(collaboratorFormSchema),
});
