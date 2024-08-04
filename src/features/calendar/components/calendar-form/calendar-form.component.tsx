import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { CalendarFormView } from "@/features/calendar/components";
import { calendarFormSchema } from "@/features/calendar/schemas";
import type { CalendarFormValues } from "@/features/calendar/types";
import { useCreateEventCalendar } from "../../hooks/hook";
import type { DateRange } from "react-day-picker";
import { useToast } from "@/features/core/components/ui";

// React.FC<CalendarFormProps>

export const CalendarForm = () => {
  const { mutate: createEvent, isError, isPending } = useCreateEventCalendar();

  const { toast } = useToast();

  const toUTCDate = (date: Date): Date => {
    return new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  };

  const [showModal, setShowModal] = useState(false);

  const form = useForm<CalendarFormValues>({
    resolver: zodResolver(calendarFormSchema),
  });

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const onSubmit = async (
    formData: CalendarFormValues & { date: DateRange }
  ) => {
    const { date, title } = formData;

    if (!date || !date.from || !date.to) {
      toast({
        variant: "destructive",
        description: "Fechas no definidas o incompletas",
      });
      return;
    }

    const payload = {
      title,
      from: toUTCDate(date?.from),
      to: toUTCDate(date?.to),
    };

    createEvent(payload);
  };

  const onDelete = async () => {
    try {
    } catch (error: any) {
    } finally {
      closeModal();
    }
  };

  return (
    <CalendarFormView
      initialData={{}}
      loading={isPending}
      showModal={showModal}
      openModal={openModal}
      closeModal={closeModal}
      form={form}
      onSubmit={onSubmit}
      onDelete={onDelete}
    />
  );
};
