export const ERROR_MESSAGES = {
	GENERIC: {
		SOMETHING_WENT_WRONG: "Uh oh! Something went wrong.",
		PROBLEM_WITH_REQUEST: "There was a problem with your request.",
	},
	REQUEST: {
		ERR_BAD_REQUEST: "El formato de los datos no es el correcto.",
		UNKNOWN: "Ocurrió un error desconocido, inténtalo de nuevo más tarde.",
		MEMBER: {
			CREATE_MEMBER: {
				400: "Error al crear un socio. Por favor revisa los datos ingresados.",
				401: "No tienes autorización para crear un usuario.",
				403: "No tienes permiso para realizar esta acción.",
				404: "No se pudo encontrar el recurso solicitado.",
				500: "Ocurrió un error interno en el servidor. Inténtalo de nuevo más tarde.",
				GENERIC: "Ocurrió un error al crear el socio. Inténtalo de nuevo.",
			},
		},
	},
} as const;
