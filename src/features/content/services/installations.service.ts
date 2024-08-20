import { atheneaApi } from "@/features/core/lib/api";
import { createFormData } from "@/features/core/utils";
export interface InstallationResponse {
  id: string;
  title: string;
  imageUrl: string;
  public_id: string;
}

export interface Installation {
  title: string;
  file: File;
}

export class InstallationsService {
  static createInstallation = async (installation: Installation) => {
    try {
      const formData = createFormData(installation);
      const { data } = await atheneaApi.post("/installations", formData);
      return data;
    } catch (error: any) {
      throw error.response?.data;
    }
  };

  static getInstallations = async () => {
    try {
      const { data } = await atheneaApi.get<InstallationResponse[]>(
        "/installations"
      );
      return data;
    } catch (error: any) {
      throw error.response?.data;
    }
  };

  static deleteInstallation = async (id: string) => {
    try {
      const { data } = await atheneaApi.delete<InstallationResponse>(
        `/installations/${id}`
      );
      return data;
    } catch (error: any) {
      throw error.response?.data;
    }
  };
}
