import { z } from "zod";

export const colaboratorFormSchema = z.object({
  title: z.string().min(3, {
    message: "El nombre del producto debe tener al menos 3 caracteres",
  }),
  image: z
    .instanceof(File)
    .refine((file) => ["image/jpeg", "image/png"].includes(file.type), {
      message: "La imagen debe ser un archivo JPEG o PNG",
    })
    .refine((file) => file.size <= 5 * 1024 * 1024, {
      message: "La imagen no debe ser mayor a 5MB",
    }),
});
