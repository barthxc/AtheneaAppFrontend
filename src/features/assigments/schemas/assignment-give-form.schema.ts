import { z } from "zod";

export const assignmentGiveFormSchema = z.object({
	itemName: z.string({ message: "Ingresa el nombre de lo que quieras ceder" }).min(1, "Ingresa al menos 1 caracter"),
	quantity: z.coerce.number().min(1, "La cantidad mínima es 1").optional(),
});
