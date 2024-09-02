import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatIban = (value: string) => {
  if (!value) return value;

  const iban = value.replace(/[^\da-zA-Z]/g, "");

  return iban.replace(/(.{4})/g, "$1 ").trim();
};

export const formatDate = (value: string) => {
  const cleaned = value.replace(/\D+/g, "");
  const formatted = cleaned.replace(
    /(\d{2})(\d{2})?(\d{4})?/,
    (_: string, p1: string, p2: string, p3: string) => {
      let result = p1;
      // biome-ignore lint/style/useTemplate: <explanation>
      if (p2) result += "/" + p2;
      // biome-ignore lint/style/useTemplate: <explanation>
      if (p3) result += "/" + p3;
      return result;
    }
  );
  return formatted;
};
