import type { calendarFormSchema } from "@/features/calendar/schemas";
import type { z } from "zod";

export type CalendarFormValues = z.infer<typeof calendarFormSchema>;
