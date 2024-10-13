import { useQuery } from "@tanstack/react-query";
import { ErrorService } from "@/features/error/service";
import { ERROR_MESSAGES } from "@/features/error/constants";
import { AssigmentApiFactory } from "@/features/assigments/hooks";

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

export { useGetAssigment };
