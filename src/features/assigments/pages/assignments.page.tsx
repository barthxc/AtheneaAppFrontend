import { Link, useNavigate } from "react-router-dom";
import { AssigmentTable } from "../components/assigment-table/assigments-table.components";
import { useGetAssigment } from "../hooks";
import { buttonVariants, Heading, Separator, useToast } from "@/features/core/components/ui";
import { Plus } from "lucide-react";
import { cn } from "@/features/core/lib/utils";

export function AssignmentsPage() {
	const { assigment } = useGetAssigment();
	const title = "Cesiones";
	const description = "Gestiona las cesiones de materiales y aulas";
	const { toast } = useToast();
	const navigate = useNavigate();

	const showSelectMemberMessage = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		toast({
			description: "Presiona en el botón de ceder para crear una cesión",
		});
		navigate("/dashboard/members");
	};

	return (
		<>
			<div className="flex items-start justify-between">
				<Heading title={title} description={description} />

				<Link
					to="/dashboard/members"
					className={cn(buttonVariants({ variant: "default" }))}
					onClick={showSelectMemberMessage}>
					<Plus className="mr-2 h-4 w-4" /> Crear Cesión
				</Link>
			</div>
			<Separator />
			<p className="text-2xl font-bold">Lista de Cesiones</p>
			<AssigmentTable data={assigment} />
		</>
	);
}
