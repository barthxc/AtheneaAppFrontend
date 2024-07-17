import { z } from "zod";

export const calendarFormSchema = z.object({
	name: z.string().min(3, { message: "El nombre del producto debe tener al menos 3 caracteres" }),
	description: z.string().min(3, { message: "La descripción del producto debe tener al menos 3 caracteres" }),
	price: z.coerce.number(),
	category: z.string().min(1, { message: "Por favor, selecciona una categoría" }),
});
