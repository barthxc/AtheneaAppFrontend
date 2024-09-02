import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { useToast } from "@/features/core/components/ui";
import { ErrorService } from "@/features/error/service";
import { ERROR_MESSAGES } from "@/features/error/constants";

import { ContentsApiFactory } from "./content.factory";
import { ContentService } from "@/features/content/services";
import type { Content } from "@/features/content/types";

const useGetContents = () => {
  const { data, isError, isFetching, isLoading, error } = useQuery({
    ...ContentsApiFactory.getContents(),
    staleTime: 1000 * 60 * 5,
    retry: false,
    refetchOnWindowFocus: false,
  });

  const errorMessage =
    isError &&
    ErrorService.handleError(
      (error as any)?.statusCode,
      ERROR_MESSAGES.CONTENT.FIND_ALL
    );

  return {
    data,
    isError,
    isLoading,
    errorMessage,
    isFetching,
  };
};

const useCreateContent = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: (data: any) => ContentService.createContent(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ContentsApiFactory.getContents._def,
      });
      toast({
        variant: "default",
        description: "Contenido creado correctamente",
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        description: ErrorService.handleError(
          (error as any)?.statusCode,
          ERROR_MESSAGES.CONTENT.CREATE
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
        ERROR_MESSAGES.CONTENT.CREATE
      ),
  };
};

const useDeleteContent = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: (id: string) => ContentService.deleteContent(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ContentsApiFactory.getContents._def,
      });
      toast({
        variant: "default",
        description: "Contenido eliminado correctamente",
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        description: ErrorService.handleError(
          (error as any)?.statusCode,
          ERROR_MESSAGES.CONTENT.DELETE
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
        ERROR_MESSAGES.CONTENT.DELETE
      ),
  };
};

const useUpdateContent = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: ([id, content]: [string, Content]) =>
      ContentService.updatecontent(id, content),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ContentsApiFactory.getContents._def,
      });
      toast({
        variant: "default",
        description: "Contenido actualizado correctamente",
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        description: ErrorService.handleError(
          (error as any)?.statusCode,
          ERROR_MESSAGES.CONTENT.UPDATE
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
        ERROR_MESSAGES.CONTENT.UPDATE
      ),
  };
};

const useDeleteImageContent = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: ([contentId, imageId]: [string, string]) =>
      ContentService.deleteImageContent(contentId, imageId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ContentsApiFactory.getContents._def,
      });
      toast({
        variant: "default",
        description: "Imagen eliminada correctamente",
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        description: ErrorService.handleError(
          (error as any)?.statusCode,
          ERROR_MESSAGES.CONTENT.REMOVE
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
        ERROR_MESSAGES.CONTENT.REMOVE
      ),
  };
};

const useAddImageContent = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: ([contentId, images]: [string, File[]]) =>
      ContentService.addImageContent(contentId, images),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ContentsApiFactory.getContents._def,
      });
      toast({
        variant: "default",
        description: "Imágenes añadidas correctamente",
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        description: ErrorService.handleError(
          (error as any)?.statusCode,
          ERROR_MESSAGES.CONTENT.CREATE
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
        ERROR_MESSAGES.CONTENT.CREATE
      ),
  };
};

const useReorderContent = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: (contents: { id: string; position: number }[]) =>
      ContentService.reorderContent(contents),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ContentsApiFactory.getContents._def,
      });
      toast({
        variant: "default",
        description: "Contenido re-ordenado correctamente",
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        description: ErrorService.handleError(
          (error as any)?.statusCode,
          ERROR_MESSAGES.CONTENT.UPDATE
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
        ERROR_MESSAGES.CONTENT.UPDATE
      ),
  };
};

export {
  useGetContents,
  useCreateContent,
  useDeleteContent,
  useUpdateContent,
  useDeleteImageContent,
  useAddImageContent,
  useReorderContent,
};
