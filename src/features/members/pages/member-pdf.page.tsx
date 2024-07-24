import { ScrollArea } from "@/features/core/components/ui";

import { MemberPdf } from "@/features/members/components/member-pdf/member-pdf.component";
import { useParams } from "react-router-dom";

export function MemberPdfPage() {
  const { id } = useParams();
  console.log(id);
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-8">
        <MemberPdf id={id} />
      </div>
    </ScrollArea>
  );
}
