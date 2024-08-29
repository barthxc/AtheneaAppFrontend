import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ErrorService } from "@/features/error/service";
import { ERROR_MESSAGES } from "@/features/error/constants";

import { ColaboratorsApiFactory } from "./colaborators.factory";
import { useToast } from "@/features/core/components/ui";
import { ColaboratorsService } from "@/features/content/services";

const useGetColaborators = () => {
	const { data, isError, isFetching, isLoading, error } = useQuery({
		...ColaboratorsApiFactory.getColaborators(),
		staleTime: 1000 * 60 * 5,
		retry: false,
		refetchOnWindowFocus: false,
	});

	const errorMessage =
		isError && ErrorService.handleError((error as any)?.statusCode, ERROR_MESSAGES.COLABORATORS.FIND_ALL);

	return {
		data,
		isError,
		isLoading,
		errorMessage,
		isFetching,
	};
};

const useCreateColaborator = () => {
	const queryClient = useQueryClient();
	const { toast } = useToast();

	const mutation = useMutation({
		mutationFn: async (colaborator: any) => await ColaboratorsService.createColaborator(colaborator),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ColaboratorsApiFactory.getColaborators._def,
			});
			toast({
				variant: "default",
				description: "Colaborador creado correctamente",
			});
		},
		onError: (error) => {
			toast({
				variant: "destructive",
				description: ErrorService.handleError((error as any)?.statusCode, ERROR_MESSAGES.COLABORATORS.CREATE),
			});
		},
	});
	return {
		...mutation,
		errorMessage:
			mutation.isError &&
			ErrorService.handleError((mutation.error as any)?.statusCode, ERROR_MESSAGES.COLABORATORS.CREATE),
	};
};

const useDeleteColaborator = () => {
	const queryClient = useQueryClient();
	const { toast } = useToast();

	const mutation = useMutation({
		mutationFn: (id: string) => ColaboratorsService.deleteColaborator(id),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ColaboratorsApiFactory.getColaborators._def,
			});
			toast({
				variant: "default",
				description: "Colaborador eliminado correctamente",
			});
		},
		onError: (error) => {
			toast({
				variant: "destructive",
				description: ErrorService.handleError((error as any)?.statusCode, ERROR_MESSAGES.COLABORATORS.DELETE),
			});
		},
	});
	return {
		...mutation,
		errorMessage:
			mutation.isError &&
			ErrorService.handleError((mutation.error as any)?.statusCode, ERROR_MESSAGES.COLABORATORS.DELETE),
	};
};
export { useGetColaborators, useCreateColaborator, useDeleteColaborator };
