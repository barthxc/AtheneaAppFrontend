import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Icons } from "@/features/core/components";
import { Button } from "@/features/core/components/ui";
import { UploadImageModal } from "@/features/core/components/modal";

import type { ContentImageFormValues } from "@/features/content/types";
import { contentImageFormSchema } from "@/features/content/schemas";
import { useCreateContent } from "@/features/content/hooks";

export interface EventsImagesEditProps {
	contentId: string;
}

export const EventsImagesEdit = ({ contentId }: EventsImagesEditProps) => {
	const [editing, setEditing] = useState<boolean>(false);
	const { mutate: createContent, isPending, isSuccess } = useCreateContent();

	const form = useForm<ContentImageFormValues>({
		resolver: zodResolver(contentImageFormSchema),
		defaultValues: {
			image: new File([], ""),
		},
	});

	const handleSubmit = (data: ContentImageFormValues) => {
		console.log({ imageContentData: data });
		// TODO: Check what type of data the backend is expecting
		createContent([contentId, { images: [data.image] }], { onSuccess: closeEditModal });
	};

	const openEditModal = () => setEditing(true);
	const closeEditModal = () => setEditing(false);

	return (
		<>
			<div className="flex flex-col gap-2">
				<Button size="icon" aria-label="Subir nueva imagen" onClick={openEditModal}>
					<Icons.add />
				</Button>
			</div>

			<UploadImageModal
				title="Agrega una nueva imagen"
				description=""
				isOpen={editing}
				onClose={closeEditModal}
				form={form}
				handleSubmit={handleSubmit}
				isLoading={isPending}
				isSuccess={isSuccess}
			/>
		</>
	);
};
