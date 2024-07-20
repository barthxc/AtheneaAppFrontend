import { atheneaApi } from "@/features/core/lib/api";

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export class MemberService {
  //DEBERÍA - Devuelve id + memberNumber: Por ahora devuelve CreateMemberResponse
  static createMember = async (member) => {
    const memberPrepared = {
      ...member,
      isDisabled: member.isDisable.si ? true : false,
    };
    try {
      const { data } = await atheneaApi.post("/members", memberPrepared);
      console.log(data);
      return data;
    } catch (error) {
      throw new Error(error.response?.data);
    }
  };

  // //Devuelve todo el Member completo + backend data(?)
  // //TODO: Devolver el usuario completo en el backend al hacr update
  // static  updateMember = async (member:Member, id):<CreateMemberResponse> => {}

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
