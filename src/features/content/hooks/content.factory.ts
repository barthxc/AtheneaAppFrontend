import { createQueryKeys } from "@lukemorales/query-key-factory";
import { ContentService } from "@/features/content/services";
export const ContentsApiFactory = createQueryKeys("contents", {
  getContents: () => ({
    queryKey: ["getContents"],
    queryFn: () => ContentService.getContents(),
  }),
});
