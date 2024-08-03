import { atheneaApi } from "@/features/core/lib/api";
import type { Calendar, CalendarResponse } from "@/features/calendar/types";

// src/features/members/services/member.service.ts
// export interface FetchMembersParams {
//   name?: string;
//   lastName?: string;
//   identificationNumber?: string;
//   memberNumber?: string;
//   status?: string;
//   search?: string;
//   page?: number;
//   take?: number;
// }

// export interface MembersResponseNew {
//   members: Members[];
//   pagination: {
//     itemCount: number;
//     pageCount: number;
//     hasPreviousPage: boolean;
//     hasNextPage: boolean;
//     page: number;
//     take: number;
//   };
// }

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export class CalendarService {
  static create = async (event: Calendar) => {
    try {
      const { data } = await atheneaApi.post<CalendarResponse>(
        "/calendar",
        event
      );
      console.log(data);

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
      console.log(error.response.data);
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
