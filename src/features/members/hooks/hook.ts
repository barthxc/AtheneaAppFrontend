import {
  useQuery,
  useMutation,
  QueryClient,
  useQueryClient,
} from "@tanstack/react-query";
import {
  MemberService,
  type FetchMembersParams,
  type MembersResponseNew,
} from "@/features/members/services/member.service";
import { ErrorService } from "@/features/error/service";
import { ERROR_MESSAGES } from "@/features/error/constants";
import { MembersApiFactory } from "./members.factory";
import { MemberFormValues } from "../types";
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
  const { data, isError, isFetching, isLoading, error, refetch } = useQuery({
    ...MembersApiFactory.paginatedMembers(params),
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

const useCreateMember = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (member: MemberFormValues) => MemberService.createMember(member),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: MembersApiFactory.paginatedMembers._def,
      });
      queryClient.invalidateQueries({
        queryKey: MembersApiFactory.getMemberById._def,
      });
    },
    onError: (error) => {
      console.error(
        ErrorService.handleError(
          (error as any)?.statusCode,
          ERROR_MESSAGES.MEMBER.CREATE
        )
      );
    },
  });

  return {
    ...mutation,
    errorMessage: mutation.isError
      ? ErrorService.handleError(
          (mutation.error as any)?.statusCode,
          ERROR_MESSAGES.MEMBER.CREATE
        )
      : null,
  };
};

const useUpdateMember = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ member, id }: { member: MemberFormValues; id: string }) =>
      MemberService.updateMember(member, id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: MembersApiFactory.paginatedMembers._def,
      });
      queryClient.invalidateQueries({
        queryKey: MembersApiFactory.getMemberById._def,
      });
    },

    onError: (error) => {
      console.error(
        ErrorService.handleError(
          (error as any)?.statusCode,
          ERROR_MESSAGES.MEMBER.CREATE
        )
      );
    },
  });

  return {
    ...mutation,
    errorMessage: mutation.isError
      ? ErrorService.handleError(
          (mutation.error as any)?.statusCode,
          ERROR_MESSAGES.MEMBER.CREATE
        )
      : null,
  };
};

export { usePaginatedMembers, useMemberById, useCreateMember, useUpdateMember };
