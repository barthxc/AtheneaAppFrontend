import { Icons } from "@/features/core/components";
import { Separator } from "@/features/core/components/ui";

import { Heading, Link, Paragraph } from "@/features/landing/components";

export const Hero = () => {
	return (
		<div className="flex flex-col-reverse xl:flex-row xl:justify-between xl:items-stretch [&>*]:pt-24 [&>*]:pb-20">
			<section className="bg-[#3BA6FF]  xl:text-[#0a1d2b] flex-1 flex flex-col gap-20 px-10 xl:px-14">
				<div className="flex flex-col gap-10 xl:gap-14">
					<article className="flex flex-col gap-4">
						<div className="flex justify-start gap-5 items-center">
							<Icons.donation size={80} className="text-[#0a1d2b]" />
							<Heading as="h3" className="text-[#0a1d2b]">
								Donar Ahora
							</Heading>
						</div>
						<Paragraph className="text-base xl:text-xl">
							Tu aporte financiero puede marcar una gran diferencia. Cada donación se destina directamente a nuestros
							proyectos, ayudándonos a construir un futuro mejor para todos.
						</Paragraph>
						<Link to="/donation" className="font-medium text-base text-[#0a1d2b]">
							Comienza Ahora
						</Link>
					</article>

					<Separator className="bg-black" />

					<article className="flex flex-col gap-4">
						<div className="flex justify-start gap-5 items-center">
							<Icons.heartHandshake size={80} className="text-[#0a1d2b]" />
							<Heading as="h3" className=" xl:text-[#0a1d2b]">
								Conviértete en Socio
							</Heading>
						</div>
						<Paragraph className="text-base xl:text-xl">
							Forma parte de nuestra comunidad y participa activamente en nuestros proyectos y actividades. Tu
							compromiso es clave para lograr nuestros objetivos.
						</Paragraph>
						<Link to="/contact" className="font-medium text-base text-[#0a1d2b]">
							Comienza Ahora
						</Link>
					</article>
					<Separator className="bg-black" />

					<article className="flex flex-col gap-4">
						<div className="flex justify-start gap-5 items-center">
							<Icons.smilePlus size={80} className="text-[#0a1d2b]" />
							<Heading as="h3" className="text-[#0a1d2b]">
								Conviértete en Voluntario
							</Heading>
						</div>
						<Paragraph className="text-base xl:text-xl">
							Únete a nuestro equipo de voluntarios apasionados y marca la diferencia con tu tiempo y habilidades.
						</Paragraph>
						<Link to="/contact" className="font-medium text-base text-[#0a1d2b]">
							Contáctanos
						</Link>
					</article>
				</div>
			</section>

			<section className="flex-[2] flex flex-col gap-10 xl:gap-14 px-10 xl:px-14  xl:bg-transparent">
				<Heading variant="display" size="2xl" className="text-white">
					Diversidad que nos une
				</Heading>
				<img
					src="/meet.webp"
					alt="Fotografía de Directiva y algunos socios en una fiesta de convivencia"
					className="w-full max-h-[600px] object-bottom object-contain max-w-screen-lg xl:object-cover brightness-125"
				/>
			</section>
		</div>
	);
};
