import { Button, Gallery, Input, Modal } from "@/features/core/components/ui";
import { useGetColaborators } from "@/features/content/hooks";
import { useState } from "react";

export function Collaborators() {
  const { data } = useGetColaborators();

  const [open, setOpen] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e);
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
          <form onSubmit={handleSubmit}>
            <Input placeholder="Título de la imagen" />
            <Input type="file" />

            <Button type="submit">Crear</Button>
          </form>
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
