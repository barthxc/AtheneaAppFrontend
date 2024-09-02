import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ErrorService } from "@/features/error/service";
import { ERROR_MESSAGES } from "@/features/error/constants";
import type { Calendar } from "@/features/calendar/types";
import { useToast } from "@/features/core/components/ui";
import { CalendarService } from "@/features/calendar/services";
import { CalendarApiFactory } from "@/features/calendar/hooks";

const useCalendar = () => {
  const { data, isError, isFetching, isLoading, error } = useQuery({
    ...CalendarApiFactory.getCalendar(),
    staleTime: 1000 * 60 * 5,
    retry: false,
    refetchOnWindowFocus: false,
  });

  const errorMessage =
    isError &&
    ErrorService.handleError(
      (error as any)?.statusCode,
      ERROR_MESSAGES.CALENDAR.FIND_ALL
    );

  return {
    calendar: data || [],
    isError,
    isLoading,
    errorMessage,
    isFetching,
  };
};

const useCreateEventCalendar = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: (event: Calendar) => CalendarService.create(event),
    onSuccess: () => {
      toast({
        description: "Evento creado correctamente",
      });
      queryClient.invalidateQueries({
        queryKey: CalendarApiFactory.getCalendar._def,
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        description: ErrorService.handleError(
          (error as any)?.statusCode,
          ERROR_MESSAGES.CALENDAR.CREATE
        ),
      });
    },
  });

  return {
    ...mutation,
  };
};

const useDeleteEventCaldendar = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: (id: string) => CalendarService.remove(id),
    onSuccess: () => {
      toast({
        description: "Evento eliminado correctamente",
      });
      queryClient.invalidateQueries({
        queryKey: CalendarApiFactory.getCalendar._def,
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        description: ErrorService.handleError(
          (error as any)?.statusCode,
          ERROR_MESSAGES.CALENDAR.REMOVE
        ),
      });
    },
  });

  return {
    ...mutation,
  };
};
export { useCreateEventCalendar, useDeleteEventCaldendar, useCalendar };
