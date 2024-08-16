import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ErrorService } from "@/features/error/service";
import { ERROR_MESSAGES } from "@/features/error/constants";

import { InstallationsApiFactory } from "./installations.factory";

const useInstallations = () => {
  const { data, isError, isFetching, isLoading, error } = useQuery({
    ...InstallationsApiFactory.getColaborators(),
    staleTime: 1000 * 60 * 5,
    retry: false,
    refetchOnWindowFocus: false,
  });

  const errorMessage =
    isError &&
    ErrorService.handleError(
      (error as any)?.statusCode,
      ERROR_MESSAGES.INSTALLATIONS.FIND_ALL
    );

  return {
    data,
    isError,
    isLoading,
    errorMessage,
    isFetching,
  };
};

export { useInstallations };
