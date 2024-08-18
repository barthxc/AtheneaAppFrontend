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
		title: "Tareas",
		href: "/dashboard/kanban",
		icon: "kanban",
		label: "kanban",
		validRole: [ValidRoles.admin, ValidRoles.treasure, ValidRoles.president, ValidRoles.user],
	},
	{
		title: "Gestión de Calendario",
		href: "/dashboard/calendar",
		icon: "calendar",
		label: "calendar",
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
		onClick: (e) => {
			e.preventDefault();
			// TODO: Show confirm dialog before logout
			useAuthStore.getState().logoutUser();
		},
	},
];

export const visitortNavItems: NavItem[] = [
	{
		title: "Nosotros",
		href: "/about",
		icon: "about",
		label: "About",
	},
	{
		title: "Calendario",
		href: "/calendar",
		icon: "calendar",
		label: "Calendar",
	},
	{
		title: "Contacto",
		href: "/contact",
		icon: "contact",
		label: "Contact",
	},
	{
		title: "Donar",
		href: "/donation",
		icon: "donation",
		label: "Donation",
	},
];
