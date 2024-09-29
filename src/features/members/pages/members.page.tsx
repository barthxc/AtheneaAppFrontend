import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";

import { cn } from "@/features/core/lib/utils";
import { capitalizeString } from "@/features/core/utils";
import { LoadingView } from "@/features/core/components";
import {
	Button,
	buttonVariants,
	Heading,
	Input,
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
	Separator,
	useToast,
} from "@/features/core/components/ui";

import { MemberStatus } from "@/features/members/types";
import { MemberTable } from "@/features/members/components";
import { useMemberPaginationInfo, useMemberTableMethods, usePaginatedMembers } from "@/features/members/hooks";

export function MembersPage() {
	const { toast } = useToast();
	const { filters, currentPage, handleFiltersChange, handleSelectChange, handlePageChange, handleSearch } =
		useMemberTableMethods();
	const { members, totalPages, hasPreviousPage, hasNextPage, isError, isLoading, errorMessage, isFetching } =
		usePaginatedMembers({
			filters,
			currentPage,
		});
	const { isPreviousDisabled, isNextDisabled } = useMemberPaginationInfo({ members, hasPreviousPage, hasNextPage });

	useEffect(() => {
		if (isError && errorMessage) {
			toast({
				description: errorMessage,
				variant: "destructive",
			});
		}
	}, [isError, errorMessage, toast]);

	return (
		<section>
			<div className="flex items-start justify-between">
				<Heading title="Socios" description="Consulta la lista de socios" />

				<Link to="/dashboard/members/new" className={cn(buttonVariants({ variant: "default" }))}>
					<Plus className="mr-2 h-4 w-4" /> Crear Socio
				</Link>
			</div>
			<Separator className="my-4" />

			<div className="flex flex-row flex-wrap items-center gap-5 mb-5 w-full">
				<Input
					name="name"
					placeholder="Nombre"
					value={filters.name || ""}
					onChange={handleFiltersChange}
					className="max-w-44"
				/>
				<Input
					name="lastName"
					placeholder="Apellido"
					value={filters.lastName || ""}
					onChange={handleFiltersChange}
					className="max-w-44"
				/>
				<Input
					name="identificationNumber"
					placeholder="DNI"
					value={filters.identificationNumber || ""}
					onChange={handleFiltersChange}
					className="max-w-44"
				/>
				<Input
					name="memberNumber"
					placeholder="Número de Socio"
					value={filters.memberNumber || ""}
					onChange={handleFiltersChange}
					className="max-w-44"
				/>
				<Select name="status" value={filters.status} onValueChange={handleSelectChange}>
					<SelectTrigger className="max-w-28">
						<SelectValue placeholder="Estado" />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectItem value="default">Ninguno</SelectItem>
							{Object.values(MemberStatus).map((status) => (
								<SelectItem key={status} value={status}>
									{capitalizeString(status)}
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
				<Button onClick={handleSearch}>Buscar</Button>
			</div>

			<LoadingView isLoading={isLoading && !members.length}>
				<MemberTable
					data={members}
					onPageChange={(newPage) => handlePageChange(newPage, totalPages)}
					currentPage={currentPage}
					hasNextPage={hasNextPage}
					isFetchingNextPage={isFetching}
					isPreviousDisabled={isPreviousDisabled}
					isNextDisabled={isNextDisabled}
					totalPage={totalPages}
				/>
			</LoadingView>
		</section>
	);
}

export default MembersPage;
