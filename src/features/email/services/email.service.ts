import { atheneaApi } from "@/features/core/lib/api";

export interface SendEmail {
	title?: string;
	msg: string;
	from?: string;
	emailType: string;
}

export class EmailService {
	static sendEmail = async (emailData: SendEmail) => {
		try {
			const { data } = await atheneaApi.post("/mailing", emailData);
			return data;
		} catch (error: any) {
			throw error.response?.data;
		}
	};
}
