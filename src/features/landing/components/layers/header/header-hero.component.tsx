import { Icons } from "@/features/core/components";
import { Separator } from "@/features/core/components/ui";

import { Heading, Link, Paragraph } from "@/features/landing/components";

export const Hero = () => {
	return (
		<div className="flex flex-col-reverse xl:flex-row xl:justify-between xl:items-stretch [&>*]:pt-24 [&>*]:pb-20">
			<section className="bg-transparent xl:bg-[#3BA6FF] text-white xl:text-inherit flex-1 flex flex-col gap-20 px-14">
				<div className="flex flex-col gap-10">
					<article className="flex flex-col gap-4">
						<div className="flex justify-start gap-5 items-center">
							<Icons.donation size={80} />
							<Heading as="h3" className="text-white xl:text-inherit">
								Donar Ahora
							</Heading>
						</div>
						<Paragraph>
							Tu aporte financiero puede marcar una gran diferencia. Cada donación se destina directamente a nuestros
							proyectos, ayudándonos a construir un futuro mejor para todos.
						</Paragraph>
						<Link to="#" className="font-medium text-base">
							Comienza Ahora
						</Link>
					</article>

					<Separator className="bg-white xl:bg-black" />

					<article className="flex flex-col gap-4">
						<div className="flex justify-start gap-5 items-center">
							<Icons.heartHandshake size={80} />
							<Heading as="h3" className="text-white xl:text-inherit">
								Conviértete en Socio
							</Heading>
						</div>
						<Paragraph>
							Forma parte de nuestra comunidad y participa activamente en nuestros proyectos y actividades. Tu
							compromiso es clave para lograr nuestros objetivos.
						</Paragraph>
						<Link to="#" className="font-medium text-base">
							Comienza Ahora
						</Link>
					</article>
					<article className="flex flex-col gap-4">
						<div className="flex justify-start gap-5 items-center">
							<Icons.smilePlus size={80} />
							<Heading as="h3" className="text-white xl:text-inherit">
								Conviértete en Voluntario
							</Heading>
						</div>
						<Paragraph>
							Únete a nuestro equipo de voluntarios apasionados y marca la diferencia con tu tiempo y habilidades.
						</Paragraph>
						<Link to="#" className="font-medium text-base">
							Contáctanos
						</Link>
					</article>
				</div>
			</section>

			<section className="flex-[2] flex flex-col gap-14 px-14 bg-[#3BA6FF] xl:bg-transparent">
				<Heading variant="display" size="2xl" className="text-black xl:text-white">
					Diversidad que nos une
				</Heading>
				<img src="/hero.jpg" alt="" className="w-full max-w-screen-md h-96 xl:h-[500px] object-cover" />
			</section>
		</div>
	);
};
