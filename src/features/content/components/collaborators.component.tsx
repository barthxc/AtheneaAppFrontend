import {
  Button,
  Gallery,
  Input,
  Modal,
  Form,
} from "@/features/core/components/ui";
import {
  useCreateColaborator,
  useGetColaborators,
} from "@/features/content/hooks";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { colaboratorFormSchema } from "../schemas/colaborator-form.schema";
import { ColaboratorFormValues } from "../types/colaborator.type";
import { FormField } from "@/features/core/components";

export function Collaborators() {
  const { data } = useGetColaborators();

  const { mutate: createColaborator, isPending } = useCreateColaborator();

  const [open, setOpen] = useState(false);

  const form = useForm<ColaboratorFormValues>({
    resolver: zodResolver(colaboratorFormSchema),
  });

  const handleSubmit = async (formData: ColaboratorFormValues) => {
    console.log(formData);
  };
  return (
    <div className="flex flex-col items-start gap-10">
      <div className="flex flex-wrap justify-end items-center gap-5 w-full">
        <Button
          onClick={() => {
            setOpen(true);
          }}>
          Crear colaborador
        </Button>
      </div>

      <Modal
        title="Agrega un colaborador"
        description=""
        isOpen={open}
        onClose={() => setOpen(false)}>
        <Button>Agregar otro</Button>
        <div className="flex justify-between items-center gap-5">
          {/* <form onSubmit={handleSubmit}>
            <Input placeholder="Título de la imagen" />
            <Input type="file" />

            <Button type="submit">Crear</Button>
          </form> */}

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="w-full space-y-8">
              <div className="gap-8 md:grid md:grid-cols-3 items-end">
                <FormField
                  formControl={form.control}
                  name="title"
                  label="Título"
                  render={{
                    renderProp: ({ field }) => (
                      <Input
                        disabled={isPending}
                        placeholder="Título"
                        {...field}
                      />
                    ),
                  }}
                />

                <FormField
                  formControl={form.control}
                  name="image"
                  label="Imagen"
                  render={{
                    renderProp: ({ field }) => (
                      <Input
                        type="file"
                        disabled={isPending}
                        placeholder="Imagen"
                        {...field}
                      />
                    ),
                  }}
                />

                <Button
                  disabled={isPending}
                  className="mr-auto space-y-2"
                  type="submit">
                  Crear
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </Modal>

      <Gallery>
        {data?.map((item) => (
          <Gallery.Image
            key={item.id}
            src={item.imageUrl}
            alt={`Imagen del colaborador ${item.title}`}>
            <Gallery.ImageHeading>{item.title}</Gallery.ImageHeading>
            <Gallery.ImageActions>
              <button
                type="button"
                className="hover:animate-pulse text-red-500 font-bold text-2xl"
                onClick={() => console.log(`delete ${item.id}`)}>
                X
              </button>
            </Gallery.ImageActions>
          </Gallery.Image>
        ))}
      </Gallery>
    </div>
  );
}
