//! MY LAYOUT
// import Layout from "@/layout/Test";
import Home from "@/pages/Home";
import DashboardLayout from "@/layout/layout";
import Kanban from "@/Kanban/Kanban";
import { createBrowserRouter } from "react-router-dom";
import NotFound from "@/pages/not-found";
import Members from "@/pages/Members";
import { EmployeeTable } from "@/components/tables/members-tables/member-table";
import Calendar from "@/Calendar/Calendar";
import NewMember from "@/pages/NewMember";
import AuthPage from "@/Auth/Auth";

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
        element: <Members />,
      },
      {
        path: "members/new",
        element: <NewMember />,
      },
      {
        path: "members/:id",
        element: <NewMember />,
      },
      {
        path: "kanban",
        element: <Kanban />,
      },
      {
        path: "calendar",
        element: <Calendar />,
      },
    ],
    errorElement: <NotFound />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
