import type { NavItem } from "@/features/core/types";
import { ValidRoles } from "@/features/auth/types";
import { useAuthStore } from "@/features/auth/stores";

export const navItems: NavItem[] = [
	{
		title: "Inicio",
		href: "/dashboard",
		icon: "dashboard",
		label: "Dashboard",
		validRole: [ValidRoles.admin, ValidRoles.treasure, ValidRoles.president, ValidRoles.user],
	},
	{
		title: "Crear Socio",
		href: "/dashboard/members/new",
		icon: "userPlus",
		label: "user",
		validRole: [ValidRoles.admin, ValidRoles.treasure],
	},
	{
		title: "Socios",
		href: "/dashboard/members",
		icon: "user",
		label: "user",
		validRole: [ValidRoles.admin, ValidRoles.treasure],
	},
	{
		title: "Socios Sin Pagar",
		href: "/dashboard/members-no-pay",
		icon: "employee",
		label: "employee",
		validRole: [ValidRoles.admin, ValidRoles.treasure],
	},
	{
		title: "Exitu",
		href: "/dashboard/members-exitu",
		icon: "cross",
		label: "exitu",
		validRole: [ValidRoles.admin, ValidRoles.treasure],
	},
	{
		title: "Gestión de Calendario",
		href: "/dashboard/calendar",
		icon: "calendar",
		label: "calendar",
		validRole: [ValidRoles.admin, ValidRoles.president, ValidRoles.treasure],
	},
	{
		title: "Cesiones",
		href: "/dashboard/assignments",
		icon: "assigments",
		label: "assigments",
		validRole: [ValidRoles.admin, ValidRoles.president],
	},
	{
		title: "Gestión de Contenido",
		href: "/dashboard/content",
		icon: "content",
		validRole: [ValidRoles.admin, ValidRoles.president, ValidRoles.treasure],
	},
	{
		title: "Socios Banco",
		href: "/dashboard/bank/pdf",
		icon: "bank",
		label: "bank",
		validRole: [ValidRoles.admin, ValidRoles.president],
	},
	{
		title: "Salir",
		icon: "login",
		label: "logout",
		validRole: [ValidRoles.admin, ValidRoles.treasure, ValidRoles.president, ValidRoles.user],
	},
];
