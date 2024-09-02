import { useParams } from "react-router-dom";
import { AssigmentPdf } from "@/features/assigments/components";

export function AssigmentPdfPage() {
  const { id } = useParams();
  return <AssigmentPdf id={id} />;
}
