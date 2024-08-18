import type { z } from "zod";
import type { calendarFormSchema } from "@/features/calendar/schemas";

export type CalendarFormValues = z.infer<typeof calendarFormSchema>;
