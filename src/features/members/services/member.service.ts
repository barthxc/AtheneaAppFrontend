import { atheneaApi } from "@/features/core/lib/api";
import { reverseDate } from "@/features/core/utils/reverseDate";
import type {
  CreateMemberResponse,
  Member,
  MemberFormValues,
  MemberResponse,
  Members,
  MembersInfo,
  UpdateMemberResponse,
} from "@/features/members/types";
import { dateFormatter } from "@/features/core/utils";

// src/features/members/services/member.service.ts
export interface FetchMembersParams {
  name?: string;
  lastName?: string;
  identificationNumber?: string;
  memberNumber?: string;
  status?: string;
  search?: string;
  page?: number;
  take?: number;
}

export interface MembersResponseNew {
  members: Members[];
  pagination: {
    itemCount: number;
    pageCount: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
    page: number;
    take: number;
  };
}

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export class MemberService {
  static createMember = async (member: MemberFormValues) => {
    try {
      const { data } = await atheneaApi.post<CreateMemberResponse>(
        "/members",
        member
      );

      return data;
    } catch (error: any) {
      throw error.response?.data;
    }
  };

  static updateMember = async (member: MemberFormValues, id: string) => {
    try {
      const { data } = await atheneaApi.patch<UpdateMemberResponse>(
        `/members/${id}`,
        member
      );

      return data;
    } catch (error: any) {
      throw error.response?.data;
    }
  };

  static getMember = async (id: string) => {
    try {
      const { data } = await atheneaApi.get<MemberResponse>(`/members/${id}`);

      data.memberNumber = data.memberNumber.toUpperCase();
      data.birthDate = reverseDate(data.birthDate);
      data.bankInfo.paymentDate = reverseDate(data.bankInfo.paymentDate);

      return data;
    } catch (error: any) {
      throw error.response?.data;
    }
  };

  static getAllMembers = async (params: FetchMembersParams) => {
    try {
      const filteredParams = Object.fromEntries(
        Object.entries(params).filter(
          ([_, value]) => value !== undefined && value !== ""
        )
      );
      const { data } = await atheneaApi.get<MembersResponseNew>("/members", {
        params: filteredParams,
      });
      return data;
    } catch (error: any) {
      console.log(error.response.data);
      throw error.response?.data;
    }
  };

  static updatePaymentDateMember = async (id: string) => {
    try {
      const { data } = await atheneaApi.patch<Members>(
        `/members/updatePaymentDate/${id}`
      );

      data.bankInfo.paymentDate = dateFormatter(data.bankInfo.paymentDate);
      return data;
    } catch (error: any) {
      throw error.response?.data;
    }
  };

  static membersInfo = async () => {
    try {
      const { data } = await atheneaApi.get<MembersInfo>("/members-info");
      return data;
    } catch (error: any) {
      throw error.response?.data;
    }
  };

  static updateMembersInfo = async () => {
    try {
      const { data } = await atheneaApi.get<MembersInfo>(
        "/members-info/update"
      );
      return data;
    } catch (error: any) {
      throw error.response?.data;
    }
  };

  static removeMember = async (id: string) => {
    try {
      const { data } = await atheneaApi.delete(`/members/${id}`);
      return data;
    } catch (error: any) {
      throw error.response?.data;
    }
  };

  static getPDFMemberById = async (id: string) => {
    try {
      const { data } = await atheneaApi.get(`/members/pdf/member/${id}`, {
        responseType: "blob",
      });
      return data;
    } catch (error: any) {
      throw error.response?.data;
    }
  };

  static getPDFMembersBank = async () => {
    try {
      const { data } = await atheneaApi.get("/members/pdf/bank", {
        responseType: "blob",
      });
      return data;
    } catch (error: any) {
      throw error.response;
    }
  };
}
