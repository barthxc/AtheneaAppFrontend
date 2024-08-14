import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { MemberService } from "@/features/members/services/member.service";
import { ErrorService } from "@/features/error/service";
import { ERROR_MESSAGES } from "@/features/error/constants";
import { MembersApiFactory } from "@/features/members/hooks";
import type {
  MemberFormValues,
  UseMemberPaginationInfoProps,
} from "@/features/members/types";
import { useToast } from "@/features/core/components/ui";
import { useNavigate } from "react-router-dom";
import type { UseMembersProps } from "@/features/members/types";
import { useEffect, useState } from "react";

/* TODO: Use only one hook if its possible */
const usePaginatedMembers = (params: UseMembersProps) => {
  const { data, isError, isFetching, isLoading, error } = useQuery({
    ...MembersApiFactory.paginatedMembers(params),
    staleTime: 1000 * 60 * 5,
    retry: false,
    refetchOnWindowFocus: false,
  });

  const errorMessage =
    isError &&
    ErrorService.handleError(
      (error as any)?.statusCode,
      ERROR_MESSAGES.MEMBER.FIND_ALL
    );

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

const usePaginatedMembersNoPay = (params: UseMembersProps) => {
  const { data, isError, isFetching, isLoading, error } = useQuery({
    ...MembersApiFactory.paginatedMembersNoPay(params),
    staleTime: 1000 * 60 * 5,
    retry: false,
    refetchOnWindowFocus: false,
  });

  const errorMessage =
    isError &&
    ErrorService.handleError(
      (error as any)?.statusCode,
      ERROR_MESSAGES.MEMBER.FIND_ALL
    );

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

const usePaginatedMembersExitu = (params: UseMembersProps) => {
  const { data, isError, isFetching, isLoading, error } = useQuery({
    ...MembersApiFactory.paginatedMembersExitu(params),
    staleTime: 1000 * 60 * 5,
    retry: false,
    refetchOnWindowFocus: false,
  });

  const errorMessage =
    isError &&
    ErrorService.handleError(
      (error as any)?.statusCode,
      ERROR_MESSAGES.MEMBER.FIND_ALL
    );

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

const useMemberById = (id: string) => {
  const { data, isError, isFetching, isLoading, error } = useQuery({
    ...MembersApiFactory.getMemberById(id),
    staleTime: 1000 * 60 * 5,
    retry: false,
    refetchOnWindowFocus: false,
  });

  return {
    data,
    isError,
    isFetching,
    isLoading,
    error,
  };
};

const useMembersInfo = () => {
  const { data, isError, isFetching, isLoading, error } = useQuery({
    ...MembersApiFactory.membersInfo(),
    staleTime: 1000 * 60 * 60,
    retry: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  const errorMessage =
    isError &&
    ErrorService.handleError(
      (error as any)?.statusCode,
      ERROR_MESSAGES.MEMBERS_INFO.GET_STATISTICS
    );

  return {
    data,
    isError,
    isFetching,
    isLoading,
    error,
    errorMessage,
  };
};

const usePdfById = (id: string) => {
  const { data, isError, isFetching, isLoading, error } = useQuery({
    ...MembersApiFactory.getPdfById(id),
    staleTime: 1000 * 60 * 5,
    retry: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  const errorMessage =
    isError &&
    ErrorService.handleError(
      (error as any)?.statusCode,
      ERROR_MESSAGES.MEMBER.GET_PDF_BY_ID
    );

  return {
    data,
    isError,
    isFetching,
    isLoading,
    error,
    errorMessage,
  };
};

const usePdfBank = () => {
  const { data, isError, isFetching, isLoading, error } = useQuery({
    ...MembersApiFactory.getPdfBank(),
    staleTime: 1000 * 60 * 5,
    retry: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  const errorMessage =
    isError &&
    ErrorService.handleError(
      (error as any)?.statusCode,
      ERROR_MESSAGES.MEMBER.GET_PDF_PAYMENT_METHOD_BANK
    );

  return {
    data,
    isError,
    isFetching,
    isLoading,
    error,
    errorMessage,
  };
};

const useCreateMember = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: (member: MemberFormValues) =>
      MemberService.createMember(member),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: MembersApiFactory.paginatedMembers._def,
      });
      queryClient.invalidateQueries({
        queryKey: MembersApiFactory.getMemberById._def,
      });
      queryClient.invalidateQueries({
        queryKey: MembersApiFactory.getPdfById._def,
      });
      queryClient.invalidateQueries({
        queryKey: MembersApiFactory.getPdfBank._def,
      });
      queryClient.invalidateQueries({
        queryKey: MembersApiFactory.paginatedMembersNoPay._def,
      });
      queryClient.invalidateQueries({
        queryKey: MembersApiFactory.paginatedMembersExitu._def,
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        description: ErrorService.handleError(
          (error as any)?.statusCode,
          ERROR_MESSAGES.MEMBER.CREATE_MEMBER
        ),
      });
    },
  });

  return {
    ...mutation,
    errorMessage:
      mutation.isError &&
      ErrorService.handleError(
        (mutation.error as any)?.statusCode,
        ERROR_MESSAGES.MEMBER.CREATE
      ),
  };
};

const useUpdateMember = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: ({ member, id }: { member: MemberFormValues; id: string }) =>
      MemberService.updateMember(member, id),
    onSuccess: () => {
      toast({
        description: "Socio actualizado correctamente",
      });
      queryClient.invalidateQueries({
        queryKey: MembersApiFactory.paginatedMembers._def,
      });
      queryClient.invalidateQueries({
        queryKey: MembersApiFactory.getMemberById._def,
      });
      queryClient.invalidateQueries({
        queryKey: MembersApiFactory.getPdfById._def,
      });
      queryClient.invalidateQueries({
        queryKey: MembersApiFactory.getPdfBank._def,
      });
      queryClient.invalidateQueries({
        queryKey: MembersApiFactory.paginatedMembersNoPay._def,
      });
      queryClient.invalidateQueries({
        queryKey: MembersApiFactory.paginatedMembersExitu._def,
      });
    },

    onError: (error) => {
      toast({
        variant: "destructive",
        description: ErrorService.handleError(
          (error as any)?.statusCode,
          ERROR_MESSAGES.MEMBER.UPDATE
        ),
      });
    },
  });

  return {
    ...mutation,
    errorMessage:
      mutation.isError &&
      ErrorService.handleError(
        (mutation.error as any)?.statusCode,
        ERROR_MESSAGES.MEMBER.UPDATE
      ),
  };
};

