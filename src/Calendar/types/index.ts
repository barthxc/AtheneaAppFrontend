import { calendarFormSchema } from "../schemas";
import { z } from "zod";

export type CalendarFormValues = z.infer<typeof calendarFormSchema>;
