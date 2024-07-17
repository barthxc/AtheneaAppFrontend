import { z } from "zod";

export const memberFormSchema = z.object({
	name: z.string().min(3, { message: "El nombre del miembro debe tener al menos 3 caracteres" }),
	role: z.string().min(1, { message: "Por favor, selecciona un rol" }),
});
