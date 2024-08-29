import { Section, Heading, Paragraph, Carousel } from "@/features/landing/components";

export function AboutPage() {
	return (
		<Section className="!pt-[8.5rem]">
			<Heading variant="display" position="centered" className="pb-20">
				Sobre Nosotros
			</Heading>
			<div className="flex flex-col justify-center items-center gap-10">
				<article className="flex items-center justify-center flex-col gap-20 xl:flex-row">
					<div className="flex-1">
						<Paragraph className="text-xl xl:text-3xl">Título 23/02/1995</Paragraph>
						<Paragraph className="text-base xl:text-xl">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, eum porro consequuntur beatae harum
							illum, repudiandae nesciunt obcaecati, ducimus blanditiis cumque repellat cupiditate illo. Ullam dolorem
							nam facilis consequatur asperiores. Iste, ratione quod laudantium quasi vitae nam harum nesciunt maiores
							necessitatibus quam sapiente, velit porro! Aspernatur quo tenetur molestiae quibusdam, suscipit, corrupti
							explicabo debitis illo totam praesentium soluta enim aliquam! Omnis amet dolorum magnam quo voluptatem at,
							ad quod quibusdam itaque ratione exercitationem repellat ab maxime nisi asperiores tempora eos. Nemo
							aperiam repellendus adipisci cupiditate ullam iste labore, unde asperiores! Iusto excepturi minima
							blanditiis porro nisi earum et consequatur fugit voluptatibus ab fuga impedit, consequuntur veniam
							exercitationem tempore consectetur corrupti ducimus debitis
						</Paragraph>
					</div>
					<Carousel className="flex-[2]">
						<Carousel.Content>
							<Carousel.Item>
								<img src="/test.jpg" alt="" className="w-full  object-cover select-none" />
							</Carousel.Item>
							<Carousel.Item>
								<img src="/test.jpg" alt="" className="w-full  object-cover select-none" />
							</Carousel.Item>
							<Carousel.Item>
								<img src="/test.jpg" alt="" className="w-full  object-cover select-none" />
							</Carousel.Item>
						</Carousel.Content>
					</Carousel>
				</article>
				<article className="flex items-center justify-center flex-col gap-20 xl:flex-row-reverse">
					<div className="flex-1">
						<Paragraph className="text-xl xl:text-3xl">Título 23/02/1995</Paragraph>
						<Paragraph className="text-base xl:text-xl">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, eum porro consequuntur beatae harum
							illum, repudiandae nesciunt obcaecati, ducimus blanditiis cumque repellat cupiditate illo. Ullam dolorem
							nam facilis consequatur asperiores. Iste, ratione quod laudantium quasi vitae nam harum nesciunt maiores
							necessitatibus quam sapiente, velit porro! Aspernatur quo tenetur molestiae quibusdam, suscipit, corrupti
							explicabo debitis illo totam praesentium soluta enim aliquam! Omnis amet dolorum magnam quo voluptatem at,
							ad quod quibusdam itaque ratione exercitationem repellat ab maxime nisi asperiores tempora eos. Nemo
							aperiam repellendus adipisci cupiditate ullam iste labore, unde asperiores! Iusto excepturi minima
							blanditiis porro nisi earum et consequatur fugit voluptatibus ab fuga impedit, consequuntur veniam
							exercitationem tempore consectetur corrupti ducimus debitis
						</Paragraph>
					</div>
					<Carousel className="flex-[2]">
						<Carousel.Content>
							<Carousel.Item>
								<img src="/test.jpg" alt="" className="w-full  object-cover select-none" />
							</Carousel.Item>
							<Carousel.Item>
								<img src="/test.jpg" alt="" className="w-full  object-cover select-none" />
							</Carousel.Item>
							<Carousel.Item>
								<img src="/test.jpg" alt="" className="w-full  object-cover select-none" />
							</Carousel.Item>
						</Carousel.Content>
					</Carousel>
				</article>
				<article className="flex items-center justify-center flex-col gap-20 xl:flex-row">
					<div className="flex-1">
						<Paragraph className="text-xl xl:text-3xl">Título 23/02/1995</Paragraph>
						<Paragraph className="text-base xl:text-xl">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, eum porro consequuntur beatae harum
							illum, repudiandae nesciunt obcaecati, ducimus blanditiis cumque repellat cupiditate illo. Ullam dolorem
							nam facilis consequatur asperiores. Iste, ratione quod laudantium quasi vitae nam harum nesciunt maiores
							necessitatibus quam sapiente, velit porro! Aspernatur quo tenetur molestiae quibusdam, suscipit, corrupti
							explicabo debitis illo totam praesentium soluta enim aliquam! Omnis amet dolorum magnam quo voluptatem at,
							ad quod quibusdam itaque ratione exercitationem repellat ab maxime nisi asperiores tempora eos. Nemo
							aperiam repellendus adipisci cupiditate ullam iste labore, unde asperiores! Iusto excepturi minima
							blanditiis porro nisi earum et consequatur fugit voluptatibus ab fuga impedit, consequuntur veniam
							exercitationem tempore consectetur corrupti ducimus debitis
						</Paragraph>
					</div>
					<Carousel className="flex-[2]">
						<Carousel.Content>
							<Carousel.Item>
								<img src="/test.jpg" alt="" className="w-full  object-cover select-none" />
							</Carousel.Item>
							<Carousel.Item>
								<img src="/test.jpg" alt="" className="w-full  object-cover select-none" />
							</Carousel.Item>
							<Carousel.Item>
								<img src="/test.jpg" alt="" className="w-full  object-cover select-none" />
							</Carousel.Item>
						</Carousel.Content>
					</Carousel>
				</article>
			</div>
		</Section>
	);
}
