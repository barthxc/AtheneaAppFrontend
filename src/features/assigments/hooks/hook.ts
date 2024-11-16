import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ErrorService } from "@/features/error/service";
import { ERROR_MESSAGES } from "@/features/error/constants";
import { AssigmentApiFactory } from "@/features/assigments/hooks";
import { useToast } from "@/features/core/components/ui";
import { AssigmentService, Assignment } from "../services";

const useGetAssigment = () => {
	const { data, isError, isFetching, isLoading, error } = useQuery({
		...AssigmentApiFactory.getAssigments(),
		staleTime: 1000 * 60 * 5,
		retry: false,
		refetchOnWindowFocus: false,
	});

	const errorMessage = isError && ErrorService.handleError((error as any)?.statusCode, ERROR_MESSAGES.MEMBER.FIND_ALL);
	//TODO! ERROR MSGS

	return {
		assigment: data || [],
		isError,
		isLoading,
		errorMessage,
		isFetching,
	};
};

const useCreateAssignment = () => {
	const queryClient = useQueryClient();
	const { toast } = useToast();

	const mutation = useMutation({
		mutationFn: async (assignment: Assignment) => await AssigmentService.create(assignment),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: AssigmentApiFactory.getAssigments._def,
			});
		},
		onError: (error) => {
			toast({
				variant: "destructive",
				description: ErrorService.handleError((error as any)?.statusCode, ERROR_MESSAGES.ASSIGNMENT.CREATE),
			});
		},
	});

	return {
		...mutation,
		errorMessage:
			mutation.isError &&
			ErrorService.handleError((mutation.error as any)?.statusCode, ERROR_MESSAGES.ASSIGNMENT.CREATE),
	};
};

const useDeleteAssignment = () => {
	const queryClient = useQueryClient();
	const { toast } = useToast();

	const mutation = useMutation({
		mutationFn: (id: string) => AssigmentService.remove(id),
		onSuccess: () => {
			toast({
				description: "Cesión eliminada correctamente.",
			});
			queryClient.invalidateQueries({
				queryKey: AssigmentApiFactory.getAssigments._def,
			});
		},
		onError: (error) => {
			toast({
				variant: "destructive",
				description: ErrorService.handleError((error as any)?.statusCode, ERROR_MESSAGES.ASSIGNMENT.REMOVE),
			});
		},
	});

	return {
		...mutation,
	};
};

export { useGetAssigment, useCreateAssignment, useDeleteAssignment };
