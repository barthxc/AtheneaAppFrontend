import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Button,
  Form,
  Input,
  Modal,
  Textarea,
  useToast,
} from "@/features/core/components/ui";
import { FormField, Icons } from "@/features/core/components";

import type { Content, ContentFormValues } from "@/features/content/types";
import { contentFormSchema } from "@/features/content/schemas";
import { useUpdateContent } from "@/features/content/hooks";
import { formatDate } from "@/features/core/lib/utils";

export interface EventsContentEditProps {
  contentId: string;
  defaultValues: Pick<Content, "title" | "description" | "date">;
}

export const EventsContentEdit = ({
  contentId,
  defaultValues,
}: EventsContentEditProps) => {
  const [editing, setEditing] = useState<boolean>(false);
  const { mutate: editContent, isPending } = useUpdateContent();
  const { toast } = useToast();

  const form = useForm<ContentFormValues>({
    resolver: zodResolver(contentFormSchema),
    defaultValues: defaultValues,
  });

  const handleSubmit = (data: ContentFormValues) => {
    const notModified =
      data.title === defaultValues.title &&
      data.description === defaultValues.description &&
      data.date === defaultValues.date;
    if (notModified) {
      toast({
        variant: "destructive",
        description: "Modifica al menos un campo para guardar los cambios",
      });
      return;
    }
    console.log({ defaultValues, contentData: data });
    editContent([contentId, data], { onSuccess: closeEditModal });
  };

  const openEditModal = () => setEditing(true);
  const closeEditModal = () => setEditing(false);

  return (
    <>
      <div className="flex flex-col gap-2">
        <Button className="gap-2" onClick={openEditModal}>
          <span>Editar</span>
          <Icons.pencil size={20} />
        </Button>
      </div>

      <Modal
        title="Edita el contenido"
        description=""
        isOpen={editing}
        onClose={closeEditModal}>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="w-full space-y-8">
            <div className="flex flex-col gap-5">
              <FormField
                formControl={form.control}
                name={"title"}
                label="Título"
                render={{
                  renderProp: ({ field }) => (
                    <Input disabled={isPending} {...field} />
                  ),
                }}
              />
              <FormField
                formControl={form.control}
                name={"date"}
                label="Fecha"
                render={{
                  renderProp: ({ field }) => (
                    <Input
                      disabled={isPending}
                      placeholder="DD/MM/AAAA"
                      value={formatDate(field.value)}
                      onChange={(e) =>
                        field.onChange(formatDate(e.target.value))
                      }
                      name={field.name}
                    />
                  ),
                }}
              />

              <FormField
                formControl={form.control}
                name={"description"}
                label="Descripción"
                render={{
                  renderProp: ({ field }) => (
                    <Textarea disabled={isPending} {...field} />
                  ),
                }}
              />
            </div>

            <Button
              disabled={isPending}
              className="mr-auto space-y-2"
              type="submit">
              Guardar cambios
            </Button>
          </form>
        </Form>
      </Modal>
    </>
  );
};
