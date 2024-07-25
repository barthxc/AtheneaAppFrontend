type ErrorMessage = {
  [statusCode: number]: string;
  GENERIC: string;
};

type ErrorMessagesSection = {
  [action: string]: ErrorMessage;
};

export type ErrorMessages = {
  [section: string]: ErrorMessagesSection;
};
