import { ERROR_MESSAGES } from "@/features/core/constants";

export const friendlyMessageFromRequestError = (errorCode: keyof typeof ERROR_MESSAGES.REQUEST) => {
	return {
		message: ERROR_MESSAGES.REQUEST[errorCode] ?? ERROR_MESSAGES.REQUEST.UNKNOWN,
	};
};