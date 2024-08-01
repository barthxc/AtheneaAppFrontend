type ErrorMessages = {
  [key: number]: string;
  GENERIC: string;
};

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export class ErrorService {
  static handleError = (
    statusCode: number,
    messages: ErrorMessages,
    afterError?: () => void
  ): string => {
    const errorMessage = messages[statusCode] || messages.GENERIC;

    if (afterError) {
      afterError();
    }
    console.log("errorMessage---->", errorMessage);

    return errorMessage;
  };
}

//EXAMPLE:
// handleErrors(
//     error,
//     ERROR_MESSAGES.MEMBER_SERVICE.CREATE_MEMBER,
//     true,
//     () => {
//       console.log('Función final');
//     }
//   );
