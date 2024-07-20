import { CalendarForm } from "./components/CalendarForm";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Calendar() {
  return (
    <>
      <ScrollArea className="h-full">
        <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
          <CalendarForm initialData={null} key={null} />
        </div>
      </ScrollArea>
    </>
  );
}
