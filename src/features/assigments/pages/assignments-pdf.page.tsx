import { useParams } from "react-router-dom";
import { AssignmentPdf } from "@/features/assigments/components";

export function AssignmentsPdfPage() {
	const { id } = useParams();
	return <AssignmentPdf id={id} />;
}
