import { useParams } from "react-router-dom";

import { MemberPdf } from "@/features/members/components";

export function MemberPdfPage() {
	const { id } = useParams();
	return <MemberPdf id={id} bank={false} />;
}
