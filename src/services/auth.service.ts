import { atheneaApi } from "@/lib/api";
import type { ValidRoles } from "@/types";
import { AxiosError } from "axios";

export interface LoginResponse {
  id: string;
  email: string;
  isActive: boolean;
  roles: ValidRoles[];
  token: string;
}

export class AuthService {
  static login = async (
    email: string,
    password: string
  ): Promise<LoginResponse> => {
    try {
      const { data } = await atheneaApi.post<LoginResponse>("/auth/login", {
        email,
        password,
      });
      console.log(data);
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data);
        throw new Error(error.response?.data);
      }

      console.log(error);
      throw new Error("Unable to login");
    }
  };
}
