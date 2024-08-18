import type { CalendarResponse } from "@/features/calendar/types";

export interface CalendarEventsProps {
	events: CalendarResponse[];
}

export interface CalendarEvent {
	id?: string;
	title: string;
	from: string | Date;
	to: string | Date;
}
