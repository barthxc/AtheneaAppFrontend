import { z } from "zod";

import { dateRegex } from "@/features/core/utils";

import {
  MemberPaymentMethod,
  MemberStatus,
  MemberStreetType,
} from "@/features/members/types";

/*
	TODO: Make sure that a string is a string and not a number
	TODO: Move messages to constants (avoid hardcoding) [?]
	TODO: Split pipes
*/
export const memberFormSchema = z
  .object({
    name: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
    lastName: z.string().min(4, "Ingresa al menos 4 caracteres"),
    identificationNumber: z
      .string()
      .min(8, "El DNI debe tener al menos 8 caracteres")
      .max(15, "El DNI debe tener máximo 15 caracteres")
      .nullable()
      .optional(),
    phoneInfo: z.object({
      phone1: z
        .string()
        .min(8, "El número de teléfono debe tener al menos 8 dígitos"),
      phone2: z
        .string()
        .min(8, "El número de teléfono debe tener al menos 8 dígitos")
        .nullable()
        .optional(),
    }),
    email: z.string().email("Ingresa un correo válido").nullable().optional(),
    birthDate: z
      .string()
      .regex(
        dateRegex,
        "La fecha de nacimiento debe tener el formato de DD/MM/AAAA o DD-MM-AAAA"
      )
      .transform((value) => {
        const [day, month, year] = value.includes("/")
          ? value.split("/")
          : value.split("-");
        return `${year}/${month}/${day}`;
      }),
    isDisabled: z.boolean(),
    gradeDisability: z.coerce
      .number({ message: "Ingresa un porcentaje válido" })
      .nullable()
      .optional(),
    status: z.enum([MemberStatus.baja, MemberStatus.alta, MemberStatus.exitud]),
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
      streetName: z
        .string()
        .min(3, "El nombre de la calle debe tener al menos 3 caracteres")
        .nullable()
        .optional(),
      door: z
        .string()
        .min(1, "Ingresa al menos 1 caracteres")
        .nullable()
        .optional(),
      block: z
        .string()
        .min(1, "Ingresa al menos 1 caracteres")
        .nullable()
        .optional(),
      location: z
        .string()
        .min(1, "Ingresa al menos 1 caracter")
        .nullable()
        .optional(),
      province: z
        .string()
        .min(3, "El nombre de la provincia debe tener al menos 3 caracteres")
        .nullable()
        .optional(),
      postalCode: z.coerce
        .number({ message: "El código postal debe ser un número" })
        .nullable()
        .optional(),
    }),
    bankInfo: z.object({
      paymentMethod: z.enum([
        MemberPaymentMethod.caja,
        MemberPaymentMethod.banco,
      ]),
      name: z
        .string()
        .min(3, "El nombre debe tener al menos 3 caracteres")
        .nullable()
        .optional(),
      lastName: z
        .string()
        .min(4, "Ingresa al menos 4 caracteres")
        .nullable()
        .optional(),
      identificationNumber: z
        .string()
        .min(8, "El DNI debe tener al menos 8 caracteres")
        .max(15, "El DNI debe tener máximo 15 caracteres")
        .nullable()
        .optional(),
      entity: z.string().nullable().optional(),
      iban: z
        .string()
        .regex(
          /^ES\d{2}\s?\d{4}\s?\d{4}\s?\d{2}\s?\d{10}$/,
          "Ingresa un IBAN válido"
        )
        .nullable()
        .optional(),
    }),
    observations: z
      .string()
      .min(1, "Ingresa al menos 1 caracter")
      .nullable()
      .optional(),
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
