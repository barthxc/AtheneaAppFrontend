import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { CalendarFormView } from "@/features/calendar/components";
import { calendarFormSchema } from "@/features/calendar/schemas";
import type { CalendarFormValues } from "@/features/calendar/types";
import { useCreateEventCalendar } from "../../hooks/hook";
import type { DateRange } from "react-day-picker";

// React.FC<CalendarFormProps>

export const CalendarForm = () => {
  const {
    mutate: createEvent,
    data,
    isError,
    isPending,
  } = useCreateEventCalendar();

  const [showModal, setShowModal] = useState(false);

  const form = useForm<CalendarFormValues>({
    resolver: zodResolver(calendarFormSchema),
  });

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const onSubmit = async (
    formData: CalendarFormValues & { date: DateRange | undefined }
  ) => {
    const { date, title } = formData;
    const payload = {
      title,
      from: date?.from,
      to: date?.to,
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