const useDeleteMember = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (id: string) => MemberService.removeMember(id),
    onSuccess: () => {
      navigate("/dashboard/members");
      toast({
        description: "Socio eliminado correctamente",
      });
      queryClient.invalidateQueries({
        queryKey: MembersApiFactory.paginatedMembers._def,
      });
      queryClient.invalidateQueries({
        queryKey: MembersApiFactory.getMemberById._def,
      });
      queryClient.invalidateQueries({
        queryKey: MembersApiFactory.getPdfById._def,
      });
      queryClient.invalidateQueries({
        queryKey: MembersApiFactory.getPdfBank._def,
      });
      queryClient.invalidateQueries({
        queryKey: MembersApiFactory.paginatedMembersNoPay._def,
      });
      queryClient.invalidateQueries({
        queryKey: MembersApiFactory.paginatedMembersExitu._def,
      });
    },

    onError: (error) => {
      toast({
        variant: "destructive",
        description: ErrorService.handleError(
          (error as any)?.statusCode,
          ERROR_MESSAGES.MEMBER.REMOVE
        ),
      });
    },
  });

  return {
    ...mutation,
    errorMessage:
      mutation.isError &&
      ErrorService.handleError(
        (mutation.error as any)?.statusCode,
        ERROR_MESSAGES.MEMBER.REMOVE
      ),
  };
};

