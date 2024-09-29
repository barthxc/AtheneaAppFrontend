import { z } from "zod";

import { dateRegex } from "@/features/core/utils";

import { MemberPaymentMethod, MemberStatus, MemberStreetType } from "@/features/members/types";

/*
	TODO: Make sure that a string is a string and not a number
	TODO: Move messages to constants (avoid hardcoding) [?]
	TODO: Split pipes
  TODO: Refactorize optional fields (might be useful to create a custom pipe)
*/
export const memberFormSchema = z
	.object({
		name: z.string().min(3, "El nombre debe tener al menos 3 carácteres"),
		lastName: z.string().min(4, "Ingresa al menos 4 carácteres"),
		identificationNumber: z.union([
			z
				.string()
				.min(8, "El DNI debe tener al menos 8 carácteres")
				.max(15, "El DNI debe tener máximo 15 carácteres")
				.nullable()
				.optional(),
			z.literal(""),
		]),
		phoneInfo: z.object({
			phone1: z.string().min(8, "El número de teléfono debe tener al menos 8 dígitos"),
			phone2: z.union([
				z.string().min(8, "El número de teléfono debe tener al menos 8 dígitos").nullable().optional(),
				z.literal(""),
			]),
		}),
		email: z.union([z.string().email("Ingresa un correo válido").nullable().optional(), z.literal("")]),
		birthDate: z
			.string()
			.regex(dateRegex, "La fecha de nacimiento debe tener el formato de DD/MM/AAAA o DD-MM-AAAA")
			.transform((value) => {
				const [day, month, year] = value.includes("/") ? value.split("/") : value.split("-");
				return `${year}/${month}/${day}`;
			}),
		isDisabled: z.boolean(),
		gradeDisability: z.coerce
			.number({ message: "Ingresa un porcentaje válido" })
			.max(100, "Ingresa 100% como máximo")
			.nullable()
			.optional(),
		status: z.enum([MemberStatus.baja, MemberStatus.alta, MemberStatus.exitu]),
		addressInfo: z.object({
			streetType: z
				.enum([
					MemberStreetType.avenida,
					MemberStreetType.barriada,
					MemberStreetType.plaza,
					MemberStreetType.calle,
					MemberStreetType.via,
				])
				.nullable()
				.optional(),
			streetName: z.union([
				z.string().min(3, "El nombre de la calle debe tener al menos 3 carácteres").nullable().optional(),
				z.literal(""),
			]),
			door: z.union([z.string().min(1, "Campo obligatorio").nullable().optional(), z.literal("")]),
			block: z.union([z.string().min(1, "Campo obligatorio").nullable().optional(), z.literal("")]),
			location: z.union([z.string().min(1, "Campo obligatorio").nullable().optional(), z.literal("")]),
			province: z.union([
				z.string().min(3, "El nombre de la provincia debe tener al menos 3 carácteres").nullable().optional(),
				z.literal(""),
			]),
			postalCode: z.union([
				z.coerce.number({ message: "El código postal debe ser un número" }).nullable().optional(),
				z.literal(""),
			]),
		}),
		bankInfo: z.object({
			paymentMethod: z.enum([MemberPaymentMethod.caja, MemberPaymentMethod.banco]),
			name: z.union([
				z.string().min(3, "El nombre debe tener al menos 3 carácteres").nullable().optional(),
				z.literal(""),
			]),
			lastName: z.union([z.string().min(4, "Ingresa al menos 4 carácteres").nullable().optional(), z.literal("")]),
			identificationNumber: z.union([
				z
					.string()
					.min(8, "El DNI debe tener al menos 8 carácteres")
					.max(15, "El DNI debe tener máximo 15 carácteres")
					.nullable()
					.optional(),
				z.literal(""),
			]),
			entity: z.string().nullable().optional(),
			iban: z.union([
				z
					.string()
					.regex(/^ES\d{2}(?: ?\d{4}){5}$/, "Ingresa un IBAN válido")
					.nullable()
					.optional(),
				z.literal(""),
			]),
		}),
		observations: z.union([z.string().min(1, "Campo obligatorio").nullable().optional(), z.literal("")]),
		// paymentDate: z.coerce
		// 	.date({
		// 		errorMap: (issue, { defaultError }) => ({
		// 			message: issue.code === "invalid_date" ? "Ingresa una fecha válida" : defaultError,
		// 		}),
		// 	})
		// 	.optional(),
	})
	.superRefine(({ isDisabled, gradeDisability }, ctx) => {
		const gradeDisabilityKey = "gradeDisability";

		if (!isDisabled && gradeDisability) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				path: [gradeDisabilityKey],
				message: "Para ingresar el grado el socio debe tener una discapacidad",
			});
		}

		if (isDisabled) {
			if (!gradeDisability || Number.isNaN(gradeDisability)) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					path: [gradeDisabilityKey],
					message: "Debes especificar un grado de discapacidad",
				});
			}

			if (gradeDisability && gradeDisability <= 0) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					path: [gradeDisabilityKey],
					message: "El grado de discapacidad debe ser mayor al 0%",
				});
			}
		}
	});
