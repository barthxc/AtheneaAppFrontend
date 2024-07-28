import CalendarEvents from "@/features/landing/components/calendar.component";
import { Spinner } from "@/features/core/components/ui";
export function CalendarPage() {
  const loading = false;
  //TODO : petición STORE
  return <>{loading ? <Spinner /> : <CalendarEvents />}</>;
}
