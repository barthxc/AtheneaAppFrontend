// src/features/members/hooks/useMembers.ts
import { useInfiniteQuery } from "@tanstack/react-query";
import {
  type FetchMembersParams,
  MemberService,
} from "@/features/members/services/member.service";
import { ErrorService } from "@/features/error/service";
import { ERROR_MESSAGES } from "@/features/error/constants";
import type { Members } from "../types";

interface UseMembersProps {
  filters: {
    name?: string;
    lastName?: string;
    identificationNumber?: string;
    memberNumber?: string;
    status?: string;
  };
  queryKey: (string | { [key: string]: string })[]; // Asegúrate de que queryKey esté incluido
}

const useMembers = ({ filters, queryKey }: UseMembersProps) => {
  const {
    data,
    error,
    isError,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery<Members[]>({
    queryKey, // Usa queryKey aquí
    queryFn: async ({ pageParam = 0 }) => {
      const offset =
        typeof pageParam === "number" && pageParam > 0 ? pageParam : undefined;
      const params: FetchMembersParams = {
        ...filters,
        limit: 10, // Define el límite de los resultados por página
        offset, // Solo define el offset si no es la primera página
      };
      return MemberService.getAllMembers(params);
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === 10 ? allPages.length : undefined;
    },
    initialPageParam: 0, // Especifica el valor inicial de la página si es necesario
    staleTime: 1000 * 60 * 5, // Tiempo de caché en milisegundos
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  const errorMessage = isError
    ? ErrorService.handleError(
        error?.response?.statusCode,
        ERROR_MESSAGES.MEMBER.FIND_ALL
      )
    : null;

  return {
    data,
    isError,
    error,
    errorMessage,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};

export default useMembers;
