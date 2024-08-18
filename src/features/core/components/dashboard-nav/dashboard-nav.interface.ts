import type { Dispatch, SetStateAction } from "react";
import type { NavItem } from "@/features/core/types";

export interface DashboardNavProps {
	items: NavItem[];
	setOpen?: Dispatch<SetStateAction<boolean>>;
	isMobileNav?: boolean;
}
