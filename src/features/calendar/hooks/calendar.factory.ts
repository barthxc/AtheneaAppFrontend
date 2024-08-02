import { CalendarService } from "../services/calendar.service";
import { createQueryKeys } from "@lukemorales/query-key-factory";
export const CalendarApiFactory = createQueryKeys("members", {
  getCalendar: () => ({
    queryKey: ["getCalendar"],
    queryFn: () => CalendarService.getCalendar(),
  }),
});
