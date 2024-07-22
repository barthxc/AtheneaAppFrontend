import type { AuthStatus, ValidRoles } from "@/features/auth/types";
import type { AxiosError } from "axios";

export interface AuthState {
  status: AuthStatus;
  token?: string;
  user?: User;
  userRole?: ValidRoles[];

  loginUser: (email: string, password: string) => Promise<void>;
  checkAuthStatus: () => Promise<void>;
  logoutUser: () => void;
}

export interface User {
  id: string;
  email: string;
  isActive: boolean;
  roles: ValidRoles[];
}

export interface LoginResponse {
  id: string;
  email: string;
  isActive: boolean;
  roles: ValidRoles[];
  token: string;
  error?: AxiosError<any, any>;
}
