import { MemberService } from "../services";
import type { UseMembersProps } from "./hook";
import { createQueryKeys } from "@lukemorales/query-key-factory";
export const MembersApiFactory = createQueryKeys("members", {
  paginatedMembers: ({ filters, currentPage }: UseMembersProps) => ({
    queryKey: ["getAllMembers", filters, currentPage],
    queryFn: () =>
      MemberService.getAllMembers({
        ...filters,
        page: currentPage,
        take: 10,
      }),
  }),

  getMemberById: (id: string) => ({
    queryKey: ["getMemberById"],
    queryFn: () => MemberService.getMember(id),
  }),
});
