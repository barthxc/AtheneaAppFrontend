import { z } from "zod";

export const contentFormSchema = z
	.object({
		title: z.string({ message: "El título es requerido" }).min(3, {
			message: "El título del contenido debe tener al menos 3 caracteres",
		}),
		description: z.string().min(3, {
			message: "La descripción del contenido debe tener al menos 3 caracteres",
		}),
	})
	.partial()
	// TODO: Check why it does not show the error message
	.refine((values) => Object.values(values).some((val) => val !== undefined), {
		message: "Debes completar al menos un campo",
	});
