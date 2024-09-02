import { Link } from "react-router-dom";
import { AssigmentTable } from "../components/assigment-table/assigments-table.components";
import { useGetAssigment } from "../hooks";
import {
  buttonVariants,
  Heading,
  Separator,
} from "@/features/core/components/ui";
import { Plus } from "lucide-react";
import { cn } from "@/features/core/lib/utils";

export function AssigmentsPage() {
  const { assigment } = useGetAssigment();
  const title = "Cesiones";
  const description = "Gestiona las cesiones de materiales y aulas";
  return (
    <>
      <div className="flex items-start justify-between">
        <Heading title={title} description={description} />

        <Link
          to="/dashboard/members"
          className={cn(buttonVariants({ variant: "default" }))}>
          <Plus className="mr-2 h-4 w-4" /> Crear Socio
        </Link>
      </div>
      <Separator />
      <p className="text-2xl font-bold ">Lista de Cesiones</p>
      <AssigmentTable data={assigment} />
    </>
  );
}
