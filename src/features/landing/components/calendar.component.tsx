import { Calendar, dayjsLocalizer } from "react-big-calendar";

import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import "dayjs/locale/es";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.locale("es");
dayjs.extend(customParseFormat);

interface CalendarProps {
  events?: CalendarEvents[];
}

interface CalendarEvents {
  id?: string;
  start: string | Date;
  end: string | Date;
  title: string;
}

const CalendarEvents: React.FC<CalendarProps> = () => {
  const parseDate = (dateStr: string | Date) => dayjs(dateStr).toDate();
  const localizer = dayjsLocalizer(dayjs);

  //TODO :Hay que pasarle por props events y a esos events tenemos que usarle el parseDate

  const events = [
    // {
    //   start: parseDate("16-06-2024"),
    //   end: parseDate("16-06-2024"),
    //   title: "Cierre de Athenea",
    // },
    {
      start: parseDate("2024-07-04T00:54:27.910Z"),
      end: parseDate("2024-07-04T00:54:27.910Z"),
      title: "test",
    },
    {
      start: parseDate("28-07-2024"),
      end: parseDate("28-07-2024"),
      title: "test2",
    },
    {
      start: parseDate("2024-07-28"),
      end: parseDate("2024-07-28"),
      title: "test3",
    },
  ];

  return (
    <>
      <Calendar
        localizer={localizer}
        events={events}
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
