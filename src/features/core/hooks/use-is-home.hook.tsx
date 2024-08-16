import { useLocation } from "react-router-dom";

export const useIsHome = () => {
	return useLocation().pathname === "/";
};
