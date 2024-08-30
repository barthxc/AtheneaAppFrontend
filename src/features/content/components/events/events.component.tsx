import { useEffect } from "react";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";

import { dateFormatter } from "@/features/core/utils";
import { Icons } from "@/features/core/components";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
	Heading,
	Skeleton,
} from "@/features/core/components/ui";
import { useDeleteContent, useGetContents } from "@/features/content/hooks";
import { EventsContent, EventsImages } from "@/features/content/components";
import type { ContentResponse } from "@/features/content/types";

export function Events() {
	const { data: events, isLoading } = useGetContents();
	const { mutate: deleteContent } = useDeleteContent();

	const [eventList, eventContent, setEvents] = useDragAndDrop<HTMLDivElement, ContentResponse>(events ?? [], {
		group: "eventList",
		dragHandle: ".drag-handler",
		handleEnd: () => {
			const newEvents = eventContent.map((event, i) => ({ ...event, order: i }));
			setEvents(newEvents);
		},
	});

	useEffect(() => {
		console.table(events);
		if (!events) return;
		setEvents(events);
	}, [events, setEvents]);

	const handleDeleteEvent = (eventId: string) => {
		console.log(`DELETING EVENT WITH ID ${eventId}`);
		// ! BE CAREFUL, IT WILL DELETE THE EVENT WITHOUT A CONFIRM DIALOG
		// ! BE CAREFUL, IT WILL DELETE THE EVENT WITHOUT A CONFIRM DIALOG
		// ! BE CAREFUL, IT WILL DELETE THE EVENT WITHOUT A CONFIRM DIALOG
		// ! BE CAREFUL, IT WILL DELETE THE EVENT WITHOUT A CONFIRM DIALOG
		// ! BE CAREFUL, IT WILL DELETE THE EVENT WITHOUT A CONFIRM DIALOG
		// ! BE CAREFUL, IT WILL DELETE THE EVENT WITHOUT A CONFIRM DIALOG
		// deleteContent(eventId);
	};

	if (isLoading) {
		return [...new Array(2)].map((_, i) => (
			<Skeleton key={Symbol(`event_skeleton_key_${i}`).description} className="w-full h-14 rounded-lg max-w-2xl" />
		));
	}

	return (
		<Accordion ref={eventList} type="single" collapsible className="flex flex-col gap-5">
			{eventContent.length > 0 &&
				eventContent.map((event) => (
					<AccordionItem key={event.id} value={event.id} className="bg-secondary rounded-lg overflow-hidden max-w-2xl">
						<div className="flex justify-end items-center gap-5 w-full bg-primary">
							<button type="button" className="p-px" onClick={() => handleDeleteEvent(event.id)}>
								<Icons.close className="text-white" />
							</button>
						</div>
						<div className="flex justify-start items-center gap-5 px-5">
							<Icons.drag className="cursor-move drag-handler" />
							<div className="w-full">
								<AccordionTrigger className="flex justify-between items-center">
									<div className="flex justify-start items-center gap-5">
										<Heading title={event.title} className="text-xl" />
										{/* // TODO: Use a valid date */}
										<span>{dateFormatter(new Date(event.date))}</span>
									</div>
								</AccordionTrigger>
							</div>
						</div>
						<AccordionContent className="[&_h2]:text-lg flex flex-col gap-5 px-5">
							<EventsImages contentId={event.id} images={event.images} />
							<EventsContent
								contentId={event.id}
								title={event.title}
								date={event.date}
								description={event.description}
							/>
						</AccordionContent>
					</AccordionItem>
				))}
		</Accordion>
	);
}
