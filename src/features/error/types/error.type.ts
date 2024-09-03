export type ErrorCode = 400 | 401 | 403 | 404 | 500;

export type MappedErrorMessage = {
	[code in ErrorCode]?: string;
};

export type ErrorMessage = {
	GENERIC: string;
} & MappedErrorMessage;
