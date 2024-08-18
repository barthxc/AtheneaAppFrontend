import { atheneaApi } from "@/features/core/lib/api";

// src/features/members/services/member.service.ts
// export interface FetchMembersParams {
//   name?: string;
//   lastName?: string;
//   identificationNumber?: string;
//   memberNumber?: string;
//   status?: string;
//   search?: string;
//   page?: number;
//   take?: number;
// }

// export interface MembersResponseNew {
//   members: Members[];
//   pagination: {
//     itemCount: number;
//     pageCount: number;
//     hasPreviousPage: boolean;
//     hasNextPage: boolean;
//     page: number;
//     take: number;
//   };
// }

export interface InstallationResponse {
	id: string;
	title: string;
	imageUrl: string;
	public_id: string;
}

export class InstallationsService {
	static create = async (event: any) => {
		try {
			const { data } = await atheneaApi.post("/installations", event);
			return data;
		} catch (error: any) {
			throw error.response?.data;
		}
	};

	static getInstallations = async () => {
		try {
			const { data } = await atheneaApi.get<InstallationResponse[]>("/installations");
			return data;
		} catch (error: any) {
			throw error.response?.data;
		}
	};

	static remove = async (id: string) => {
		try {
			const { data } = await atheneaApi.delete<InstallationResponse>(`/installations/${id}`);
			return data;
		} catch (error: any) {
			throw error.response?.data;
		}
	};
}
