import { ERROR_MESSAGES } from "@/features/error/constants";
import type { ErrorMessage } from "@/features/error/types";

export class ErrorService {
	static handleError = (statusCode: keyof ErrorMessage, messages: ErrorMessage, afterError?: () => void): string => {
		const errorMessage =
			messages[String(statusCode) as keyof ErrorMessage] || messages.GENERIC || ERROR_MESSAGES.GENERIC.UNKNOWN.GENERIC;

		if (afterError) {
			afterError();
		}

		return errorMessage;
	};
}
