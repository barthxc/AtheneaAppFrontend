import { ScrollArea, Toaster } from "@/features/core/components/ui";
import Header from "@/features/core/layout/header";
import { Outlet } from "react-router-dom";
export function LandingLayout() {
  return (
    <>
      <Toaster />
      <Header />
      <div className="flex h-screen overflow-hidden">
        <main className="flex-1 overflow-hidden pt-14">
          <ScrollArea className="h-full">
            <div className="space-y-4 p-8 h-[calc(100vh-3.5rem)]">
              <Outlet />
            </div>
          </ScrollArea>
        </main>
      </div>
    </>
  );
}
