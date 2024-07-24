import { Link } from "react-router-dom";
import type { LinkPdfProps } from "@/features/members/types";

export const LinkPdf = ({ id }: LinkPdfProps) => {
	return (
		<>
			<Link to={`members/pdf/${id}`}>Ver Pdf</Link>
		</>
	);
};
