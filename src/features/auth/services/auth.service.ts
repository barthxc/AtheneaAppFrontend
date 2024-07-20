import { AxiosError } from "axios";

import { atheneaApi } from "@/features/core/lib/api";

import type { ValidRoles } from "@/features/auth/types";
import { ERROR_MESSAGES } from "@/features/core/constants";

//! Extends from User (?)
export interface LoginResponse {
	id: string;
	email: string;
	isActive: boolean;
	roles: ValidRoles[];
	token: string;
	error?: AxiosError<any, any>;
}

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export class AuthService {
	static login = async (email: string, password: string): Promise<LoginResponse> => {
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
