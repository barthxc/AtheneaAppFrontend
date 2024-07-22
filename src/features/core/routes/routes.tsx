import { createBrowserRouter } from "react-router-dom";

import Home from "@/features/core/pages/Home";
import DashboardLayout from "@/features/core/layout/layout";
import NotFound from "@/features/core/pages/not-found";
// import { EmployeeTable } from "@/components/tables/members-tables/member-table";

import { AuthPage } from "@/features/auth/pages";
import { MemberNewPage, MembersPage } from "@/features/members/pages";
import { KanbanPage } from "@/features/kanban/pages";
import { CalendarPage } from "@/features/calendar/pages";
import ProtectedRoute from "../layout/protected-route";
import { ValidRoles } from "@/features/auth/types";
import UnauthorizedPage from "../pages/unauthorized";

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
        element: (
          <ProtectedRoute
            allowedRoles={[
              ValidRoles.admin,
              ValidRoles.treasure,
              ValidRoles.president,
              ValidRoles.user,
            ]}>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "members",
        element: (
          <ProtectedRoute
            allowedRoles={[ValidRoles.admin, ValidRoles.treasure]}>
            <MembersPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "member/new",
        element: (
          <ProtectedRoute
            allowedRoles={[ValidRoles.admin, ValidRoles.treasure]}>
            <MemberNewPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "members/:id",
        element: (
          <ProtectedRoute
            allowedRoles={[ValidRoles.admin, ValidRoles.treasure]}>
            <MemberNewPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "kanban",

        element: (
          <ProtectedRoute
            allowedRoles={[
              ValidRoles.admin,
              ValidRoles.treasure,
              ValidRoles.president,
              ValidRoles.user,
            ]}>
            <KanbanPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "calendar",
        element: (
          <ProtectedRoute
            allowedRoles={[ValidRoles.admin, ValidRoles.president]}>
            <CalendarPage />
          </ProtectedRoute>
        ),
      },
    ],
    errorElement: <NotFound />,
  },
  {
    path: "/unauthorized",
    element: <UnauthorizedPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
