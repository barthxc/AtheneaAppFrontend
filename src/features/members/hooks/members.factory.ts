import { MemberService } from "@/features/members/services";
import type { UseMembersProps } from "@/features/members/types";
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

  paginatedMembersNoPay: ({ filters, currentPage }: UseMembersProps) => ({
    queryKey: ["getMembersNoPay", filters, currentPage],
    queryFn: () =>
      MemberService.getMembersNoPay({
        ...filters,
        page: currentPage,
        take: 10,
      }),
  }),

  paginatedMembersExitu: ({ filters, currentPage }: UseMembersProps) => ({
    queryKey: ["getMembersNoPay", filters, currentPage],
    queryFn: () =>
      MemberService.getMembersExitu({
        ...filters,
        page: currentPage,
        take: 10,
      }),
  }),

  getMemberById: (id: string) => ({
    queryKey: ["getMemberById", id],
    queryFn: () => MemberService.getMember(id),
  }),

  getPdfById: (id: string) => ({
    queryKey: ["getPdfById", id],
    queryFn: () => MemberService.getPDFMemberById(id),
  }),
  getPdfBank: () => ({
    queryKey: ["getPdfBank"],
    queryFn: () => MemberService.getPDFMembersBank(),
  }),
  membersInfo: () => ({
    queryKey: ["membersInfo"],
    queryFn: () => MemberService.membersInfo(),
  }),
});
