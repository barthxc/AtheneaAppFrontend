import type { ErrorMessages } from "@/features/error/types";

export const ERROR_MESSAGES: ErrorMessages = {
  MEMBER: {
    CREATE_MEMBER: {
      400: "Error al crear un socio. Por favor revisa los datos ingresados.",
      401: "No tienes autorización para crear un socio.",
      403: "No tienes permiso para realizar esta acción.",
      404: "No se pudo encontrar el recurso solicitado.",
      500: "Ocurrió un error interno en el servidor. Inténtalo de nuevo más tarde.",
      GENERIC: "Ocurrió un error al crear el socio. Inténtalo de nuevo.",
    },
    FIND_ALL: {
      400: "Error al buscar los socios. Verifica los parámetros de búsqueda.",
      401: "No tienes autorización para buscar socios.",
      403: "No tienes permiso para realizar esta acción.",
      404: "No se encontraron socios que coincidan con los criterios de búsqueda.",
      500: "Ocurrió un error interno en el servidor. Inténtalo de nuevo más tarde.",
      GENERIC: "Ocurrió un error al buscar los socios. Inténtalo de nuevo.",
    },
    FIND_ALL_NO_PAY: {
      400: "Error al buscar socios que no han pagado. Verifica los parámetros de búsqueda.",
      401: "No tienes autorización para buscar socios que no han pagado.",
      403: "No tienes permiso para realizar esta acción.",
      404: "No se encontraron socios que no han pagado.",
      500: "Ocurrió un error interno en el servidor. Inténtalo de nuevo más tarde.",
      GENERIC:
        "Ocurrió un error al buscar socios que no han pagado. Inténtalo de nuevo.",
    },
    FIND_ALL_EXITU: {
      400: "Error al buscar socios que han salido. Verifica los parámetros de búsqueda.",
      401: "No tienes autorización para buscar socios que han salido.",
      403: "No tienes permiso para realizar esta acción.",
      404: "No se encontraron socios que han salido.",
      500: "Ocurrió un error interno en el servidor. Inténtalo de nuevo más tarde.",
      GENERIC:
        "Ocurrió un error al buscar socios que han salido. Inténtalo de nuevo.",
    },
    FIND_ONE: {
      400: "Error al buscar el socio. Verifica el ID del socio.",
      401: "No tienes autorización para buscar el socio.",
      403: "No tienes permiso para realizar esta acción.",
      404: "No se pudo encontrar el socio con el ID proporcionado.",
      500: "Ocurrió un error interno en el servidor. Inténtalo de nuevo más tarde.",
      GENERIC: "Ocurrió un error al buscar el socio. Inténtalo de nuevo.",
    },
    UPDATE: {
      400: "Error al actualizar el socio. Verifica los datos proporcionados.",
      401: "No tienes autorización para actualizar el socio.",
      403: "No tienes permiso para realizar esta acción.",
      404: "No se pudo encontrar el socio con el ID proporcionado.",
      500: "Ocurrió un error interno en el servidor. Inténtalo de nuevo más tarde.",
      GENERIC: "Ocurrió un error al actualizar el socio. Inténtalo de nuevo.",
    },
    REMOVE: {
      400: "Error al eliminar el socio. Verifica el ID del socio.",
      401: "No tienes autorización para eliminar el socio.",
      403: "No tienes permiso para realizar esta acción.",
      404: "No se pudo encontrar el socio con el ID proporcionado.",
      500: "Ocurrió un error interno en el servidor. Inténtalo de nuevo más tarde.",
      GENERIC: "Ocurrió un error al eliminar el socio. Inténtalo de nuevo.",
    },
    UPDATE_PAYMENT_DATE: {
      400: "Error al actualizar la fecha de pago del socio.",
      401: "No tienes autorización para actualizar la fecha de pago.",
      403: "No tienes permiso para realizar esta acción.",
      404: "No se pudo encontrar el socio con el ID proporcionado.",
      500: "Ocurrió un error interno en el servidor. Inténtalo de nuevo más tarde.",
      GENERIC:
        "Ocurrió un error al actualizar la fecha de pago. Inténtalo de nuevo.",
    },
    DELETE_ALL_MEMBERS: {
      400: "Error al intentar eliminar todos los socios.",
      401: "No tienes autorización para eliminar todos los socios.",
      403: "No tienes permiso para realizar esta acción.",
      500: "Ocurrió un error interno en el servidor. Inténtalo de nuevo más tarde.",
      GENERIC:
        "Ocurrió un error al eliminar todos los socios. Inténtalo de nuevo.",
    },
    GET_PDF_BY_ID: {
      400: "Error al generar el PDF del socio. Verifica el ID del socio.",
      401: "No tienes autorización para generar el PDF del socio.",
      403: "No tienes permiso para realizar esta acción.",
      404: "No se pudo encontrar el socio con el ID proporcionado.",
      500: "Ocurrió un error interno en el servidor. Inténtalo de nuevo más tarde.",
      GENERIC: "Ocurrió un error al generar el PDF. Inténtalo de nuevo.",
    },
    GET_PDF_PAYMENT_METHOD_BANK: {
      400: "Error al generar el PDF de los métodos de pago bancario.",
      401: "No tienes autorización para generar el PDF de métodos de pago bancario.",
      403: "No tienes permiso para realizar esta acción.",
      500: "Ocurrió un error interno en el servidor. Inténtalo de nuevo más tarde.",
      GENERIC:
        "Ocurrió un error al generar el PDF bancario. Inténtalo de nuevo.",
    },
  },
  AUTH: {
    CREATE_USER: {
      400: "Error al crear el usuario. Por favor revisa los datos ingresados.",
      401: "No tienes autorización para crear el usuario.",
      403: "No tienes permiso para realizar esta acción.",
      500: "Ocurrió un error interno en el servidor. Inténtalo de nuevo más tarde.",
      GENERIC: "Ocurrió un error al crear el usuario. Inténtalo de nuevo.",
    },
    LOGIN: {
      400: "Error en la solicitud de inicio de sesión. Verifica los datos ingresados.",
      401: "Credenciales no válidas. Por favor, revisa tu correo y contraseña.",
      403: "No tienes permiso para realizar esta acción.",
      500: "Ocurrió un error interno en el servidor. Inténtalo de nuevo más tarde.",
      GENERIC:
        "Ocurrió un error al intentar iniciar sesión. Inténtalo de nuevo.",
    },
    CHECK_AUTH_STATUS: {
      400: "Error al verificar el estado de autenticación del usuario.",
      401: "No tienes autorización para verificar el estado de autenticación.",
      403: "No tienes permiso para realizar esta acción.",
      500: "Ocurrió un error interno en el servidor. Inténtalo de nuevo más tarde.",
      GENERIC:
        "Ocurrió un error al verificar el estado de autenticación. Inténtalo de nuevo.",
    },
    DELETE_ALL_USERS: {
      400: "Error al intentar eliminar todos los usuarios.",
      401: "No tienes autorización para eliminar todos los usuarios.",
      403: "No tienes permiso para realizar esta acción.",
      500: "Ocurrió un error interno en el servidor. Inténtalo de nuevo más tarde.",
      GENERIC:
        "Ocurrió un error al eliminar todos los usuarios. Inténtalo de nuevo.",
    },
  },
  CALENDAR: {
    CREATE: {
      400: "Error al crear el calendario. Verifica los datos proporcionados.",
      401: "No tienes autorización para crear el calendario.",
      403: "No tienes permiso para realizar esta acción.",
      500: "Ocurrió un error interno en el servidor. Inténtalo de nuevo más tarde.",
      GENERIC: "Ocurrió un error al crear el calendario. Inténtalo de nuevo.",
    },
    FIND_ALL: {
      400: "Error al buscar los eventos del calendario. Verifica los parámetros de búsqueda.",
      401: "No tienes autorización para buscar eventos del calendario.",
      403: "No tienes permiso para realizar esta acción.",
      404: "No se encontraron eventos en el calendario.",
      500: "Ocurrió un error interno en el servidor. Inténtalo de nuevo más tarde.",
      GENERIC:
        "Ocurrió un error al buscar los eventos del calendario. Inténtalo de nuevo.",
    },
    FIND_ONE: {
      400: "Error al buscar el evento del calendario. Verifica el ID del evento.",
      401: "No tienes autorización para buscar el evento del calendario.",
      403: "No tienes permiso para realizar esta acción.",
      404: "No se pudo encontrar el evento del calendario con el ID proporcionado.",
      500: "Ocurrió un error interno en el servidor. Inténtalo de nuevo más tarde.",
      GENERIC:
        "Ocurrió un error al buscar el evento del calendario. Inténtalo de nuevo.",
    },
    UPDATE: {
      400: "Error al actualizar el evento del calendario. Verifica los datos proporcionados.",
      401: "No tienes autorización para actualizar el evento del calendario.",
      403: "No tienes permiso para realizar esta acción.",
      404: "No se pudo encontrar el evento del calendario con el ID proporcionado.",
      500: "Ocurrió un error interno en el servidor. Inténtalo de nuevo más tarde.",
      GENERIC:
        "Ocurrió un error al actualizar el evento del calendario. Inténtalo de nuevo.",
    },
    REMOVE: {
      400: "Error al eliminar el evento del calendario. Verifica el ID del evento.",
      401: "No tienes autorización para eliminar el evento del calendario.",
      403: "No tienes permiso para realizar esta acción.",
      404: "No se pudo encontrar el evento del calendario con el ID proporcionado.",
      500: "Ocurrió un error interno en el servidor. Inténtalo de nuevo más tarde.",
      GENERIC:
        "Ocurrió un error al eliminar el evento del calendario. Inténtalo de nuevo.",
    },
  },
  MEMBERS_INFO: {
    GET_STATISTICS: {
      400: "Error al obtener las estadísticas de miembros. Verifica la solicitud.",
      401: "No tienes autorización para obtener las estadísticas de miembros.",
      403: "No tienes permiso para realizar esta acción.",
      500: "Ocurrió un error interno en el servidor. Inténtalo de nuevo más tarde.",
      GENERIC:
        "Ocurrió un error al obtener las estadísticas. Inténtalo de nuevo.",
    },
    REFRESH_MEMBERS_INFO: {
      400: "Error al intentar actualizar la información de los miembros.",
      401: "No tienes autorización para actualizar la información de los miembros.",
      403: "No tienes permiso para realizar esta acción.",
      500: "Ocurrió un error interno en el servidor. Inténtalo de nuevo más tarde.",
      GENERIC:
        "Ocurrió un error al actualizar la información de los miembros. Inténtalo de nuevo.",
    },
  },
  GENERIC: {
    UNKNOW: {
      400: "Ocurrió un error desconocido, inténtalo de nuevo más tarde.",
      500: "Ocurrió un error desconocido, inténtalo de nuevo más tarde.",
      GENERIC:
        "GENERIC ERROR: Ocurrió un error desconocido, inténtalo de nuevo más tarde.",
    },
  },
  EMAIL: {
    SEND_EMAIL: {
      400: "Error al intentar enviar un email",
      500: "Ocurrió un error desconocido, inténtalo de nuevo más tarde.",
      GENERIC:
        "GENERIC ERROR: Ocurrió un error desconocido, inténtalo de nuevo más tarde.",
    },
  },
  DONATION: {
    FIND_ALL: {
      400: "Error al mostrar las donaciones. Contacta con el admininistrador",
      500: "Error al mostrar las donaciones. Contacta con el admininistrador",
      GENERIC:
        "Hubo un problema al mostrar las donaciones. Por favor, inténtalo de nuevo más tarde.",
    },
    CREATE_PAYMENT_INTENT: {
      400: "La solicitud de donación no es válida. Por favor, verifica los detalles e intenta nuevamente.",
      500: "Estamos experimentando problemas técnicos. El servicio de donaciones no está disponible en este momento. Intenta más tarde.",
      GENERIC:
        "Hubo un problema al procesar tu donación. Por favor, inténtalo de nuevo más tarde.",
    },
    CONFIRM_PAYMENT: {
      400: "La confirmación del pago falló. Asegúrate de que todos los detalles sean correctos e intenta nuevamente.",
      500: "Estamos teniendo dificultades técnicas al confirmar tu pago. Por favor, intenta más tarde.",
      GENERIC:
        "No pudimos confirmar tu pago en este momento. Intenta de nuevo más tarde o contacta con soporte si el problema persiste.",
    },
  },
  COLABORATORS: {
    FIND_ALL: {
      400: "Error al buscar las empresas colaboradores.",
      401: "No tienes autorización para buscar colaboradores.",
      403: "No tienes permiso para realizar esta acción.",
      404: "No se encontraron colaboradores que coincidan con los criterios de búsqueda.",
      500: "Ocurrió un error interno en el servidor. Inténtalo de nuevo más tarde.",
      GENERIC:
        "Ocurrió un error al buscar los colaboradores. Inténtalo de nuevo.",
    },
    CREATE: {
      400: "Error al eliminar el colaborador. Verifica el ID del colaborador.",
      401: "No tienes autorización para crear el colaborador.",
      403: "No tienes permiso para realizar esta acción.",
      404: "Error al crear el colaborador.",
      500: "Ocurrió un error interno en el servidor. Inténtalo de nuevo más tarde.",
      GENERIC: "Ocurrió un error al crear el colaborador. Inténtalo de nuevo.",
    },
    DELETE: {
      400: "Error al eliminar el colaborador. Verifica el ID del colaborador.",
      401: "No tienes autorización para eliminar el colaborador.",
      403: "No tienes permiso para realizar esta acción.",
      404: "No se pudo encontrar el colaborador con el ID proporcionado.",
      500: "Ocurrió un error interno en el servidor. Inténtalo de nuevo más tarde.",
      GENERIC:
        "Ocurrió un error al eliminar el colaborador. Inténtalo de nuevo.",
    },
  },
  INSTALLATIONS: {
    FIND_ALL: {
      400: "Error al buscar las instalaciones.",
      401: "No tienes autorización para buscar instalaciones.",
      403: "No tienes permiso para realizar esta acción.",
      404: "No se encontraron instalaciones que coincidan con los criterios de búsqueda.",
      500: "Ocurrió un error interno en el servidor. Inténtalo de nuevo más tarde.",
      GENERIC:
        "Ocurrió un error al buscar las instalaciones. Inténtalo de nuevo.",
    },
    CREATE: {
      400: "Error al crear la instalación. Verifica el ID de la instalación.",
      401: "No tienes autorización para crear la instalación.",
      403: "No tienes permiso para realizar esta acción.",
      404: "Error al crear la instalación.",
      500: "Ocurrió un error interno en el servidor. Inténtalo de nuevo más tarde.",
      GENERIC: "Ocurrió un error al crear la instalación. Inténtalo de nuevo.",
    },
    REMOVE: {
      400: "Error al eliminar la instalación. Verifica el ID de la instalación.",
      401: "No tienes autorización para eliminar la instalación.",
      403: "No tienes permiso para realizar esta acción.",
      404: "No se pudo encontrar la instalación con el ID proporcionado.",
      500: "Ocurrió un error interno en el servidor. Inténtalo de nuevo más tarde.",
      GENERIC:
        "Ocurrió un error al eliminar la instalación. Inténtalo de nuevo.",
    },
  },
} as const;
