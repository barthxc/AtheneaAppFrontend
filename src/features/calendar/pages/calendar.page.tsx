import { CalendarForm } from "@/features/calendar/components";
import { useCalendar } from "@/features/calendar/hooks/hook";
import { CalendarTable } from "@/features/calendar/components";

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
