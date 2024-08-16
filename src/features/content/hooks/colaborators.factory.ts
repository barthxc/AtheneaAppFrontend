import { createQueryKeys } from "@lukemorales/query-key-factory";
import { ColaboratorsService } from "@/features/content/services";
export const ColaboratorsApiFactory = createQueryKeys("colaborators", {
  getColaborators: () => ({
    queryKey: ["getColaborators"],
    queryFn: () => ColaboratorsService.getColaborators(),
  }),
});
