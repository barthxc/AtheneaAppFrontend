import { create } from "zustand";
import { MemberService } from "@/features/members/services";
import type { MemberState } from "@/features/members/types";

export const useMemberStore = create<MemberState>((set) => ({
	getMemberById: async (id) => {
		try {
			const member = await MemberService.getMember(id);
			return member;
		} catch (err: any) {}
	},
}));
