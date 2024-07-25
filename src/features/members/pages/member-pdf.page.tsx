import { useParams } from "react-router-dom";

import { ScrollArea } from "@/features/core/components/ui";

import { MemberPdf } from "@/features/members/components";

export function MemberPdfPage() {
	const { id } = useParams();
	return (
		<ScrollArea className="h-full">
			<div className="flex-1 space-y-4 p-8">
				<MemberPdf id={id} bank={false} />
			</div>
		</ScrollArea>
	);
}
