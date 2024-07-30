import type { NavItem } from "@/features/core/types";

import { ValidRoles } from "@/features/auth/types";
import { useAuthStore } from "@/features/auth/stores";
import CalendarEvents from "@/features/landing/components/calendar.component";

// export type User = {
//   id: number;
//   name: string;
//   company: string;
//   role: string;
//   verified: boolean;
//   status: string;
// };
// export const users: User[] = [
//   {
//     id: 1,
//     name: "Candice Schiner",
//     company: "Dell",
//     role: "Frontend Developer",
//     verified: false,
//     status: "Active",
//   },
//   {
//     id: 2,
//     name: "John Doe",
//     company: "TechCorp",
//     role: "Backend Developer",
//     verified: true,
//     status: "Active",
//   },
//   {
//     id: 3,
//     name: "Alice Johnson",
//     company: "WebTech",
//     role: "UI Designer",
//     verified: true,
//     status: "Active",
//   },
//   {
//     id: 4,
//     name: "David Smith",
//     company: "Innovate Inc.",
//     role: "Fullstack Developer",
//     verified: false,
//     status: "Inactive",
//   },
//   {
//     id: 5,
//     name: "Emma Wilson",
//     company: "TechGuru",
//     role: "Product Manager",
//     verified: true,
//     status: "Active",
//   },
//   {
//     id: 6,
//     name: "James Brown",
//     company: "CodeGenius",
//     role: "QA Engineer",
//     verified: false,
//     status: "Active",
//   },
//   {
//     id: 7,
//     name: "Laura White",
//     company: "SoftWorks",
//     role: "UX Designer",
//     verified: true,
//     status: "Active",
//   },
//   {
//     id: 8,
//     name: "Michael Lee",
//     company: "DevCraft",
//     role: "DevOps Engineer",
//     verified: false,
//     status: "Active",
//   },
//   {
//     id: 9,
//     name: "Olivia Green",
//     company: "WebSolutions",
//     role: "Frontend Developer",
//     verified: true,
//     status: "Active",
//   },
//   {
//     id: 10,
//     name: "Robert Taylor",
//     company: "DataTech",
//     role: "Data Analyst",
//     verified: false,
//     status: "Active",
//   },
// ];

// export type Employee = {
//   id: number;
//   first_name: string;
//   last_name: string;
//   email: string;
//   phone: string;
//   gender: string;
//   date_of_birth: string; // Consider using a proper date type if possible
//   street: string;
//   city: string;
//   state: string;
//   country: string;
//   zipcode: string;
//   longitude?: number; // Optional field
//   latitude?: number; // Optional field
//   job: string;
//   profile_picture?: string | null; // Profile picture can be a string (URL) or null (if no picture)
// };

export const navItems: NavItem[] = [
  {
    title: "Inicio",
    href: "/dashboard",
    icon: "dashboard",
    label: "Dashboard",
    validRole: [
      ValidRoles.admin,
      ValidRoles.treasure,
      ValidRoles.president,
      ValidRoles.user,
    ],
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
    href: "/dashboard/members",
    icon: "employee",
    label: "employee",
    validRole: [ValidRoles.admin, ValidRoles.treasure],
  },
  {
    title: "Exitu",
    href: "/dashboard/members",
    icon: "cross",
    label: "exitu",
    validRole: [ValidRoles.admin, ValidRoles.treasure],
  },
  {
    title: "Tareas",
    href: "/dashboard/kanban",
    icon: "kanban",
    label: "kanban",
    validRole: [
      ValidRoles.admin,
      ValidRoles.treasure,
      ValidRoles.president,
      ValidRoles.user,
    ],
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
    validRole: [
      ValidRoles.admin,
      ValidRoles.treasure,
      ValidRoles.president,
      ValidRoles.user,
    ],
    onClick: (e) => {
      e.preventDefault();
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
