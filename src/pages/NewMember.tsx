import { MemberForm } from "@/components/forms";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function NewMember() {
	return (
		<ScrollArea className="h-full">
			<div className="flex-1 space-y-4 p-8">
				<MemberForm
					roles={[
						{ _id: "admin", name: "Administrador" },
						{ _id: "editor", name: "Editor" },
					]}
					initialData={null}
					key={null}
				/>
			</div>
		</ScrollArea>
	);
}
