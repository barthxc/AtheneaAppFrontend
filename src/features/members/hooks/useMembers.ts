import { useQuery } from "@tanstack/react-query";
import {
  MemberService,
  type FetchMembersParams,
  type MembersResponseNew,
} from "@/features/members/services/member.service";
import { ErrorService } from "@/features/error/service";
import { ERROR_MESSAGES } from "@/features/error/constants";

interface UseMembersProps {
  filters: {
    name?: string;
    lastName?: string;
    identificationNumber?: string;
    memberNumber?: string;
    status?: string;
  };
  currentPage: number;
}

const useMembers = ({ filters, currentPage }: UseMembersProps) => {
  const { data, isError, isFetching, isLoading } = useQuery<MembersResponseNew>(
    {
      queryKey: ["getMembers", filters, currentPage],
      queryFn: () =>
        MemberService.getAllMembers({
          ...filters,
          page: currentPage,
          take: 10,
        }),
      staleTime: 1000 * 60 * 5,
      retry: false,
    }
  );

  const errorMessage = isError
    ? ErrorService.handleError(
        error?.statusCode,
        ERROR_MESSAGES.MEMBER.FIND_ALL
      )
    : null;

  return {
    members: data?.members || [],
    totalPages: data?.pagination.pageCount || 1,
    currentPage: data?.pagination.page || 1,
    hasNextPage: data?.pagination.hasNextPage || false,
    hasPreviousPage: data?.pagination.hasPreviousPage || false,
    isError,
    isLoading,
    errorMessage,
    isFetching,
  };
};

export default useMembers;
