import React, { useEffect, useState } from "react";
import { columns } from "@/components/tables/members-tables/columns";
import EmployeeTable from "@/components/tables/members-tables/member-table";
import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Employee } from "@/constants/data";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { Link, useParams } from "react-router-dom";

interface MembersProps {
  // Add any other props you need
}

const Members: React.FC<MembersProps> = () => {
  const {
    page = "1",
    limit = "10",
    search,
  } = useParams<{
    page?: string;
    limit?: string;
    search?: string;
  }>();

  const [employee, setEmployee] = useState<Employee[]>([]);
  const [totalUsers, setTotalUsers] = useState<number>(0);
  const [pageCount, setPageCount] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const pageValue = Number(page);
      const limitValue = Number(limit);
      const offset = (pageValue - 1) * limitValue;

      try {
        const res = await fetch(
          `https://api.slingacademy.com/v1/sample-data/users?offset=${offset}&limit=${limitValue}` +
            (search ? `&search=${search}` : "")
        );
        const employeeRes = await res.json();
        const totalUsersValue = employeeRes.total_users; //1000
        const pageCountValue = Math.ceil(totalUsersValue / limitValue);
        const employeeData: Employee[] = employeeRes.users;

        setEmployee(employeeData);
        setTotalUsers(totalUsersValue);
        setPageCount(pageCountValue);
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }
    };

    fetchData();
  }, [page, limit, search]);

  return (
    <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
      <div className="flex items-start justify-between">
        <Heading
          title={`Socios (${totalUsers})`}
          description="Manage employees (Server side table functionalities.)"
        />

        <Link
          to={"/dashboard/members/new"}
          className={cn(buttonVariants({ variant: "default" }))}>
          <Plus className="mr-2 h-4 w-4" /> Crear Socio
        </Link>
      </div>
      <Separator />

      <EmployeeTable
        searchKey="country"
        pageNo={Number(page)}
        columns={columns}
        totalUsers={totalUsers}
        data={employee}
        pageCount={pageCount}
      />
    </div>
  );
};

export default Members;
