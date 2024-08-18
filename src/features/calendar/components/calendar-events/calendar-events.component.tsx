import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "dayjs/locale/es";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

import type { CalendarEventsProps } from "@/features/calendar/components";

dayjs.locale("es");
dayjs.extend(customParseFormat);

export const CalendarEvents: React.FC<CalendarEventsProps> = ({ events }) => {
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
				style={{ height: "75vh" }}
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
