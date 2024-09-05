import { useEffect, useState } from "react";
import { Edit, Trash, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { ConfirmModal } from "@/features/core/components/modal";
import { Button, useToast } from "@/features/core/components/ui";

import { useDeleteEventCaldendar } from "@/features/calendar/hooks";
import type { AssigmentResponse } from "../../services";

export interface AssigmentTableCellActionProps {
  data: AssigmentResponse;
}

export const AssigmentTableCellAction: React.FC<
  AssigmentTableCellActionProps
> = ({ data }) => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

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
        title="¿Estás seguro que deseas eliminar esta cesión?"
        description="Una vez eliminado no se puede recuperar."
        confirmButtonLabel="Eliminar cesión"
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={handleDelete}
        isDisabled={isPending}
        variant="destructive"
      />

      <div className="flex flex-row gap-4">
        <Button onClick={() => navigate(`/dashboard/members/${data.id}/edit`)}>
          <Edit className="h-4 w-4" />
        </Button>
        <Button onClick={() => navigate(`/dashboard/assigment/pdf/${data.id}`)}>
          <Eye className="h-4 w-4" />
        </Button>
        <Button variant="destructive" onClick={() => setOpen(true)}>
          <Trash className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
};
