import { Calendar, dayjsLocalizer } from "react-big-calendar";

import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import "dayjs/locale/es";
import customParseFormat from "dayjs/plugin/customParseFormat";
import type { CalendarResponse } from "@/features/calendar/types";
dayjs.locale("es");
dayjs.extend(customParseFormat);

interface CalendarProps {
  events: CalendarResponse[];
}

interface CalendarEvents {
  id?: string;
  title: string;
  from: string | Date;
  to: string | Date;
}

const CalendarEvents: React.FC<CalendarProps> = ({ events }) => {
  const parseDate = (dateStr: string | Date) => dayjs(dateStr).toDate();
  const localizer = dayjsLocalizer(dayjs);

  const parsedEvents = events.map((event) => ({
    ...event,
    start: parseDate(event.from),
    end: parseDate(event.to),
  }));

  return (
    <>
      <Calendar
        localizer={localizer}
        events={parsedEvents}
        views={["month", "agenda"]}
        style={{ height: "80vh" }}
        formats={{
          monthHeaderFormat: (date) => {
            return dayjs(date).format("DD - MMMM - YY");
          },
        }}
        messages={{
          allDay: "Todo el día",
          previous: "Anterior",
          next: "Siguiente",
          today: "Hoy",
          month: "Mes",
          week: "Semana",
          day: "Día",
          agenda: "Agenda",
          date: "Fecha",
          time: "Hora",
          event: "Evento",
          noEventsInRange: "Sin eventos",
        }}
      />
    </>
  );
};

export default CalendarEvents;
