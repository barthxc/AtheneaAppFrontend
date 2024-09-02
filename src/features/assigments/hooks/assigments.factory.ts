import { createQueryKeys } from "@lukemorales/query-key-factory";
import { AssigmentService } from "@/features/assigments/services";
export const AssigmentApiFactory = createQueryKeys("assigments", {
  getAssigments: () => ({
    queryKey: ["getAssigments"],
    queryFn: () => AssigmentService.getAssigments(),
  }),
});
