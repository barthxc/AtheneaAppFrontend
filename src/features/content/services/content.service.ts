import { atheneaApi } from "@/features/core/lib/api";
import { createFormData } from "@/features/core/utils";
import type {
  Content,
  ContentResponse,
  CreateContent,
} from "@/features/content/types";

export class ContentService {
  static createContent = async (content: CreateContent) => {
    try {
      const formData = createFormData(content);
      const { data } = await atheneaApi.post<ContentResponse>(
        "/content",
        formData
      );
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
      const { data } = await atheneaApi.delete(
        `/content/${contentId}/image/${imageId}`
      );
      return data;
    } catch (error: any) {
      throw error.response?.data;
    }
  };

  static addImageContent = async (contentId: string, images: File[]) => {
    try {
      const formData = new FormData();
      for (const image of images) {
        formData.append("image", image);
      }

      const { data } = await atheneaApi.post(
        `/content/${contentId}/image`,
        formData
      );
      return data;
    } catch (error: any) {
      throw error.response?.data;
    }
  };

  static reorderContent = async (
    contents: { id: string; position: number }[]
  ) => {
    try {
      const { data } = await atheneaApi.post("/content/reorder", contents);
      return data;
    } catch (error: any) {
      throw error.response?.data;
    }
  };
}
