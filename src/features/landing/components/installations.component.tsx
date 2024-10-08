import { useGetInstallations } from "@/features/content/hooks";
import { Skeleton } from "@/features/core/components/ui";
import { Carousel, Heading, Paragraph, Section } from "@/features/landing/components";

export const Installations = () => {
	const { data, isLoading } = useGetInstallations();

	return (
		<Section variant="filled" className="flex flex-col gap-10 xl:gap-20">
			<Heading variant="display" position="centered">
				Nuestras Instalaciones
			</Heading>

			<Carousel>
				<Carousel.Content>
					{isLoading ? (
						<>
							<Carousel.Item>
								<Skeleton className="w-full h-[600px] object-cover select-none" />
							</Carousel.Item>
						</>
					) : (
						data?.map((instalation) => (
							<Carousel.Item key={instalation.id}>
								<img
									src={instalation.imageUrl}
									alt={`Imagen de la Instalación ${instalation.title}`}
									className="w-full max-h-[600px] object-cover select-none"
								/>
							</Carousel.Item>
						))
					)}
				</Carousel.Content>
			</Carousel>

			<article className="flex justify-center items-start gap-10">
				<article className="max-w-sm text-center">
					<Heading as="h3" variant="display" className="mb-5">
						+400
					</Heading>
					<Paragraph className="text-base xl:text-xl">
						Nuestra asociación prospera gracias a la ayuda y esfuerzo de más de 400 socios.
					</Paragraph>
				</article>
			</article>
		</Section>
	);
};
