import { FormViewProps } from "@/types";
import { UseFormReturn } from "react-hook-form";
import { CalendarFormValues } from "..";

export interface CalendarFormViewProps extends FormViewProps {
  form: UseFormReturn<CalendarFormValues>;
}
