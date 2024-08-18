import { createQueryKeys } from "@lukemorales/query-key-factory";
import { CalendarService } from "@/features/calendar/services";

export const CalendarApiFactory = createQueryKeys("members", {
	getCalendar: () => ({
		queryKey: ["getCalendar"],
		queryFn: () => CalendarService.getCalendar(),
	}),
});
