import type {
  AuthStatus,
  MemberIsDisabled,
  MemberPaymentMethod,
  MemberStatus,
  MemberStreetType,
  ValidRoles,
} from "@/features/auth/types";
import type { AxiosError } from "axios";

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

export interface LoginResponse {
  id: string;
  email: string;
  isActive: boolean;
  roles: ValidRoles[];
  token: string;
  error?: AxiosError<any, any>;
}

interface PhoneInfo {
  phone1: string;
  phone2?: string;
}

export interface AddressInfo {
  streetType?: MemberStreetType;
  streetName?: string;
  door?: string;
  block?: string;
  location?: string;
  province?: string;
  postalCode?: number;
}

export interface BankInfo {
  paymentMethod: MemberPaymentMethod;
  name?: string;
  lastName?: string;
  identificationNumber?: string;
  entity?: string;
  iban?: string;
}

export interface MemberForm {
  name: string;
  lastName: string;
  identificationNumber?: string;
  phoneInfo: PhoneInfo;
  email?: string;
  birthDate: string;
  isDisabled: MemberIsDisabled;
  gradeDisability?: number;
  status: MemberStatus;
  addressInfo: AddressInfo;
  bankInfo: BankInfo;
  observations?: string;
}
