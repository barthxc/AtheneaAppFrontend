import { createBrowserRouter, ScrollRestoration } from "react-router-dom";

import { HomePage, NotFoundPage, UnauthorizedPage, FaqPage } from "@/features/core/pages";
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
import { CalendarControlPage } from "@/features/calendar/pages";
import { AuthPage } from "@/features/auth/pages";
import { ValidRoles } from "@/features/auth/types";
import { ContentPage } from "@/features/content/pages";
import {
	AboutPage,
	NewsPage,
	DonationPage,
	LandingPage,
	ContactPage,
	CalendarPage,
	TermsConditionPage,
} from "@/features/landing/pages";
import { LandingLayout } from "@/features/landing/layout/landing-layout";
import { AssignmentsGivePage, AssignmentsPage, AssignmentsPdfPage } from "@/features/assigments/pages";

export const routes = createBrowserRouter([
	{
		path: "/",
		element: (
			<>
				<ScrollRestoration />
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
				path: "news",
				element: <NewsPage />,
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
				path: "terms-conditions",
				element: <TermsConditionPage />,
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
				<ScrollRestoration />
				<DashboardLayout />
			</>
		),
		children: [
			{
				path: "",
				element: (
					<ProtectedRoute allowedRoles={[ValidRoles.admin, ValidRoles.treasure, ValidRoles.president, ValidRoles.user]}>
						<HomePage />
					</ProtectedRoute>
				),
			},
			{
				path: "members",
				element: (
					<ProtectedRoute allowedRoles={[ValidRoles.admin, ValidRoles.treasure]}>
						<MembersPage />
					</ProtectedRoute>
				),
			},
			{
				path: "members-no-pay",
				element: (
					<ProtectedRoute allowedRoles={[ValidRoles.admin, ValidRoles.treasure]}>
						<MembersNoPayPage />
					</ProtectedRoute>
				),
			},
			{
				path: "members-exitu",
				element: (
					<ProtectedRoute allowedRoles={[ValidRoles.admin, ValidRoles.treasure]}>
						<MembersExituPage />
					</ProtectedRoute>
				),
			},
			{
				path: "members/new",
				element: (
					<ProtectedRoute allowedRoles={[ValidRoles.admin, ValidRoles.treasure]}>
						<MemberNewPage />
					</ProtectedRoute>
				),
			},
			{
				path: "members/:id/edit",
				element: (
					<ProtectedRoute allowedRoles={[ValidRoles.admin, ValidRoles.treasure]}>
						<MemberEditPage />
					</ProtectedRoute>
				),
			},
			{
				path: "members/pdf/:id",
				element: (
					<ProtectedRoute allowedRoles={[ValidRoles.admin, ValidRoles.treasure]}>
						<MemberPdfPage />
					</ProtectedRoute>
				),
			},
			{
				path: "bank/pdf",
				element: (
					<ProtectedRoute allowedRoles={[ValidRoles.admin, ValidRoles.president]}>
						<MemberPdfBankPage />
					</ProtectedRoute>
				),
			},
			{
				path: "calendar",
				element: (
					<ProtectedRoute allowedRoles={[ValidRoles.admin, ValidRoles.president]}>
						<CalendarControlPage />
					</ProtectedRoute>
				),
			},
			{
				path: "content",
				element: (
					<ProtectedRoute allowedRoles={[ValidRoles.admin, ValidRoles.treasure, ValidRoles.president]}>
						<ContentPage />
					</ProtectedRoute>
				),
			},
			{
				path: "assignments",
				element: (
					<ProtectedRoute allowedRoles={[ValidRoles.admin, ValidRoles.treasure, ValidRoles.president]}>
						<AssignmentsPage />
					</ProtectedRoute>
				),
			},
			{
				path: "assignments/:id/pdf",
				element: (
					<ProtectedRoute allowedRoles={[ValidRoles.admin, ValidRoles.treasure]}>
						<AssignmentsPdfPage />
					</ProtectedRoute>
				),
			},
			{
				path: "assignments/:id/give",
				element: (
					<ProtectedRoute allowedRoles={[ValidRoles.admin, ValidRoles.treasure, ValidRoles.president]}>
						<AssignmentsGivePage />
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
