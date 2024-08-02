import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ErrorService } from "@/features/error/service";
import { ERROR_MESSAGES } from "@/features/error/constants";
import type { Calendar } from "@/features/calendar/types";
import { useToast } from "@/features/core/components/ui";
import { CalendarService } from "../services/calendar.service";
import { CalendarApiFactory } from "./calendar.factory";

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
    errorMessage:
      mutation.isError &&
      ErrorService.handleError(
        (mutation.error as any)?.statusCode,
        ERROR_MESSAGES.MEMBER.CREATE
      ),
  };
};

export { useCreateEventCalendar };
