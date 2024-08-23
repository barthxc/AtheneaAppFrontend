import { useCalendar } from "@/features/calendar/hooks";
import { CalendarForm, CalendarTable } from "@/features/calendar/components";
import { Heading, Separator } from "@/features/core/components/ui";

export function CalendarControlPage() {
  const { calendar } = useCalendar();
  const title = "Gestión del calendario";
  const description = "Gestiona el calendario de la asociación.";
  return (
    <>
      <Heading title={title} description={description} />
      <Separator />
      <p className="text-2xl font-bold ">Crear Fecha</p>
      <CalendarForm />

      <p className="text-2xl font-bold ">Fechas Anotadas</p>
      <CalendarTable data={calendar} />
    </>
  );
}
