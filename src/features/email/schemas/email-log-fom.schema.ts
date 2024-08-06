import { z } from "zod";

export const emailLogFormSchema = z.object({
  title: z.string().min(3, "El título debe ser mayor a 3 carácteres"),
  msg: z.string().min(5, "El mensaje debe ser mayor a 5 carácteres"),
});
