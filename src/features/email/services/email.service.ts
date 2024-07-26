import { atheneaApi } from "@/features/core/lib/api";
import type { EmailFormValues } from "../types/email.type";

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export class EmailService {
  static sendEmail = async (data: EmailFormValues) => {
    try {
      const { data } = await atheneaApi.post("/emails", data);

      return data;
    } catch (error: any) {
      throw error.response?.data;
    }
  };
}
