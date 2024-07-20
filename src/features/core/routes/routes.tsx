import { createBrowserRouter } from "react-router-dom";

//! MY LAYOUT
// import Layout from "@/layout/Test";
import Home from "@/features/core/pages/Home";
import DashboardLayout from "@/features/core/layout/layout";
import NotFound from "@/features/core/pages/not-found";
// import { EmployeeTable } from "@/components/tables/members-tables/member-table";

import { AuthPage } from "@/features/auth/pages";
import { MemberNewPage, MembersPage } from "@/features/members/pages";
import { KanbanPage } from "@/features/kanban/pages";
import { CalendarPage } from "@/features/calendar/pages";

export const routes = createBrowserRouter([
	{
		path: "/",
		element: <AuthPage />,
	},
	{
		path: "/dashboard",
		element: <DashboardLayout />,
		children: [
			{
				path: "",
				element: <Home />,
			},
			{
				path: "members",
				element: <MembersPage />,
			},
			{
				path: "members/new",
				element: <MemberNewPage />,
			},
			{
				path: "members/:id",
				element: <MemberNewPage />,
			},
			{
				path: "kanban",
				element: <KanbanPage />,
			},
			{
				path: "calendar",
				element: <CalendarPage />,
			},
		],
		errorElement: <NotFound />,
	},
	{
		path: "*",
		element: <NotFound />,
	},
]);
