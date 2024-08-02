import { z } from "zod";

export const calendarFormSchema = z.object({
  title: z.string().min(3, {
    message: "El nombre del producto debe tener al menos 3 caracteres",
  }),
});
