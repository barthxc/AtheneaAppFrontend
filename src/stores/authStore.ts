import { AuthService } from "@/services/auth.service";
import type { AuthStatus } from "@/types";
import { User } from "@/types/user.interface";
import { create, StateCreator } from "zustand";
import { devtools } from "zustand/middleware";

export interface AuthState {
  status: AuthStatus;
  token?: string;
  user?: User;

  loginUser: (email: string, password: string) => Promise<void>;
}

const storeApi: StateCreator<AuthState> = (set) => ({
  status: "authorized",
  token: undefined,
  user: undefined,

  loginUser: async (email: string, password: string) => {
    console.log(email, password);
    try {
      const { token, ...user } = await AuthService.login(email, password);
      set({ status: "authorized", token, user });
    } catch (error) {
      set({ status: "unauthorized", token: undefined, user: undefined });
    }
  },
});

export const useAuthStore = create<AuthState>()(devtools(storeApi));
