import type { z } from "zod";
import type { eventsFormSchema } from "@/features/content/schemas";

export type EventsFormValues = z.infer<typeof eventsFormSchema>;
