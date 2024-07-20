import type { UseFormReturn } from "react-hook-form";

import type { FormViewProps } from "@/features/core/types";

import type { CalendarFormValues } from "@/features/calendar/types";

export interface CalendarFormViewProps extends FormViewProps {
	form: UseFormReturn<CalendarFormValues>;
}
