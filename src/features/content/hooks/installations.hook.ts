import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ErrorService } from "@/features/error/service";
import { ERROR_MESSAGES } from "@/features/error/constants";

import { InstallationsApiFactory } from "./installations.factory";
import { useToast } from "@/features/core/components/ui";
import { InstallationsService } from "@/features/content/services";

const useGetInstallations = () => {
  const { data, isError, isFetching, isLoading, error } = useQuery({
    ...InstallationsApiFactory.getInstallations(),
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
const useCreateInstallation = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: (installation: any) =>
      InstallationsService.createInstallation(installation),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: InstallationsApiFactory.getInstallations._def,
      });
      toast({
        variant: "default",
        description: "Instalación creada correctamente",
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        description: ErrorService.handleError(
          (error as any)?.statusCode,
          ERROR_MESSAGES.INSTALLATIONS.CREATE
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
        ERROR_MESSAGES.INSTALLATIONS.CREATE
      ),
  };
};

const useDeleteInstallation = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: (id: string) => InstallationsService.deleteInstallation(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: InstallationsApiFactory.getInstallations._def,
      });
      toast({
        variant: "default",
        description: "Instalación eliminada correctamente",
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        description: ErrorService.handleError(
          (error as any)?.statusCode,
          ERROR_MESSAGES.INSTALLATIONS.DELETE
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
        ERROR_MESSAGES.INSTALLATIONS.DELETE
      ),
  };
};

export { useGetInstallations, useCreateInstallation, useDeleteInstallation };
