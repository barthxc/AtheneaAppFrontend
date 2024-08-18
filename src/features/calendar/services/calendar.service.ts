import { atheneaApi } from "@/features/core/lib/api";
import type { Calendar, CalendarResponse } from "@/features/calendar/types";

export class CalendarService {
	static create = async (event: Calendar) => {
		try {
			const { data } = await atheneaApi.post<CalendarResponse>("/calendar", event);
			return data;
		} catch (error: any) {
			throw error.response?.data;
		}
	};

	static getCalendar = async () => {
		try {
			const { data } = await atheneaApi.get<CalendarResponse[]>("/calendar");
			return data;
		} catch (error: any) {
			throw error.response?.data;
		}
	};

	static remove = async (id: string) => {
		try {
			const { data } = await atheneaApi.delete(`/calendar/${id}`);
			return data;
		} catch (error: any) {
			throw error.response?.data;
		}
	};
}