const useMemberTableMethods = () => {
  const [searchTrigger, setSearchTrigger] = useState(false);
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [searchFilters, setSearchFilters] = useState<Record<string, string>>(
    {}
  );

  const handleFiltersChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value,
    });
  };

  const handleSelectChange = (value: string) => {
    setFilters({
      ...filters,
      status: value === "default" ? "" : value,
    });
  };

  const handleSearch = () => {
    setSearchFilters(filters);
    setCurrentPage(1);
    setSearchTrigger(true);
  };

  const handlePageChange = (newPage: number, totalPages: number) => {
    if (newPage === currentPage || newPage < 1 || newPage > totalPages) return;

    setCurrentPage(newPage);
  };

  useEffect(() => {
    if (searchTrigger) {
      setSearchTrigger(false);
    }
  }, [searchTrigger]);

  return {
    filters,
    currentPage,
    searchFilters,
    handleFiltersChange,
    handleSelectChange,
    handleSearch,
    handlePageChange,
  };
};

const useMemberPaginationInfo = ({
  members,
  hasPreviousPage,
  hasNextPage,
}: UseMemberPaginationInfoProps) => {
  const isEmptyData = members.length === 0;
  const isPreviousDisabled = !hasPreviousPage || isEmptyData;
  const isNextDisabled = !hasNextPage || isEmptyData;

  return {
    isPreviousDisabled,
    isNextDisabled,
  };
};

const useUpdatePaymentDate = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const mutation = useMutation({
    mutationFn: (id: string) => MemberService.updatePaymentDateMember(id),
    onSuccess: () => {
      toast({
        description: "Fecha del pago actualizada correctamente",
      });
      queryClient.invalidateQueries({
        queryKey: MembersApiFactory.paginatedMembers._def,
      });
      queryClient.invalidateQueries({
        queryKey: MembersApiFactory.getMemberById._def,
      });
      queryClient.invalidateQueries({
        queryKey: MembersApiFactory.getPdfById._def,
      });
      queryClient.invalidateQueries({
        queryKey: MembersApiFactory.paginatedMembersNoPay._def,
      });
      queryClient.invalidateQueries({
        queryKey: MembersApiFactory.paginatedMembersExitu._def,
      });
    },

    onError: (error) => {
      toast({
        variant: "destructive",
        description: ErrorService.handleError(
          (error as any)?.statusCode,
          ERROR_MESSAGES.MEMBER.UPDATE_PAYMENT_DATE
        ),
      });
    },
  });

  return {
    ...mutation,
    errorMessage:
      mutation.isError &&
      ErrorService.handleError(
        (mutation.error as any)?.statusCode,
        ERROR_MESSAGES.MEMBER.UPDATE_PAYMENT_DATE
      ),
  };
};

const useRefreshMembersInfo = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const mutation = useMutation({
    mutationFn: () => MemberService.updateMembersInfo(),
    onSuccess: () => {
      toast({
        description: "Datos cargados correctamente",
      });
      queryClient.invalidateQueries({
        queryKey: MembersApiFactory.membersInfo._def,
      });
    },

    onError: (error) => {
      toast({
        variant: "destructive",
        description: ErrorService.handleError(
          (error as any)?.statusCode,
          ERROR_MESSAGES.MEMBERS_INFO.REFRESH_MEMBERS_INFO
        ),
      });
    },
  });

  return {
    ...mutation,
    errorMessage:
      mutation.isError &&
      ErrorService.handleError(
        (mutation.error as any)?.statusCode,
        ERROR_MESSAGES.MEMBER.UPDATE_PAYMENT_DATE
      ),
  };
};

export {
  usePaginatedMembers,
  useMemberById,
  useCreateMember,
  useUpdateMember,
  useDeleteMember,
  useUpdatePaymentDate,
  usePdfById,
  usePdfBank,
  useMembersInfo,
  useRefreshMembersInfo,
  usePaginatedMembersNoPay,
  usePaginatedMembersExitu,
  useMemberTableMethods,
  useMemberPaginationInfo,
};
