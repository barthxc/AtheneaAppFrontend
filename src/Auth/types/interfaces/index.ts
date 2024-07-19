import { AuthStatus } from "..";
import { ValidRoles } from "../enums";

export interface AuthState {
  status: AuthStatus;
  token?: string;
  user?: User;

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
