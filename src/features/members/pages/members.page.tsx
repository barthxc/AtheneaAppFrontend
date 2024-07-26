import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";

import { cn } from "@/features/core/lib/utils";
import {
  buttonVariants,
  Heading,
  Separator,
  useToast,
} from "@/features/core/components/ui";

import { ERROR_MESSAGES } from "@/features/error/constants";

import { ErrorService } from "@/features/error/service";
import { useMemberStore } from "@/features/members/stores";
import { memberColumns, MemberTable } from "@/features/members/components";
import LoadingView from "@/features/core/components/loading-view.component";

export function MembersPage() {
  // const { page = "1", limit = "10", search } = useParams<{ page?: string; limit?: string; search?: string }>();
  // const [employee, setEmployee] = useState<Employee[]>([]);
  // const [totalUsers, setTotalUsers] = useState<number>(0);
  // const [pageCount, setPageCount] = useState<number>(0);
  const [pending, setPending] = useState<boolean>(true);
  const { members, getMembers } = useMemberStore();
  const { toast } = useToast();

  useEffect(() => {
    (async () => {
      // const pageValue = Number(page);
      // const limitValue = Number(limit);
      // const offset = (pageValue - 1) * limitValue;

      try {
        const res = await getMembers();
        console.log({ res });
        // const employeeRes = await res.json();
        // const totalUsersValue = employeeRes.total_users; //1000
        // const pageCountValue = Math.ceil(totalUsersValue / limitValue);
        // const employeeData: Employee[] = employeeRes.users;

        // setEmployee(employeeData);
        // setTotalUsers(totalUsersValue);
        // setPageCount(pageCountValue);
      } catch (err: any) {
        const errorMessage = ErrorService.handleError(
          err.statusCode,
          ERROR_MESSAGES.MEMBER.FIND_ALL
        );
        toast({
          description: errorMessage,
          variant: "destructive",
        });
      } finally {
        setPending(false);
      }
    })();
  }, [getMembers, toast]);

  useEffect(() => {
    console.log("MEMBERS", members);
  }, [members]);

  return (
    <section>
      <div className="flex items-start justify-between">
        <Heading
          title={`Socios (${members.length})`}
          description="Consulta la lista de socios"
        />

        <Link
          to={"/dashboard/members/new"}
          className={cn(buttonVariants({ variant: "default" }))}>
          <Plus className="mr-2 h-4 w-4" /> Crear Socio
        </Link>
      </div>
      <Separator className="my-4" />

      <LoadingView isLoading={pending && members.length === 0}>
        <MemberTable
          columns={memberColumns}
          data={members}
          searchLabel="Buscar por N° de Socio"
          searchProperty="memberNumber"
          pageNo={0}
          pageCount={3}
          totalMembers={members.length}
        />
      </LoadingView>
    </section>
  );
}
