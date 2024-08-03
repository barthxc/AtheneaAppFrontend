import { useEffect, useState } from "react";
import { Trash } from "lucide-react";

import { ConfirmModal } from "@/features/core/components/modal";
import { Button, useToast } from "@/features/core/components/ui";

import { useDeleteEventCaldendar } from "@/features/calendar/hooks/hook";
import type { CalendarTableCellActionProps } from "@/features/calendar/types";

export const CalendarTableCellAction: React.FC<
  CalendarTableCellActionProps
> = ({ data }) => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const {
    mutate: deleteEvent,
    isPending,
    isSuccess,
  } = useDeleteEventCaldendar();

  const handleDelete = async () => {
    deleteEvent(data.id);
  };

  useEffect(() => {
    if (isSuccess) {
      toast({
        description: "Socio eliminado correctamente.",
        variant: "default",
      });
    }
    setOpen(false);
  }, [toast, isSuccess]);

  return (
    <>
      <ConfirmModal
        title="¿Estás seguro que deseas eliminar este evento?"
        description="Una vez eliminado no se puede recuperar."
        confirmButtonLabel="Eliminar fecha"
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={handleDelete}
        isDisabled={isPending}
        variant="destructive"
      />

      <div className="flex flex-row gap-4">
        <Button variant="destructive" onClick={() => setOpen(true)}>
          <Trash className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
};
