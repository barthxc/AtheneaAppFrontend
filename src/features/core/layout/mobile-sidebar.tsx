"use client";
import { DashboardNav } from "@/features/core/components/dashboard-nav";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/features/core/components/ui/sheet";
import { navItems, visitortNavItems } from "@/features/core/constants/data";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { Separator } from "@/features/core/components/ui";
import { useLocation } from "react-router-dom";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function MobileSidebar({ className }: SidebarProps) {
  const location = useLocation();
  const path = location.pathname;
  const isLanding = !path.startsWith("/dashboard");
  const [open, setOpen] = useState(false);

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent side="left" className="!px-0">
          <div className="space-y-4 py-4">
            <div className="px-3 py-2">
              <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                Navegación
              </h2>
              <Separator />
              <div className="space-y-1">
                <DashboardNav
                  items={isLanding ? visitortNavItems : navItems}
                  isMobileNav={true}
                  setOpen={setOpen}
                />
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
