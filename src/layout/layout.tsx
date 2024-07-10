import Header from "./header";
import Sidebar from "./sidebar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <>
      <Header />
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-hidden pt-16">
          <Outlet />
        </main>
      </div>
    </>
  );
}
