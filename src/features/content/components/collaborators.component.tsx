import { Button, Gallery, Input, Modal } from "@/features/core/components/ui";
import { useGetContents } from "@/features/content/hooks";

export function Collaborators() {
	const { data } = useGetContents();

	console.log(data);

	return (
		<div className="flex flex-col items-start gap-10">
			<div className="flex flex-wrap justify-end items-center gap-5 w-full">
				<Button>Crear colaborador</Button>
			</div>

			<Modal title="Agrega un colaborador" description="" isOpen={true} onClose={() => console.log("closing")}>
				<Button>Agregar otro</Button>
				<div className="flex justify-between items-center gap-5">
					<Input placeholder="Título de la imagen" />
					<Input type="file" />
				</div>
			</Modal>

			<Gallery>
				<Gallery.Image src="https://cdn2.thecatapi.com/images/776.jpg">
					<Gallery.ImageHeading>Image #1</Gallery.ImageHeading>
					<Gallery.ImageActions>
						<button type="button" onClick={() => console.log("delete")}>
							alskdjalks
						</button>
					</Gallery.ImageActions>
				</Gallery.Image>
				<Gallery.Image src="https://cdn2.thecatapi.com/images/776.jpg" />
				<Gallery.Image src="https://cdn2.thecatapi.com/images/776.jpg" />
				<Gallery.Image src="https://cdn2.thecatapi.com/images/776.jpg" />
			</Gallery>
		</div>
	);
}
