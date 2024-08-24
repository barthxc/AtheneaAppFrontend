import { cn } from "@/features/core/lib/utils";
import { Heading, Skeleton } from "@/features/core/components/ui";

export interface GalleryProps extends React.HTMLAttributes<HTMLDivElement> {
	isLoading?: boolean;
}

export const Gallery = ({ isLoading, className, children, ...props }: GalleryProps) => {
	return (
		<div
			className={cn("w-full grid [grid-template-columns:repeat(auto-fill,minmax(250px,1fr))] gap-10", className)}
			{...props}>
			{isLoading ? <Gallery.Skeleton /> : children}
		</div>
	);
};

interface GallerySkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export const GallerySkeleton = ({ className, ...props }: GallerySkeletonProps) => {
	return Array.from({ length: 3 }).map((_, index) => (
		<div
			key={Symbol(`gallery_skeleton_key_${index}`).description}
			className={cn("flex items-center gap-5 w-full", className)}
			{...props}>
			<Skeleton className="w-full h-60" />
		</div>
	));
};

export interface GalleryImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export const GalleryImage = ({
	src,
	width = 250,
	height = 250,
	alt = "",
	className,
	children,
	...props
}: GalleryImageProps) => {
	return (
		<div className="relative">
			<img
				{...props}
				src={src}
				width={width}
				height={height}
				alt={alt}
				className={cn("w-full object-cover rounded-lg select-none block bg-white p-4", className)}
			/>
			{children}
		</div>
	);
};

export interface GalleryImageActionsProps extends React.HTMLAttributes<HTMLDivElement> {}

export const GalleryImageActions = ({ className, children, ...props }: GalleryImageActionsProps) => {
	return (
		<div
			className={cn("absolute top-0 left-0 z-10 w-full h-auto flex justify-end items-center p-2", className)}
			{...props}>
			{children}
		</div>
	);
};

export interface GalleryImageHeadingProps extends React.HTMLAttributes<HTMLDivElement> {}

export const GalleryImageHeading = ({ className, children, ...props }: GalleryImageHeadingProps) => {
	if (typeof children !== "string") {
		throw new Error("GalleryImageHeading children must be a string");
	}

	return <Heading className={cn("text-xl font-medium mt-2", className)} title={children} {...props} />;
};

Gallery.Skeleton = GallerySkeleton;
Gallery.Image = GalleryImage;
Gallery.ImageActions = GalleryImageActions;
Gallery.ImageHeading = GalleryImageHeading;
