import { z } from "zod";

export const authSchema = z.object({
	email: z.string().email({ message: "Introduce un email válido" }),
	password: z.string().min(1, { message: "La contraseña es requerida" }),
});
