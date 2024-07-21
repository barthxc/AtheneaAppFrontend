import type { MemberForm } from "@/features/auth/types";
import { atheneaApi } from "@/features/core/lib/api";
import type { CreateMemberResponse } from "@/features/members/types";
// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export class MemberService {
  //DEBERÍA - Devuelve id + memberNumber: Por ahora devuelve CreateMemberResponse

  static createMember = async (member: MemberForm) => {
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
  static updateMember = async (member: MemberForm, id: string) => {
    try {
      const { data } = await atheneaApi.patch<MemberForm>(
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
  // static  getMember= async(id):<CreateMemberResponse>=> {}

  // static async getAllMembers(data) {}

  //Enviar
  static async updatePaymentDateMember() {}

  //! Backend just should work for Admin-Roles
  static async removeMember(id) {}

  static async getPDfMemberById(id) {}

  static async getPdfMembersBank() {}
}
