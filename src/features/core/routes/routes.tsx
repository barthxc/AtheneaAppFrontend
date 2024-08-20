import { createBrowserRouter } from "react-router-dom";

import {
  HomePage,
  NotFoundPage,
  UnauthorizedPage,
  FaqPage,
} from "@/features/core/pages";
import { DashboardLayout, ProtectedRoute } from "@/features/core/components";
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
import { CalendarControlPage } from "@/features/calendar/pages";
import { AuthPage } from "@/features/auth/pages";
import { ValidRoles } from "@/features/auth/types";
import { ContentPage } from "@/features/content/pages";
import {
  AboutPage,
  DonationPage,
  LandingPage,
  ContactPage,
  CalendarPage,
} from "@/features/landing/pages";
import { LandingLayout } from "@/features/landing/layout/landing-layout";
import ScrollToTop from "../utils/ScrollToTop";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <LandingLayout />
      </>
    ),
    children: [
      {
        path: "",
        element: <LandingPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "calendar",
        element: <CalendarPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "donation",
        element: <DonationPage />,
      },
      {
        path: "faq",
        element: <FaqPage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },
  {
    path: "/dashboard",
    element: (
      <>
        <ScrollToTop />
        <DashboardLayout />
      </>
    ),
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
            <CalendarControlPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "content",
        element: (
          <ProtectedRoute
            allowedRoles={[
              ValidRoles.admin,
              ValidRoles.treasure,
              ValidRoles.president,
            ]}>
            <ContentPage />
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
