import { MemberForm } from "../components/MemberForm";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function NewMember() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-8">
        <MemberForm initialData={null} key={null} />
      </div>
    </ScrollArea>
  );
}
