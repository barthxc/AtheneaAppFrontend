import { z } from "zod";
import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE_MB } from "@/features/core/constants";
import { dateRegex } from "@/features/core/utils";

export const eventsFormSchema = z.object({
	title: z.string({ message: "El título es requerido " }).min(3, {
		message: "El título del contenido debe tener al menos 3 caracteres",
	}),
	date: z
		.string()
		.regex(dateRegex, "La fecha del evento debe tener el formato de DD/MM/AAAA o DD-MM-AAAA")
		.transform((value) => {
			const [day, month, year] = value.includes("/") ? value.split("/") : value.split("-");
			return `${year}/${month}/${day}`;
		}),
	description: z.string({ message: "La descripción es requerida " }).min(3, {
		message: "La descripción del contenido debe tener al menos 3 caracteres",
	}),
	image: z
		.instanceof(File, { message: "Selecciona un archivo válido" })
		.refine((files) => ACCEPTED_IMAGE_TYPES.includes(files.type), {
			message: "La imagen debe ser un archivo .jpg, .jepg, .png o .webp",
		})
		.refine((files) => files.size <= MAX_FILE_SIZE_MB * 1024 * 1024, {
			message: "La imagen no debe ser mayor a 5MB",
		}),
});
