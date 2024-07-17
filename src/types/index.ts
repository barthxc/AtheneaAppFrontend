import type { Icons } from "@/components/icons";
import type { calendarFormSchema } from "@/schemas";
import type { UseFormReturn } from "react-hook-form";
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

export type CalendarFormValues = z.infer<typeof calendarFormSchema>;

export interface CalendarFormViewProps {
	initialData: any | null;
	loading: boolean;
	categories: Category[];
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	form: UseFormReturn<CalendarFormValues>;
	onSubmit(data: CalendarFormValues): Promise<void>;
	onDelete(): Promise<void>;
}
