import { ScrollArea } from "@/features/core/components/ui";

import { MemberForm } from "@/features/members/components";

export function MemberNewPage() {
	return (
		<ScrollArea className="h-full">
			<div className="flex-1 space-y-4 p-8">
				<MemberForm initialData={null} key={null} />
			</div>
		</ScrollArea>
	);
}
