import type { AxiosError } from "axios";

type ErrorMessages = {
  [key: number]: string; // Mensajes para códigos de estado HTTP
  GENERIC?: string; // Mensaje genérico
};

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export class ErrorService {
  static handleError = async (
    error: AxiosError,
    messages: ErrorMessages,
    showToast: boolean,
    afterError?: () => void
  ) => {
    const statusCode = error?.response?.status;

    //    const errorMessage = messages[statusCode] || messages.GENERIC || 'Un error inesperado ocurrió.';

    const errorMessage =
      (statusCode !== undefined && messages[statusCode]) ||
      messages.GENERIC ||
      "Un error inesperado ocurrió.";

    if (showToast) {
      //toast

      console.log(errorMessage);
    }

    if (afterError) {
      afterError();
    }
  };
}