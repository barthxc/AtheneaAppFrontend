import { createBrowserRouter } from "react-router-dom";

import DashboardLayout from "@/features/core/layout/layout";
import { LandingLayout } from "@/features/core/layout/landing-layout";
import ProtectedRoute from "@/features/core/layout/protected-route";
import {
  HomePage,
  NotFoundPage,
  UnauthorizedPage,
} from "@/features/core/pages";

import { AuthPage } from "@/features/auth/pages";
import { ValidRoles } from "@/features/auth/types";

import {
  MembersNoPayPage,
  MembersExituPage,
  MemberPdfBankPage,
  MemberPdfPage,
  MemberEditPage,
  MemberNewPage,
  MembersPage,
} from "@/features/members/pages";
import { KanbanPage } from "@/features/kanban/pages";

import {
  AboutPage,
  CalendarPage as CalendarLanding,
} from "@/features/landing/pages";
import ContactPage from "@/features/landing/pages/contact.page";
import DonationPage from "@/features/landing/pages/donation.page";
import MainPage from "@/features/landing/pages/main";
import { CalendarPage } from "@/features/calendar/pages";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      {
        path: "",
        element: <MainPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "calendar",
        element: <CalendarLanding />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "donation",
        element: <DonationPage />,
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
        path: "members-no-pay",
        element: (
          <ProtectedRoute
            allowedRoles={[ValidRoles.admin, ValidRoles.treasure]}>
            <MembersNoPayPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "members-exitu",
        element: (
          <ProtectedRoute
            allowedRoles={[ValidRoles.admin, ValidRoles.treasure]}>
            <MembersExituPage />
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
