// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
import { Link, useLocation } from "react-router-dom";
import { Icons } from "@/features/core/components/icons";
import { cn } from "@/features/core/lib/utils";
import { NavItem } from "@/features/core/types";
import { Dispatch, SetStateAction } from "react";
import { useSidebar } from "@/features/core/hooks/useSidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/features/core/components/ui/tooltip";
import { useAuthStore } from "@/features/auth/stores";
import { ValidRoles } from "@/features/auth/types";

interface DashboardNavProps {
  items: NavItem[];
  setOpen?: Dispatch<SetStateAction<boolean>>;
  isMobileNav?: boolean;
}

export function DashboardNav({
  items,
  setOpen,
  isMobileNav = false,
}: DashboardNavProps) {
  // const path = usePathname();
  const userRole = useAuthStore((state) => state.userRole) || [];

  const location = useLocation();
  const path = location.pathname;
  const { isMinimized } = useSidebar();

  if (!items?.length) {
    return null;
  }

  console.log("isActive", isMobileNav, isMinimized);

  return (
    <nav className="grid items-start gap-2">
      <TooltipProvider>
        {items.map((item) => {
          const isVisible =
            userRole.includes(ValidRoles.admin) ||
            !item.validRole ||
            item.validRole.some((role) => userRole.includes(role));

          const Icon = Icons[item.icon || "arrowRight"];
          return (
            isVisible && (
              <Tooltip key={Symbol(item.title).description}>
                <TooltipTrigger asChild>
                  <Link
                    to={item.disabled ? "/" : item.href ?? "#"}
                    className={cn(
                      "flex items-center gap-2 overflow-hidden rounded-md py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                      path === item.href ? "bg-accent" : "transparent",
                      item.disabled && "cursor-not-allowed opacity-80"
                    )}
                    onClick={(e) => {
                      item.onClick?.(e);
                      setOpen?.(false);
                    }}>
                    <Icon className="ml-3 size-5" />

                    {isMobileNav || (!isMinimized && !isMobileNav) ? (
                      <span className="mr-2 truncate">{item.title}</span>
                    ) : (
                      ""
                    )}
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  align="center"
                  side="right"
                  sideOffset={8}
                  className={!isMinimized ? "hidden" : "inline-block"}>
                  {item.title}
                </TooltipContent>
              </Tooltip>
            )
          );
        })}
      </TooltipProvider>
    </nav>
  );
}
