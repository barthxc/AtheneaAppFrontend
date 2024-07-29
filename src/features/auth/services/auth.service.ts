import { atheneaApi } from "@/features/core/lib/api";

import type { LoginResponse } from "@/features/auth/types";

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
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
      return data;
    } catch (error: any) {
      throw error.response?.data;
    }
  };

  static checkAuthstatus = async (): Promise<LoginResponse> => {
    try {
      const { data } = await atheneaApi.get("/auth/check-auth-status");
      return data;
    } catch (error) {
      throw new Error("UnAuthorized");
    }
  };
}
