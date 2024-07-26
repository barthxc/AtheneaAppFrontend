// import { RecentSales } from "@/features/core/components/recent-sales";
// import { Overview } from "@/features/core/components/overview";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/features/core/components/ui";
import { EmailForm } from "@/features/email/components/email-form.component";
import MembersInfo from "@/features/members/components/members-info/members-info.component";

export function HomePage() {
  // const { getMetaDataMember } = useMemberFuncstion();

  // useEffect(() => {
  //   const { membersinpara, members, meberpereyars } = getMetaDataMember();
  // }, [getMetaDataMember]);

  return (
    <section>
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight pb-2">
          Hola, Bienvenido 👋
        </h2>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Panel Informativo</TabsTrigger>
          <TabsTrigger value="analytics">Análisis</TabsTrigger>
          <TabsTrigger value="contact">Contacto</TabsTrigger>
          <TabsTrigger value="admin" disabled>
            Admin
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <MembersInfo />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">{/* <Overview /> */}</CardContent>
            </Card>
            <Card className="col-span-4 md:col-span-3">
              <CardHeader>
                <CardTitle>Donaciones</CardTitle>
                <CardDescription>
                  Registro de Donaciones de la página web
                </CardDescription>
              </CardHeader>
              <CardContent>{/* <RecentSales /> */}</CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="analytics" />
        <TabsContent value="contact">
          <EmailForm />
        </TabsContent>
        <TabsContent value="admin">
          <p>Button descargar base de datos</p>
        </TabsContent>
      </Tabs>
    </section>
  );
}
