import { z } from "zod"

export const calendarFormSchema = z.object({
	name: z.string().min(3, { message: "Product Name must be at least 3 characters" }),
	description: z.string().min(3, { message: "Product description must be at least 3 characters" }),
	price: z.coerce.number(),
	category: z.string().min(1, { message: "Please select a category" }),
})
