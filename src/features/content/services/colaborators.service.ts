import { atheneaApi } from "@/features/core/lib/api";
import { createFormData } from "@/features/core/utils";

export interface ColaboratorResponse {
	id: string;
	title: string;
	imageUrl: string;
	public_id: string;
}

export interface Colaborator {
	title: string;
	file: File;
}

export class ColaboratorsService {
	static createColaborator = async (colaborator: Colaborator) => {
		try {
			const formData = createFormData(colaborator);
			const { data } = await atheneaApi.post("/colaborators", formData);
			return data;
		} catch (error: any) {
			throw error.response?.data;
		}
	};

	static getColaborators = async () => {
		try {
			const { data } = await atheneaApi.get<ColaboratorResponse[]>("/colaborators");
			return data;
		} catch (error: any) {
			throw error.response?.data;
		}
	};

	static deleteColaborator = async (id: string) => {
		try {
			const { data } = await atheneaApi.delete<ColaboratorResponse>(`/colaborators/${id}`);
			return data;
		} catch (error: any) {
			throw error.response?.data;
		}
	};
}
