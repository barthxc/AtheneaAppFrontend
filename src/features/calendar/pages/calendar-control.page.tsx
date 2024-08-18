import { useCalendar } from "@/features/calendar/hooks";
import { CalendarForm, CalendarTable } from "@/features/calendar/components";

export function CalendarControlPage() {
	const { calendar } = useCalendar();
	return (
		<>
			<CalendarForm />

			<h1>table + actions </h1>
			<CalendarTable data={calendar} />
		</>
	);
}
