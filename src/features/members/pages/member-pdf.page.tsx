import { ScrollArea } from "@/features/core/components/ui";

import { MemberPdf } from "@/features/members/components/member-pdf/member-pdf.component";

export function MemberPdfPage() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-8">
        <MemberPdf />
      </div>
    </ScrollArea>
  );
}
