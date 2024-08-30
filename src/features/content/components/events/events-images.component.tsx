import { cn } from "@/features/core/lib/utils";
import { Icons } from "@/features/core/components";
import { Button, Gallery, Heading } from "@/features/core/components/ui";
import type { ContentImageResponse } from "@/features/content/types";

export interface EventsImagesProps extends React.HTMLAttributes<HTMLElement> {
	images: ContentImageResponse[];
}

export const EventsImages = ({ images, className, ...props }: EventsImagesProps) => {
	console.log(images);
	return (
		<section className={cn(className)} {...props}>
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
							<button type="button" className="hover:animate-pulse font-bold text-2xl">
								<Icons.close />
							</button>
						</Gallery.ImageActions>
					</Gallery.Image>
				))}
			</Gallery>
		</section>
	);
};
