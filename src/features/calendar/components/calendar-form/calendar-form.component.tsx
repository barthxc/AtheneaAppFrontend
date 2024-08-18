import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { DateRange } from "react-day-picker";

import { useToast } from "@/features/core/components/ui";
import { useCreateEventCalendar } from "@/features/calendar/hooks";
import { calendarFormSchema } from "@/features/calendar/schemas";
import { CalendarFormView } from "@/features/calendar/components";
import type { CalendarFormValues } from "@/features/calendar/types";

export const CalendarForm = () => {
	const [showModal, setShowModal] = useState(false);
	const { mutate: createEvent, isPending } = useCreateEventCalendar();
	const { toast } = useToast();

	const toUTCDate = (date: Date): Date => {
		return new Date(date.getTime() - date.getTimezoneOffset() * 60000);
	};

	const form = useForm<CalendarFormValues>({
		resolver: zodResolver(calendarFormSchema),
	});

	const openModal = () => setShowModal(true);
	const closeModal = () => setShowModal(false);

	const onSubmit = async (formData: CalendarFormValues & { date: DateRange }) => {
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
		closeModal();
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
