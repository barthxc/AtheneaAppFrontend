import type { DateRange, SelectRangeEventHandler } from "react-day-picker";

export interface CalendarDateRangePickerProps extends React.HTMLAttributes<HTMLDivElement> {
	label?: string | null;
	onChangeDateRage: SelectRangeEventHandler;
	currentDate: DateRange | undefined;
}
