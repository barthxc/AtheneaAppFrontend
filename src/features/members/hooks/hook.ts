import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  MemberService,
  type FetchMembersParams,
  type MembersResponseNew,
} from "@/features/members/services/member.service";
import { ErrorService } from "@/features/error/service";
import { ERROR_MESSAGES } from "@/features/error/constants";
import { MembersApiFactory } from "./members.factory";
export interface UseMembersProps {
  filters: {
    name?: string;
    lastName?: string;
    identificationNumber?: string;
    memberNumber?: string;
    status?: string;
  };
  currentPage: number;
}

const usePaginatedMembers = (params: UseMembersProps) => {
  // const client = useQueryClient();

  const { data, isError, isFetching, isLoading, error, refetch } = useQuery({
    ...MembersApiFactory.paginatedMembers(params),
    staleTime: 1000 * 60 * 5,
    retry: false,
  });
  // const {}= useMutation({
  //   mutationFn:()=>1,
  //   onMutate: ()=>{
  //     client.invalidateQueries({
  //       queryKey:MembersApiFactory.paginatedMembers._def
  //     })
  //   },
  // })
  const errorMessage = isError
    ? ErrorService.handleError(
        (error as any)?.statusCode,
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
    refetch,
  };
};

const useMemberById = (id: string) => {
  const { data, isError, isFetching, isLoading, error, refetch } = useQuery({
    ...MembersApiFactory.getMemberById(id),
    staleTime: 1000 * 60 * 5,
    retry: false,
  });

  const errorMessage = isError
    ? ErrorService.handleError(
        (error as any)?.statusCode,
        ERROR_MESSAGES.MEMBER.FIND_ALL
      )
    : null;

  return {
    data,
    isError,
    isFetching,
    isLoading,
    error,
    errorMessage,
    refetch,
  };
};

export { usePaginatedMembers, useMemberById };
