import { cn } from "@/features/core/lib/utils";
import { Icons } from "@/features/core/components";
import { Gallery, Heading } from "@/features/core/components/ui";
import type { ContentImageResponse } from "@/features/content/types";
import { EventsImagesEdit } from "@/features/content/components";

export interface EventsImagesProps extends React.HTMLAttributes<HTMLElement> {
	contentId: string;
	images: ContentImageResponse[];
}

export const EventsImages = ({ contentId, images, className, ...props }: EventsImagesProps) => {
	console.log(images);
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
								<button type="button" className="hover:animate-pulse font-bold text-2xl">
									<Icons.close />
								</button>
							</Gallery.ImageActions>
						</Gallery.Image>
					))}
				</Gallery>
			)}
		</section>
	);
};
