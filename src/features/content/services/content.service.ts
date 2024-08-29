import { atheneaApi } from "@/features/core/lib/api";
import { createFormData } from "@/features/core/utils";

export interface ImageResponse {
	id: string;
	url: string;
	public_id: string;
}

export interface ContentResponse extends Content {
	id: string;
}

export interface Content {
	title: string;
	description: string;
	date: Date;
	position: number;
	typeContent: string;
	images: ImageResponse[];
}

// TODO: Check if this is still valid
export interface CreateContent extends Content {
	image: File[];
}

export class ContentService {
	static createContent = async (content: CreateContent) => {
		try {
			const formData = createFormData(content);
			const { data } = await atheneaApi.post<ContentResponse>("/content", formData);
			return data;
		} catch (error: any) {
			throw error.response?.data;
		}
	};

	static deleteContent = async (id: string) => {
		try {
			const { data } = await atheneaApi.delete(`/content/${id}`);
			return data;
		} catch (error: any) {
			throw error.response?.data;
		}
	};

	static getContents = async () => {
		try {
			const { data } = await atheneaApi.get<ContentResponse[]>("/content");
			return data;
		} catch (error: any) {
			throw error.response?.data;
		}
	};

	static updatecontent = async (id: string, content: Content) => {
		try {
			const { data } = await atheneaApi.patch(`/content/${id}`, content);
			return data;
		} catch (error: any) {
			throw error.response?.data;
		}
	};

	static deleteImageContent = async (contentId: string, imageId: string) => {
		try {
			const { data } = await atheneaApi.patch(`/content/${contentId}/image/${imageId}`);
			return data;
		} catch (error: any) {
			throw error.response?.data;
		}
	};

	static addImageContent = async (contentId: string, images: File[]) => {
		try {
			const formData = createFormData(images);
			const { data } = await atheneaApi.post(`/content/${contentId}/image`, formData);
			return data;
		} catch (error: any) {
			throw error.response?.data;
		}
	};

	static reorderContent = async (contents: { id: string; position: number }[]) => {
		try {
			const { data } = await atheneaApi.patch("/content/reorder", contents);
			return data;
		} catch (error: any) {
			throw error.response?.data;
		}
	};
}
