import type { Icons } from "@/components/icons";
import type { calendarFormSchema, memberFormSchema } from "@/schemas";
import type { FieldValues, UseFormReturn } from "react-hook-form";
import type { z } from "zod";

export enum ValidRoles {
	admin = "admin",
	treasure = "treasure",
	president = "president",
	user = "user",
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

export interface Category {
	_id: string;
	name: string;
}

export interface Role {
	_id: string;
	name: string;
}

export interface FormViewProps {
	initialData: any | null;
	loading: boolean;
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	onSubmit(data: FieldValues): Promise<void>;
	onDelete(): Promise<void>;
}

export type CalendarFormValues = z.infer<typeof calendarFormSchema>;
export interface CalendarFormViewProps extends FormViewProps {
	categories: Category[];
	form: UseFormReturn<CalendarFormValues>;
}

export type MemberFormValues = z.infer<typeof memberFormSchema>;
export interface MemberFormViewProps extends FormViewProps {
	roles: Role[];
	form: UseFormReturn<MemberFormValues>;
}
