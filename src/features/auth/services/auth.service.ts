import { AxiosError } from "axios";

import { ERROR_MESSAGES } from "@/features/core/constants";
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
    } catch (error) {
      if (error instanceof AxiosError) {
        throw error.code;
        // throw new Error(error.response?.data);
      }

      throw ERROR_MESSAGES.REQUEST.UNKNOWN;
    }
  };

  static checkAuthstatus = async (): Promise<LoginResponse> => {
    try {
      const { data } = await atheneaApi.get("/auth/check-auth-status");
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("UnAuthorized");
    }
  };
}
