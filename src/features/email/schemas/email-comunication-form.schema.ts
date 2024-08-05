import { z } from "zod";

export const emailComunicationFormSchema = z.object({
  email: z.string().email({ message: "Introduce un email válido" }),
  title: z.string().min(3, "El título debe ser mayor a 3 carácteres"),
  msg: z.string().min(10, "El mensaje debe ser mayor a 10 carácteres"),
});
