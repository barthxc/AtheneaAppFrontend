import { createBrowserRouter } from "react-router-dom";

import DashboardLayout from "@/features/core/layout/layout";
import { LandingLayout } from "../layout/landing-layout";
import ProtectedRoute from "@/features/core/layout/protected-route";
import {
  HomePage,
  NotFoundPage,
  UnauthorizedPage,
} from "@/features/core/pages";

import { AuthPage } from "@/features/auth/pages";
import { ValidRoles } from "@/features/auth/types";

import {
  MemberEditPage,
  MemberNewPage,
  MembersPage,
} from "@/features/members/pages";
import { KanbanPage } from "@/features/kanban/pages";
import { CalendarPage } from "@/features/calendar/pages";
import { MemberPdfPage } from "@/features/members/pages/member-pdf.page";
import { MemberPdfBankPage } from "@/features/members/pages/member-pdf-bank.page";
import { AboutPage } from "@/features/landing/pages";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      {
        path: "",
        element: <AboutPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <AboutPage />,
      },
      {
        path: "donation",
        element: <AboutPage />,
      },
    ],
  },
  {
    path: "/auth",
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
            <HomePage />
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
        path: "members/new",
        element: (
          <ProtectedRoute
            allowedRoles={[ValidRoles.admin, ValidRoles.treasure]}>
            <MemberNewPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "members/:id/edit",
        element: (
          <ProtectedRoute
            allowedRoles={[ValidRoles.admin, ValidRoles.treasure]}>
            <MemberEditPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "members/pdf/:id",
        element: (
          <ProtectedRoute
            allowedRoles={[ValidRoles.admin, ValidRoles.treasure]}>
            <MemberPdfPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "bank/pdf",
        element: (
          <ProtectedRoute
            allowedRoles={[ValidRoles.admin, ValidRoles.president]}>
            <MemberPdfBankPage />
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
    errorElement: <NotFoundPage />,
  },
  {
    path: "/unauthorized",
    element: <UnauthorizedPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
