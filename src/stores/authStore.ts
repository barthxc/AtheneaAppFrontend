import type { AuthStatus } from "@/types";
import { StateCreator } from "zustand";

export interface AuthState {
  status: AuthStatus;
  token?: string;
  user?: string;
}

export const storeApi: StateCreator<AuthState> = (set) => ({
  status: "authorized",
  token: undefined,
  user: undefined,
});
