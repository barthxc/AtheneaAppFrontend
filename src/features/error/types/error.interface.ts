import type { ErrorMessage } from "@/features/error/types";

export interface ErrorMessagesByAction {
	CREATE_MEMBER: ErrorMessage;
	FIND_ALL: ErrorMessage;
	FIND_ALL_NO_PAY: ErrorMessage;
	FIND_ALL_EXITU: ErrorMessage;
	FIND_ONE: ErrorMessage;
	UPDATE: ErrorMessage;
	REMOVE: ErrorMessage;
	UPDATE_PAYMENT_DATE: ErrorMessage;
	DELETE_ALL_MEMBERS: ErrorMessage;
	GET_PDF_BY_ID: ErrorMessage;
	GET_PDF_PAYMENT_METHOD_BANK: ErrorMessage;
}

export interface ErrorMessages {
	MEMBER: ErrorMessagesByAction;
	AUTH: {
		CREATE_USER: ErrorMessage;
		LOGIN: ErrorMessage;
		CHECK_AUTH_STATUS: ErrorMessage;
		DELETE_ALL_USERS: ErrorMessage;
	};
	CALENDAR: {
		CREATE: ErrorMessage;
		FIND_ALL: ErrorMessage;
		FIND_ONE: ErrorMessage;
		UPDATE: ErrorMessage;
		REMOVE: ErrorMessage;
	};
	MEMBERS_INFO: {
		GET_STATISTICS: ErrorMessage;
		REFRESH_MEMBERS_INFO: ErrorMessage;
	};
	GENERIC: {
		UNKNOWN: ErrorMessage;
	};
	EMAIL: {
		SEND_EMAIL: ErrorMessage;
	};
	DONATION: {
		FIND_ALL: ErrorMessage;
		CREATE_PAYMENT_INTENT: ErrorMessage;
		CONFIRM_PAYMENT: ErrorMessage;
	};
	COLABORATORS: {
		FIND_ALL: ErrorMessage;
		CREATE: ErrorMessage;
		DELETE: ErrorMessage;
	};
	INSTALLATIONS: {
		FIND_ALL: ErrorMessage;
		CREATE: ErrorMessage;
		REMOVE: ErrorMessage;
	};
	CONTENT: {
		FIND_ALL: ErrorMessage;
		FIND_ONE: ErrorMessage;
		UPDATE: ErrorMessage;
		CREATE: ErrorMessage;
		REMOVE: ErrorMessage;
	};
	ASSIGNMENT: {
		CREATE: ErrorMessage;
	};
}
