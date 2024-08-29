import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import { useEffect } from "react";

import { dateFormatter } from "@/features/core/utils";
import { Icons } from "@/features/core/components";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Gallery,
  Heading,
  Skeleton,
} from "@/features/core/components/ui";
import { useGetContents } from "@/features/content/hooks";
import type {
  ContentResponse,
  ImageResponse,
} from "@/features/content/services";

export function Events() {
  const { data: events, isLoading } = useGetContents();

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
      setEvents(newEvents);
    },
  });

  useEffect(() => {
    console.table(events);
    if (!events) return;
    setEvents(events);
  }, [events, setEvents]);

  if (isLoading) {
    return [...new Array(2)].map((_, i) => (
      <Skeleton
        key={Symbol(`event_skeleton_key_${i}`).description}
        className="w-full h-14 rounded-lg max-w-2xl"
      />
    ));
  }

  return (
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
            className="bg-secondary px-5 rounded-lg max-w-2xl">
            <div className="flex justify-start items-center gap-5">
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
            <AccordionContent className="[&_h2]:text-lg flex flex-col gap-5">
              {event.images.length > 0 && <EventImages images={event.images} />}

              <section>
                <div>
                  <Heading title="Título" />
                  <span className="text-lg font-medium pl-5">
                    {event.title}
                  </span>
                </div>
              </section>

              <section>
                <div>
                  <Heading title="Fecha" />
                  <span className="text-md pl-5">
                    {dateFormatter(new Date(event.date))}
                  </span>
                </div>
              </section>

              <section>
                <div>
                  <Heading title="Descripción" />
                  <span className="text-md pl-5">{event.description}</span>
                </div>
              </section>
            </AccordionContent>
          </AccordionItem>
        ))}
    </Accordion>
  );
}

interface EventImagesProps {
  images: ImageResponse[];
}

const EventImages = ({ images }: EventImagesProps) => {
  console.log(images);
  return (
    <section>
      <div className="flex justify-start items-center gap-2 mb-2">
        <Heading title="Imágenes" />
        <Button size="icon" aria-label="Subir nueva imagen">
          <Icons.add />
        </Button>
      </div>
      <Gallery>
        {images.map((image) => (
          <Gallery.Image key={image.id} src={image.url}>
            <Gallery.ImageActions>
              <button
                type="button"
                className="hover:animate-pulse font-bold text-2xl">
                <Icons.close />
              </button>
            </Gallery.ImageActions>
          </Gallery.Image>
        ))}
      </Gallery>
    </section>
  );
};
