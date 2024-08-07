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
    CREATE_PAYMENT_INTENT: {
      400: "CREATE PAYMENT INTENT 400",
      500: "El servicio de donaciones no está disponible en este momento. Intentelo más tarde",
      GENERIC: "Servicio de pago no está disponible en este momento",
    },
    CONFIRM_PAYMENT: {
      400: "CONFIRM PAYMENT 400",
      500: "CONFIRM PAYMENT 500",
      GENERIC: "Hubo un error al confirmar el pago. Intentelo de nuevo",
    },
  },
} as const;
