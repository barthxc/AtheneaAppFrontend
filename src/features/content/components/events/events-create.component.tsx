import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, Input, Textarea } from "@/features/core/components/ui";
import { UploadImageModal } from "@/features/core/components/modal";
import { FormField } from "@/features/core/components";
import { useCreateContent } from "@/features/content/hooks";
import { eventsFormSchema } from "@/features/content/schemas";
import type { EventsFormValues } from "@/features/content/types";

export const EventsCreate = () => {
  const [creating, setCreating] = useState<boolean>(false);
  const { mutate: createEvent, isPending, isSuccess } = useCreateContent();

  const form = useForm<EventsFormValues>({
    resolver: zodResolver(eventsFormSchema),
    defaultValues: {
      title: undefined,
      date: undefined,
      description: undefined,
      images: [],
    },
  });

  const handleSubmit = (data: any) => {
    const values = { ...data, typeContent: "new" };
    createEvent(values, { onSuccess: closeCreatingModal });
  };

  const openCreatingModal = () => setCreating(true);
  const closeCreatingModal = () => setCreating(false);

  return (
    <>
      <section className="flex justify-start items-start flex-wrap gap-5">
        <Button onClick={openCreatingModal}>Crear Evento</Button>
      </section>
      <UploadImageModal<EventsFormValues>
        title="Agrega un evento"
        description=""
        isOpen={creating}
        onClose={closeCreatingModal}
        form={form}
        handleSubmit={handleSubmit}
        isLoading={isPending}
        isSuccess={isSuccess}
        customElements={{
          fieldsContainer: (children) => (
            <div className="flex flex-col gap-5">{children}</div>
          ),
          additionalFields: (
            <>
              <FormField
                formControl={form.control}
                name="title"
                label="Título"
                render={{
                  renderProp: ({ field }) => (
                    <Input disabled={isPending} {...field} />
                  ),
                }}
              />

              <FormField
                formControl={form.control}
                name="date"
                label="Fecha"
                render={{
                  renderProp: ({ field }) => (
                    <Input
                      disabled={isPending}
                      placeholder="DD/MM/AAAA"
                      {...field}
                    />
                  ),
                }}
              />

              <FormField
                formControl={form.control}
                name="description"
                label="Descripción"
                render={{
                  renderProp: ({ field }) => (
                    <Textarea disabled={isPending} {...field} />
                  ),
                }}
              />
            </>
          ),
        }}
      />
    </>
  );
};
