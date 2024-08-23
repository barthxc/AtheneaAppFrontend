import { useState } from "react";
import { ChevronLeft } from "lucide-react";

import { cn } from "@/features/core/lib/utils";
import {
  ConfirmModal,
  DashboardNav,
  type SidebarProps,
} from "@/features/core/components";
import { navItems } from "@/features/core/constants";
import { useSidebar } from "@/features/core/hooks";

export const Sidebar = ({ className }: SidebarProps) => {
  const { isMinimized, toggle } = useSidebar();
  const [status, setStatus] = useState(false);
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setStatus(true);
    toggle();
    setTimeout(() => setStatus(false), 500);
  };

  const handleLogout = async () => {
    console.log("logout");
  };

  return (
    <nav
      className={cn(
        "relative hidden h-screen flex-none border-r z-10 pt-20 md:block",
        status && "duration-500",
        !isMinimized ? "w-72" : "w-[72px]",
        className
      )}>
      <ConfirmModal
        title="¿Estás seguro que deseas eliminar este evento?"
        description="Una vez eliminado no se puede recuperar."
        confirmButtonLabel="Eliminar fecha"
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={handleLogout}
        variant="destructive"
      />
      <ChevronLeft
        className={cn(
          "absolute -right-3 top-20 cursor-pointer rounded-full border bg-background text-3xl text-foreground",
          isMinimized && "rotate-180"
        )}
        onClick={handleToggle}
      />
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="mt-3 space-y-1">
            <DashboardNav items={navItems} />
          </div>
        </div>
      </div>
    </nav>
  );
};
