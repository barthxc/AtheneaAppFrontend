import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ContentsApiFactory } from "./content.factory";
import { ErrorService } from "@/features/error/service";
import { ERROR_MESSAGES } from "@/features/error/constants";
import { useToast } from "@/features/core/components/ui";
import { type Content, ContentService } from "../services";

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
      ERROR_MESSAGES.COLABORATORS.FIND_ALL
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
          ERROR_MESSAGES.COLABORATORS.CREATE
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
        ERROR_MESSAGES.COLABORATORS.CREATE
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
          ERROR_MESSAGES.COLABORATORS.CREATE
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
        ERROR_MESSAGES.COLABORATORS.CREATE
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
          ERROR_MESSAGES.COLABORATORS.CREATE
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
        ERROR_MESSAGES.COLABORATORS.CREATE
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
          ERROR_MESSAGES.COLABORATORS.CREATE
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
        ERROR_MESSAGES.COLABORATORS.CREATE
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
          ERROR_MESSAGES.COLABORATORS.CREATE
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
        ERROR_MESSAGES.COLABORATORS.CREATE
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
          ERROR_MESSAGES.COLABORATORS.CREATE
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
        ERROR_MESSAGES.COLABORATORS.CREATE
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
