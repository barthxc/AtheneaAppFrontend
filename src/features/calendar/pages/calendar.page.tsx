import CalendarEvents from "@/features/landing/components/calendar.component";
import { Spinner } from "@/features/core/components/ui";
import { useCalendar } from "@/features/calendar/hooks/hook";

export function CalendarPage() {
  const { isLoading, isFetching, calendar, isError, errorMessage } =
    useCalendar();

  return (
    <>
      {isError && !isLoading && !isFetching && calendar && <p>error!</p>}
      {isLoading || isFetching ? (
        <Spinner />
      ) : (
        <CalendarEvents events={calendar} />
      )}
    </>
  );
}
