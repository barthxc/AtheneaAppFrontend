import { Section } from "@/features/landing/components";

import { Spinner } from "@/features/core/components/ui";
import { useCalendar } from "@/features/calendar/hooks/hook";
import CalendarEvents from "@/features/calendar/components/calendar.component";

export function CalendarPage() {
  const { isLoading, isFetching, calendar, isError } = useCalendar();

  return (
    <Section>
      {isError && !isLoading && !isFetching && calendar && <p>error!</p>}
      {isLoading || isFetching ? (
        <Spinner className="h-[80vh]" />
      ) : (
        <CalendarEvents events={calendar} />
      )}
    </Section>
  );
}
