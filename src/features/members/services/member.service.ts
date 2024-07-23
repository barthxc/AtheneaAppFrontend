import { atheneaApi } from "@/features/core/lib/api";
import type {
  CreateMemberResponse,
  Member,
  MemberFormValues,
  MemberResponse,
  Members,
  MembersInfoResponse,
  UpdateMemberResponse,
} from "@/features/members/types";

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export class MemberService {
  // static convertIsDisabledToBoolean = (value: MemberIsDisabled): boolean => {
  //   return value === MemberIsDisabled.si;
  // };

  // static convertBooleanToIsDisabled = (value: boolean): MemberIsDisabled => {
  //   return value ? MemberIsDisabled.si : MemberIsDisabled.no;
  // };

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

      return data;
    } catch (error: any) {
      throw error.response?.data;
    }
  };

  static getAllMembers = async () => {
    try {
      const { data } = await atheneaApi.get<Members[]>("/members");
      return data;
    } catch (error: any) {
      throw error.response?.data;
    }
  };

  //Enviar
  static updatePaymentDateMember = async (id: string) => {
    try {
      const { data } = await atheneaApi.get<Members[]>(
        `/members/updatePaymentDate${id}`
      );
      return data;
    } catch (error: any) {
      throw error.response?.data;
    }
  };

  static membersInfo = async () => {
    try {
      const { data } = await atheneaApi.get<MembersInfoResponse>(
        "/members-info"
      );
      return data;
    } catch (error: any) {
      throw error.response?.data;
    }
  };

  static updateMembersInfo = async () => {
    try {
      const { data } = await atheneaApi.get<MembersInfoResponse>(
        "/members-info/update"
      );
      return data;
    } catch (error: any) {}
  };

  static removeMember = async (id) => {};

  static getPDfMemberById = async (id) => {};

  static getPdfMembersBank = async () => {};
}
