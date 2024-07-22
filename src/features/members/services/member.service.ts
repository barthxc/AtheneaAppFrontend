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
  //DEBERÍA - Devuelve id + memberNumber: Por ahora devuelve CreateMemberResponse

  static createMember = async (member: MemberFormValues) => {
    const memberPrepared = {
      ...member,
      isDisabled: member.isDisabled, //if isDisabled = si then true  : false
    };
    try {
      const { data } = await atheneaApi.post<CreateMemberResponse>(
        "/members",
        memberPrepared
      );

      return data;
    } catch (error) {
      throw new Error(error.response?.data);
    }
  };

  // //Devuelve todo el Member completo + backend data(?)
  // //TODO: Devolver el usuario completo en el backend al hacr update)
  static updateMember = async (member: Member, id: string) => {
    try {
      const { data } = await atheneaApi.patch<UpdateMemberResponse>(
        `/members/${id}`,
        member
      );

      return data;
    } catch (error) {
      throw new Error(error.response?.data);
    }

    return;
  };

  // //Devuelve todo el Member completo + backend data(?)
  static getMember = async (id: string) => {
    try {
      const { data } = await atheneaApi.get<MemberResponse>(
        `/members/${id}`,
        id
      );
      return data;
    } catch (error) {
      throw new Error(error.response?.data);
    }
  };

  static getAllMembers = async () => {
    try {
      const { data } = await atheneaApi.get<Members[]>("/members");
      return data;
    } catch (error) {
      throw new Error(error.response?.data);
    }
  };

  //Enviar
  static async updatePaymentDateMember() {}

  static membersInfo = async () => {
    try {
      const { data } = await atheneaApi.get<MembersInfoResponse>("/members-info");
      return data;
    } catch (error) {
      throw new Error(error.response?.data);
    }
  }

    static updateMembersInfo = async ()=>{
      
      try {
        const { data } = await atheneaApi.get<MembersInfoResponse>("/members-info/update");
        return data;
      } catch (error) {
        
      }
    }


  };

  //! Backend just should work for Admin-Roles
  static async removeMember(id) {}

  static async getPDfMemberById(id) {}

  static async getPdfMembersBank() {}

