import { AuthService } from "../services/auth.service";
import { create, type StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type { AuthState } from "../types/auth.interface";

const storeApi: StateCreator<AuthState> = (set) => ({
	status: "pending",
	token: undefined,
	user: undefined,

	loginUser: async (email: string, password: string) => {
		console.log(email, password);
		try {
			const { token, ...user } = await AuthService.login(email, password);
			set({ status: "authorized", token, user });
		} catch (error) {
			set({ status: "unauthorized", token: undefined, user: undefined });
			// throw "Unauthorized";
			throw error;
		}
	},

	checkAuthStatus: async () => {
		try {
			const { token, ...user } = await AuthService.checkAuthstatus();
			set({ status: "authorized", token, user });
		} catch (error) {
			set({ status: "unauthorized", token: undefined, user: undefined });
		}
	},

	logoutUser: () => {
		set({ status: "unauthorized", token: undefined, user: undefined });
	},
});

export const useAuthStore = create<AuthState>()(
	devtools(
		persist(storeApi, {
			name: "auth-athenea",
		}),
	),
);
