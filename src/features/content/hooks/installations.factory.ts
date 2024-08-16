import { InstallationsService } from "@/features/content/services";
import { createQueryKeys } from "@lukemorales/query-key-factory";
export const InstallationsApiFactory = createQueryKeys("installations", {
  getColaborators: () => ({
    queryKey: ["getInstallations"],
    queryFn: () => InstallationsService.getInstallations(),
  }),
});
