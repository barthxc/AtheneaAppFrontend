import { useEffect, useState } from "react";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";

import { dateFormatter } from "@/features/core/utils";
import { ConfirmModal, Icons } from "@/features/core/components";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Heading,
  Skeleton,
} from "@/features/core/components/ui";
import {
  useDeleteContent,
  useGetContents,
  useReorderContent,
} from "@/features/content/hooks";
import {
  EventsContent,
  EventsCreate,
  EventsImages,
} from "@/features/content/components";
import type { ContentResponse } from "@/features/content/types";

export function Events() {
  const { data: events, isLoading } = useGetContents();
  const { mutate: reorderContent, isPending, isSuccess } = useReorderContent();
  const { mutate: deleteEvent, isPending: isPendingDelete } =
    useDeleteContent();
  const [deleting, setDeleting] = useState<boolean>(false);
  const [deleteId, setDeleteId] = useState<string>();
  const [isDifferent, setIsDifferent] = useState<boolean>(false);

  const [eventList, eventContent, setEvents] = useDragAndDrop<
    HTMLDivElement,
    ContentResponse
  >(events ?? [], {
    group: "eventList",
    dragHandle: ".drag-handler",
    handleEnd: () => {
      const newEvents = eventContent.map((event, i) => ({
        ...event,
        order: i,
      }));
      const areEqual = compareEvents(events, newEvents);

      console.log(areEqual ? "Iguales!" : "No son Iguales!");
      console.log("ORIGINAL!", events);
      console.log("MOVIDO!", newEvents);

      setIsDifferent(!areEqual);
      setEvents(newEvents);
    },
  });

  const compareEvents = (
    originalEvents: ContentResponse[] | undefined,
    newEvents: ContentResponse[]
  ) => {
    if (originalEvents?.length !== newEvents.length) return false;

    return originalEvents.every((event, index) => {
      return (
        event.id === newEvents[index].id &&
        event.position === newEvents[index].position
      );
    });
  };

  useEffect(() => {
    console.table(events);
    if (!events) return;
    setEvents(events);
  }, [events, setEvents]);

  useEffect(() => {
    if (isSuccess) {
      setIsDifferent(false);
    }
  }, [isSuccess]);

  const handleDeleteEvent = (eventId: string) => {
    setDeleting(true);
    setDeleteId(eventId);
  };

  const handleReorder = () => {
    const reorderedEvents = eventContent.map((event, index) => ({
      id: event.id,
      position: index + 1,
    }));

    reorderContent(reorderedEvents);
  };

  const doDelete = () => {
    if (!deleteId) {
      console.error("No delete ID provided");
      return;
    }
    deleteEvent(deleteId, { onSuccess: () => setDeleting(false) });
  };

  if (isLoading) {
    return [...new Array(2)].map((_, i) => (
      <Skeleton
        key={Symbol(`event_skeleton_key_${i}`).description}
        className="w-full h-14 rounded-lg max-w-2xl"
      />
    ));
  }

  return (
    <>
      <EventsCreate />
      <Accordion
        ref={eventList}
        type="single"
        collapsible
        className="flex flex-col gap-5">
        {eventContent.length > 0 &&
          eventContent.map((event) => (
            <AccordionItem
              key={event.id}
              value={event.id}
              className="bg-secondary rounded-lg overflow-hidden max-w-2xl">
              <div className="flex justify-end items-center gap-5 w-full bg-primary">
                <button
                  type="button"
                  className="p-px"
                  onClick={() => handleDeleteEvent(event.id)}>
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

      {isDifferent && (
        <Button type="button" disabled={isPending} onClick={handleReorder}>
          Reordenar
        </Button>
      )}

      <ConfirmModal
        title="¿Estás seguro que deseas eliminar este evento?"
        description="Una vez eliminado no se puede recuperar."
        confirmButtonLabel="Eliminar evento"
        isOpen={deleting}
        onClose={() => setDeleting(false)}
        onConfirm={doDelete}
        isDisabled={isPendingDelete}
        variant="destructive"
      />
    </>
  );
}
