import { cn } from "@/features/core/lib/utils";
import { ConfirmModal, Icons } from "@/features/core/components";
import { Gallery, Heading } from "@/features/core/components/ui";

import type { ContentImageResponse } from "@/features/content/types";
import { EventsImagesEdit } from "@/features/content/components";
import { useDeleteImageContent } from "@/features/content/hooks";
import { useState } from "react";

export interface EventsImagesProps extends React.HTMLAttributes<HTMLElement> {
	contentId: string;
	images: ContentImageResponse[];
}

export const EventsImages = ({ contentId, images, className, ...props }: EventsImagesProps) => {
	const [deleting, setDeleting] = useState<boolean>(false);
	const [deleteId, setDeleteId] = useState<string>();
	const { mutate: deleteImageFn, isPending } = useDeleteImageContent();

	const handleDeleteImage = (imageId: string) => {
		setDeleteId(imageId);
		openDeleteModal();
		console.log("deleting", imageId);
	};

	const deleteImage = () => {
		if (!deleteId) {
			console.error("Image ID does not exist.");
			return;
		}

		deleteImageFn([contentId, deleteId], { onSuccess: closeDeleteModal, onError: closeDeleteModal });
	};

	const openDeleteModal = () => setDeleting(true);
	const closeDeleteModal = () => setDeleting(false);

	return (
		<section className={cn(className)} {...props}>
			<div className="flex justify-start items-center gap-2 mb-2">
				<Heading title="Imágenes" />
				<EventsImagesEdit contentId={contentId} />
			</div>
			{images.length > 0 && (
				<Gallery>
					{images.map((image) => (
						<Gallery.Image key={image.id} src={image.url}>
							<Gallery.ImageActions>
								<button
									type="button"
									className="hover:animate-pulse font-bold text-2xl"
									onClick={() => handleDeleteImage(image.id)}>
									<Icons.close />
								</button>
							</Gallery.ImageActions>
						</Gallery.Image>
					))}
				</Gallery>
			)}

			<ConfirmModal
				title="¿Estás seguro que deseas eliminar esta imagen?"
				description="Una vez eliminada no se puede recuperar."
				confirmButtonLabel="Eliminar imagen"
				isOpen={deleting}
				onClose={closeDeleteModal}
				onConfirm={deleteImage}
				isDisabled={isPending}
				variant="destructive"
			/>
		</section>
	);
};
