import { create } from "zustand";
import { MemberService } from "@/features/members/services";
import type { MemberState } from "@/features/members/types";

export const useMemberStore = create<MemberState>((set, get) => ({
	members: [],

	getMembers: async () => {
		try {
			const members = await MemberService.getAllMembers();
			if (members.length > 0) {
				set({ members });
			}
			return members;
		} catch (err: any) {
			if (err) throw err;
		}
	},
	getMemberById: async (id) => {
		const member = await MemberService.getMember(id);
		return member;
	},
	deleteMemberById: async (id) => {
		try {
			const deletedMember = await MemberService.removeMember(id);
			if (deletedMember || deletedMember === "") {
				const newMembers = get().members.filter((member) => member.id !== id);
				set({ members: newMembers });
				return deletedMember;
			}
			throw {
				statusCode: null,
			};
		} catch (err) {
			if (err) throw err;
		}
	},
	updateMemberPaymentDate: async (id) => {
		try {
			const updatedMember = await MemberService.updatePaymentDateMember(id);
			return updatedMember;
		} catch (err: any) {
			if (err) throw err;
		}
	},
}));
