import type { DateRange, SelectRangeEventHandler } from "react-day-picker";

export interface CalendarDateRangePickerProps extends React.HTMLAttributes<HTMLDivElement> {
	onChangeDateRage: SelectRangeEventHandler;
	currentDate: DateRange | undefined;
}
