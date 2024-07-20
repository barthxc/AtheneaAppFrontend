import { ValidRoles } from "@/Auth/types/enums";
import type { Icons } from "@/components/icons";
import type { FieldValues } from "react-hook-form";

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
