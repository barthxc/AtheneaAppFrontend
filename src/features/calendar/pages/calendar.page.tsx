import { CalendarForm, CalendarTable } from "@/features/calendar/components";
import { useCalendar } from "@/features/calendar/hooks/hook";

export function CalendarPage() {
  const { calendar } = useCalendar();
  return (
    <>
      <CalendarForm />

      <h1>table + actions </h1>
      <CalendarTable data={calendar} />
    </>
  );
}
