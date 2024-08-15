import { Section, Heading } from "@/features/landing/components";

import { Spinner } from "@/features/core/components/ui";
import { useCalendar } from "@/features/calendar/hooks/hook";
import CalendarEvents from "@/features/calendar/components/calendar.component";

export function CalendarPage() {
  const { isLoading, isFetching, calendar, isError } = useCalendar();

  return (
    <Section className="">
      <Heading
        variant="display"
        size="lg"
        position="centered"
        className="max-w-none">
        Calendario de Eventos
      </Heading>
      {isError && !isLoading && !isFetching && calendar && <p>error!</p>}
      {isLoading || isFetching ? (
        <Spinner className="h-[75vh]" />
      ) : (
        <CalendarEvents events={calendar} />
      )}
    </Section>
  );
}
