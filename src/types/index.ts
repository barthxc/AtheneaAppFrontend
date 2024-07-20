import { ValidRoles } from "@/Auth/types/enums";
import type { Icons } from "@/components/icons";
import type { memberFormSchema } from "@/schemas";
import type { FieldValues, UseFormReturn } from "react-hook-form";
import type { z } from "zod";

export enum MemberStatus {
  alta = "alta",
  baja = "baja",
  exitud = "exitud",
}

export enum MemberHasDisability {
  si = "si",
  no = "no",
}

export enum MemberStreetType {
  avenida = "avenida",
  barriada = "barriada",
  plaza = "plaza",
  calle = "calle",
  via = "via",
}

export enum MemberPaymentMethod {
  caja = "caja",
  banco = "banco",
}

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
  description?: string;
  validRole?: ValidRoles[];
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[];
}

export interface FooterItem {
  title: string;
  items: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}

export type MainNavItem = NavItemWithOptionalChildren;

export type SidebarNavItem = NavItemWithChildren;

export interface FormViewProps {
  initialData: any | null;
  loading: boolean;
  showModal: boolean;
  openModal(): void;
  closeModal(): void;
  onSubmit(data: FieldValues): Promise<void>;
  onDelete(): Promise<void>;
}

export type MemberFormValues = z.infer<typeof memberFormSchema>;
export interface MemberFormViewProps extends FormViewProps {
  form: UseFormReturn<MemberFormValues>;
}
