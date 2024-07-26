import { create, type StateCreator } from "zustand";
import { MemberService } from "@/features/members/services";
import type { MembersInfoState } from "@/features/members/types";
import { devtools, persist } from "zustand/middleware";

const storeApi: StateCreator<MembersInfoState> = (set, get) => ({
  membersInfo: undefined,
  isLoading: false,
  getMembersInfo: async () => {
    const { membersInfo } = get();
    if (membersInfo) return;

    set({ isLoading: true });
    try {
      const membersInfo = await MemberService.membersInfo();
      set({ membersInfo });
    } catch (err: any) {
      console.error(err);
      throw err;
    } finally {
      set({ isLoading: false });
    }
  },
  refreshMembersInfo: async () => {
    set({ isLoading: true });
    try {
      const membersInfo = await MemberService.updateMembersInfo();
      set({ membersInfo });
    } catch (err: any) {
      console.error(err);
      throw err;
    } finally {
      set({ isLoading: false });
    }
  },
});

export const useMembersInfo = create<MembersInfoState>()(
  devtools(
    persist(storeApi, {
      name: "members-info-athenea",
    })
  )
);
