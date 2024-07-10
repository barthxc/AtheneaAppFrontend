import { ProductForm } from "@/components/forms/product-form";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function NewMember() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-8">
        <ProductForm
          categories={[
            { _id: "shirts", name: "shirts" },
            { _id: "pants", name: "pants" },
          ]}
          initialData={null}
          key={null}
        />
      </div>
    </ScrollArea>
  );
}
