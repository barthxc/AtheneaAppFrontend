import { MemberHasDisability, MemberPaymentMethod, MemberStatus, MemberStreetType } from "@/types";
import { z } from "zod";

/*
	TODO: Make sure that a string is a string and not a number
	TODO: Move messages to constants (avoid hardcoding) [?]
*/
export const memberFormSchema = z
	.object({
		name: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
		lastName: z.string().min(4, "Ingresa al menos 4 caracteres"),
		identificationNumber: z
			.string()
			.min(8, "El DNI debe tener al menos 8 caracteres")
			.max(15, "El DNI debe tener máximo 15 caracteres")
			.optional(),
		status: z.enum([MemberStatus.baja, MemberStatus.alta, MemberStatus.exitud]),
		email: z.string().email("Ingresa un correo válido").optional(),
		birthDate: z.coerce.date({
			errorMap: (issue, { defaultError }) => ({
				message: issue.code === "invalid_date" ? "Ingresa una fecha válida" : defaultError,
			}),
		}),
		hasDisability: z.enum([MemberHasDisability.si, MemberHasDisability.no]),
		gradeDisability: z.coerce.number({ message: "Ingresa un porcentaje válido" }).optional(),
		observations: z.string().min(1, "Ingresa al menos 1 caracter").optional(),
		// paymentDate: z.coerce
		// 	.date({
		// 		errorMap: (issue, { defaultError }) => ({
		// 			message: issue.code === "invalid_date" ? "Ingresa una fecha válida" : defaultError,
		// 		}),
		// 	})
		// 	.optional(),
		phoneInfo: z.object({
			phone1: z.string().min(8, "El número de teléfono debe tener al menos 8 dígitos"),
			phone2: z.string().min(8, "El número de teléfono debe tener al menos 8 dígitos").optional(),
		}),
		addressInfo: z.object({
			streetType: z
				.enum([
					MemberStreetType.avenida,
					MemberStreetType.barriada,
					MemberStreetType.plaza,
					MemberStreetType.calle,
					MemberStreetType.via,
				])
				.optional(),
			streetName: z.string().min(3, "El nombre de la calle debe tener al menos 3 caracteres").optional(),
			door: z.string().min(3, "Ingresa al menos 3 caracteres").optional(),
			postalCode: z.number({ message: "El código postal debe ser un número" }).optional(),
			location: z.string().min(1, "Ingresa al menos 1 caracter").optional(),
			province: z.string().min(3, "El nombre de la provincia debe tener al menos 3 caracteres").optional(),
			block: z.string().min(3, "Ingresa al menos 3 caracteres").optional(),
		}),
		bankInfo: z.object({
			paymentMethod: z.enum([MemberPaymentMethod.caja, MemberPaymentMethod.banco]),
			entity: z.string().optional(),
			iban: z
				.string()
				.regex(/^ES\d{2}\s?\d{4}\s?\d{4}\s?\d{2}\s?\d{10}$/, "Ingresa un IBAN válido")
				.optional(),
			name: z.string().min(3, "El nombre debe tener al menos 3 caracteres").optional(),
			lastName: z.string().min(4, "Ingresa al menos 4 caracteres").optional(),
			identificationNumber: z
				.string()
				.min(8, "El DNI debe tener al menos 8 caracteres")
				.max(15, "El DNI debe tener máximo 15 caracteres")
				.optional(),
		}),
	})
	.refine(
		({ hasDisability }) => !hasDisability,
		({ hasDisability, gradeDisability }) => {
			const gradeDisabilityKey = "gradeDisability";

			if (hasDisability === MemberHasDisability.no && gradeDisability) {
				return {
					path: [gradeDisabilityKey],
					message: "Para ingresar el grado el socio debe tener una discapacidad",
				};
			}

			if (hasDisability === MemberHasDisability.si) {
				if (!gradeDisability || Number.isNaN(gradeDisability)) {
					return {
						path: [gradeDisabilityKey],
						message: "Debes especificar un grado de discapacidad",
					};
				}

				if (gradeDisability <= 0) {
					return {
						path: [gradeDisabilityKey],
						message: "El grado de discapacidad debe ser mayor al 0%",
					};
				}
			}

			return {};
		},
	);
