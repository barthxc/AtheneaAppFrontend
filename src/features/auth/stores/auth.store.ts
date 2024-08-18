import { create, type StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";

import type { AuthState } from "@/features/auth/types";
import { AuthService } from "@/features/auth/services";

const storeApi: StateCreator<AuthState> = (set) => ({
	status: "pending",
	token: undefined,
	user: undefined,
	userRole: [],

	loginUser: async (email: string, password: string) => {
		try {
			const { token, ...user } = await AuthService.login(email, password);
			set({ status: "authorized", token, user, userRole: user.roles });
		} catch (error) {
			set({
				status: "unauthorized",
				token: undefined,
				user: undefined,
				userRole: [],
			});
			throw error;
		}
	},

	checkAuthStatus: async () => {
		try {
			const { token, ...user } = await AuthService.checkAuthstatus();
			set({ status: "authorized", token, user, userRole: user.roles });
		} catch (error) {
			set({ status: "unauthorized", token: undefined, user: undefined });
		}
	},

	logoutUser: () => {
		set({
			status: "unauthorized",
			token: undefined,
			user: undefined,
			userRole: [],
		});
	},
});

export const useAuthStore = create<AuthState>()(
	devtools(
		persist(storeApi, {
			name: "auth-athenea",
		}),
	),
);
