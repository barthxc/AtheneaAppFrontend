import { atheneaApi } from "@/features/core/lib/api";

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

export interface ColaboratorResponse {
  id: string;
  title: string;
  imageUrl: string;
  public_id: string;
}

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export class ColaboratorsService {
  static create = async (event: any) => {
    try {
      const { data } = await atheneaApi.post("/colaborators", event);
      return data;
    } catch (error: any) {
      throw error.response?.data;
    }
  };

  static getColaborators = async () => {
    try {
      const { data } = await atheneaApi.get<ColaboratorResponse[]>(
        "/colaborators"
      );
      return data;
    } catch (error: any) {
      throw error.response?.data;
    }
  };

  static remove = async (id: string) => {
    try {
      const { data } = await atheneaApi.delete<ColaboratorResponse>(
        `/colaborators/${id}`
      );
      return data;
    } catch (error: any) {
      throw error.response?.data;
    }
  };
}
