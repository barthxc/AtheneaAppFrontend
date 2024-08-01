import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/features/core/components/ui";
import { Spinner } from "@/features/core/components/ui";
import { useMembersInfo, useRefreshMembersInfo } from "../../hooks/hook";

const MembersInfo = () => {
  const { data, isError, isLoading } = useMembersInfo();
  const {
    mutate: refreshMembersInfo,
    isPending,
    isError: isErrorRefresh,
  } = useRefreshMembersInfo();

  const handleRefreshMembersIndo = () => {
    refreshMembersInfo();
  };

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Socios Totales
            </CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground">
              <title>Icono Socios Totales</title>
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {isLoading || isPending ? <Spinner /> : data?.totalMembers}
              {isError && !data?.membersPerYears && "NULL"}
            </div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Socios Activos
            </CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground">
              <title>Icono Socios Activos</title>
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {isLoading || isPending ? <Spinner /> : data?.activeMembers}
              {isError && !data?.membersPerYears && "NULL"}
            </div>
            <p className="text-xs text-muted-foreground">
              +180.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Socios Sin Pagar
            </CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground">
              <title>Icono Socios Sin Pagar</title>
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <path d="M2 10h20" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {isLoading || isPending ? <Spinner /> : data?.membersNoPay}
              {isError && !data?.membersNoPay && "NULL"}
            </div>
            <p className="text-xs text-muted-foreground">
              +19% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Socios Por Año
            </CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground">
              <title>Icono Socios Por Año</title>
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {isLoading || isPending ? <Spinner /> : data?.membersPerYears}
              {isError && !data?.membersPerYears && "NULL"}
            </div>
            <p className="text-xs text-muted-foreground">
              +201 since last hour
            </p>
          </CardContent>
        </Card>
      </div>
      <div
        //TODO - no funciona como debería D:
        className={`flex ${
          isError || isErrorRefresh ? "justify-between" : "justify-end"
        } mt-4`}>
        {isError ||
          (isErrorRefresh && (
            <p className="text-red-400 font-bold">Error al cargar los datos</p>
          ))}
        <Button onClick={handleRefreshMembersIndo}>Actualizar</Button>
      </div>
    </>
  );
};

export default MembersInfo;
