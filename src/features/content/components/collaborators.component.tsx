import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Button,
  Gallery,
  Input,
  Modal,
  Form,
} from "@/features/core/components/ui";
import {
  useCreateColaborator,
  useDeleteColaborator,
  useGetColaborators,
} from "@/features/content/hooks";
import { collaboratorFormSchema } from "@/features/content/schemas";
import type { CollaboratorsFormValues } from "@/features/content/types";
import { ConfirmModal, FormField, Icons } from "@/features/core/components";

export function Collaborators() {
  const { data, isLoading } = useGetColaborators();
  const {
    mutate: createColaborator,
    isPending: isPendingCreate,
    isError: isErrorCreate,
    isSuccess: isSuccessCreate,
  } = useCreateColaborator();
  const {
    mutate: deleteColaborator,
    isPending: isPendingDelete,
    isError: isErrorDelete,
    isSuccess: isSuccessDelete,
  } = useDeleteColaborator();
  const [openCreate, setOpenCreate] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [deleteId, setDeleteId] = useState<string>("");

  // const [collaboratorsFields, setCollaboratorsField] = useState([{
  // 	title: '',
  // }])

  const initialValues = {
    collaboratorsFields: {
      title: "",
      image: undefined,
    },
  };

  const form = useForm<CollaboratorsFormValues>({
    resolver: zodResolver(collaboratorFormSchema),
    defaultValues: initialValues,
  });

  useEffect(() => {
    if (isSuccessCreate) {
      form.reset();
    }
    if (isErrorCreate || isSuccessCreate) {
      setOpenCreate(false);
    }

    if (isErrorDelete || isSuccessDelete) {
      setOpenDelete(false);
    }
  }, [isErrorCreate, isErrorDelete, isSuccessCreate, isSuccessDelete, form]);

  const handleSubmit = async (data: CollaboratorsFormValues) => {
    console.log("FORM_DATA", data);

    // TODO: Check what type of data the backend is expecting
    createColaborator(data);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    const image = e.target.files?.[0];
    if (!image) return;
  };

  const handleDelete = (id: string) => {
    setDeleteId(id);
    setOpenDelete(true);
  };

  return (
    <div className="flex flex-col items-start gap-10">
      <div className="flex flex-wrap justify-end items-center gap-5 w-full">
        <Button
          onClick={() => {
            setOpenCreate(true);
          }}>
          Crear colaborador
        </Button>
      </div>

      <Modal
        title="Agrega un colaborador"
        description=""
        isOpen={openCreate}
        onClose={() => setOpenCreate(false)}>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="w-full space-y-8">
            <div className="flex flex-col md:flex-row items-start gap-5">
              <FormField
                formControl={form.control}
                name={"title"}
                label="Título"
                render={{
                  renderProp: ({ field }) => (
                    <Input
                      disabled={isPendingCreate}
                      placeholder="Título"
                      {...field}
                    />
                  ),
                }}
              />

              <FormField
                formControl={form.control}
                name={"image"}
                label="Imagen"
                render={{
                  renderProp: ({ field }) => (
                    <div className="flex justify-between items-center gap-5">
                      <Input
                        type="file"
                        disabled={isPendingCreate}
                        {...field}
                        onChange={(e) => {
                          handleImageChange(e);
                          field.onChange(e.target.files?.[0] ?? null);
                        }}
                      />
                    </div>
                  ),
                }}
              />
            </div>

            <Button
              disabled={isPendingCreate}
              className="mr-auto space-y-2"
              type="submit">
              Crear
            </Button>
          </form>
        </Form>
      </Modal>

      <Gallery isLoading={isLoading}>
        {data?.map((item) => (
          <Gallery.Image
            key={item.id}
            src={item.imageUrl}
            alt={`Imagen del colaborador ${item.title}`}
            className="h-48 object-contain">
            <Gallery.ImageHeading>{item.title}</Gallery.ImageHeading>
            <Gallery.ImageActions>
              <button
                type="button"
                className="hover:animate-pulse font-bold text-2xl"
                onClick={() => handleDelete(item.id)}>
                <Icons.close />
              </button>
            </Gallery.ImageActions>
          </Gallery.Image>
        ))}
      </Gallery>

      <ConfirmModal
        title="¿Estás seguro que deseas eliminar esta imagen?"
        description="Una vez eliminado no se puede recuperar."
        confirmButtonLabel="Eliminar colaborador"
        isOpen={openDelete}
        onClose={() => setOpenDelete(false)}
        onConfirm={() => {
          deleteColaborator(deleteId);
        }}
        isDisabled={isPendingDelete}
        variant="destructive"
      />
    </div>
  );
}
