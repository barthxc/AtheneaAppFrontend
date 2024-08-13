import { Toaster } from "@/features/core/components/ui";
import { Outlet } from "react-router-dom";
import { Footer } from "@/features/landing/components";
import { Navbar } from "@/features/landing/components";

export function LandingLayout() {
  return (
    <>
      <Toaster />
      <div className="min-h-screen bg-[#094074]">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
