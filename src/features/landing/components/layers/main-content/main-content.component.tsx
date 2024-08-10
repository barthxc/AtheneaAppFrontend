import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";

import { Icons } from "@/features/core/components";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/features/core/components/ui";

import { Heading } from "@/features/landing/components";

export const MainContent = () => {
	return (
		<main>
			<section className="bg-[#FFFDF1] p-32 flex flex-col gap-20">
				<Heading variant="display" position="centered">
					Stories of Hope and Transformation
				</Heading>
				<Carousel
					opts={{ loop: false }}
					plugins={[
						Autoplay({
							delay: 3000,
						}),
					]}>
					<CarouselContent>
						<CarouselItem>
							<img src="/hero.jpg" alt="" className="w-full max-h-[600px] object-cover select-none" />
						</CarouselItem>

						<CarouselItem>
							<img src="/hero.jpg" alt="" className="w-full max-h-[600px] object-cover select-none" />
						</CarouselItem>

						<CarouselItem>
							<img src="/hero.jpg" alt="" className="w-full max-h-[600px] object-cover select-none" />
						</CarouselItem>
					</CarouselContent>
					<CarouselPrevious className="translate-x-4 w-16 h-16 rounded-none border-none bg-[#FF521A] hover:bg-[#FF521A] disabled:bg-[#FFFDF1]/50 [&>svg]:text-white [&>svg]:w-6 [&>svg]:h-6" />
					<CarouselNext className="-translate-x-4 w-16 h-16 rounded-none border-none bg-[#FF521A] hover:bg-[#FF521A] disabled:bg-[#FFFDF1]/50 [&>svg]:text-white [&>svg]:w-6 [&>svg]:h-6" />
				</Carousel>

				<section className="flex justify-center items-start gap-10">
					<article className="max-w-sm text-center">
						<Heading as="h3" variant="display" className="mb-5">
							30+
						</Heading>
						<p>Our charity organization thrives on the remarkable dedication of over 30 members.</p>
					</article>
				</section>
			</section>

			<section className="p-32 flex justify-between items-center gap-20">
				<figure className="flex-1">
					<img src="/hero.jpg" alt="" className="w-full h-[700px] object-cover" />
				</figure>
				<article className="flex flex-col gap-10 flex-1">
					<Heading variant="display" className="text-white max-w-2xl">
						Supporting Those in Need
					</Heading>
					<p className="text-white leading-relaxed">
						At Athenea, we believe that every act of kindness has the power to transform lives and make the world a
						better place. Founded in 2019, we are a passionate community of volunteers and donors dedicated to creating
						positive change in the world.
					</p>
					<Link to="#" className="py-4 px-8 bg-[#FF521A] text-white text-lg font-medium w-max">
						Learn More
					</Link>
				</article>
			</section>

			<section className="bg-[#FFFDF1] p-32 flex flex-col gap-20">
				<Heading variant="display" position="centered">
					Donate to Make an Impact
				</Heading>
				<div className="grid grid-cols-4 justify-center items-start">
					<article className="border border-[#D5D3C8] hover:bg-white p-5 flex flex-col justify-center items-start gap-3">
						<img src="/hero.jpg" alt="" className="w-full max-h-80 object-cover" />
						<Heading as="h3">Quenching Thirst, Saving Lives</Heading>
						<p>
							Join us in our mission to provide pure, clean and safe drinking water to communities in need around the
							world.
						</p>

						<div className="flex flex-col gap-2 w-full">
							<div className="flex justify-between items-center font-medium text-lg">
								<span>$8,520</span>
								<span>50%</span>
							</div>
							<span className="uppercase text-sm">Raised of $17,000</span>
							<div className="w-full h-3 rounded-lg bg-[#E6EDEB] relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-2/4 before:h-full before:bg-[#10A476] before:rounded-tr-lg before:rounded-br-lg" />
						</div>

						<button type="button" className="px-4 py-2 mt-6 border border-black hover:bg-[#FFE353] text-black">
							Donate Now
						</button>
					</article>
				</div>

				<Link to="#" className="py-4 px-8 mx-auto bg-[#FF521A] text-white text-lg font-medium w-max">
					View All Campaigns
				</Link>
			</section>

			<section className="p-32">
				<article className="flex justify-between items-center gap-20">
					<div className="flex-1 flex flex-col gap-10">
						<header className="flex flex-col gap-5">
							<Heading variant="display" className="text-white max-w-2xl">
								Together, We Change Lives
							</Heading>
							<p className="text-white leading-loose">
								Over the years, Athenea has made a significant impact in the lives of countless individuals and
								communities. Here are some key highlights of our work that we have done:
							</p>
						</header>

						<ul className="[&_h3]:text-white [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:mb-2 [&_p]:leading-loose [&_p]:text-white flex flex-col gap-5">
							<li>
								<Heading as="h3" className="text-white">
									Education for All
								</Heading>
								<p>
									We've provided education and scholarships to X underprivileged children, empowering them to break the
									cycle of poverty.
								</p>
							</li>
							<li>
								<Heading as="h3" className="text-white">
									Access to Clean Water
								</Heading>
								<p>
									Through our water projects, we've brought clean and safe drinking water to X communities, reducing
									waterborne diseases.
								</p>
							</li>
							<li>
								<Heading as="h3" className="text-white">
									Empowering Women
								</Heading>
								<p>
									We've supported X women in starting their own businesses, fostering economic independence and gender
									equality.
								</p>
							</li>
						</ul>
					</div>

					<div className="flex-1 flex flex-col gap-10">
						<img src="/hero.jpg" alt="" className="h-[450px] object-cover" />
						<div className="grid grid-cols-2 gap-10">
							<img src="/hero.jpg" alt="" className="aspect-square object-cover" />
							<img src="/hero.jpg" alt="" className="aspect-square object-cover rounded-full" />
						</div>
					</div>
				</article>
			</section>

			<section className="bg-[#FFFDF1] p-32 flex flex-col gap-20">
				<header className="flex flex-col gap-5">
					<Heading variant="display" position="centered">
						Our Team
					</Heading>
					<p className="leading-loose text-center max-w-xl mx-auto">
						Meet the dedicated individuals who drive Athenea forward. Our team is made up of passionate individuals with
						diverse backgrounds and expertise
					</p>
				</header>

				<div className="grid grid-cols-4 justify-start gap-10">
					<article className="bg-[#FFD9CD] max-w-sm flex flex-col relative">
						<header className="flex flex-col gap-2 p-5">
							<Heading as="h3">David Warner</Heading>
							<span>Founder</span>
						</header>
						<img src="/hero.jpg" alt="" className="w-full h-[400px] object-cover" />
						<Link
							to="#"
							className="w-16 h-16 bg-white hover:bg-[#FFD9CD] p-2 flex justify-center items-center absolute bottom-5 left-5">
							<Icons.arrowRight />
						</Link>
					</article>

					<article className="bg-[#C9FFE1] max-w-sm flex flex-col relative">
						<header className="flex flex-col gap-2 p-5">
							<Heading as="h3">David Warner</Heading>
							<span>Founder</span>
						</header>
						<img src="/hero.jpg" alt="" className="w-full h-[400px] object-cover" />
						<Link
							to="#"
							className="w-16 h-16 bg-white hover:bg-[#C9FFE1] p-2 flex justify-center items-center absolute bottom-5 left-5">
							<Icons.arrowRight />
						</Link>
					</article>
				</div>
			</section>

			<section className="bg-[#FFFDF1] p-32 flex justify-between items-start gap-20">
				<Heading variant="display" className="flex-1 max-w-2xl">
					Frequently Asked Question
				</Heading>
				<Accordion
					type="multiple"
					className="flex-1 [&_svg]:text-black [&_svg]:w-7 [&_svg]:h-7 [&_p]:leading-loose [&_p]:text-base">
					<AccordionItem value="item-1">
						<AccordionTrigger className="font-medium text-2xl">
							How can I make a donation to your charity?
						</AccordionTrigger>
						<AccordionContent asChild>
							<p>
								You can make a donation to our charity by clicking the "Donate Now" button on our website. We offer
								various donation options, including one-time donations, monthly contributions, and even opportunities to
								sponsor specific programs or individuals.
							</p>
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-2">
						<AccordionTrigger className="font-medium text-2xl">Is my donation tax-deductible?</AccordionTrigger>
						<AccordionContent asChild>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione sed magni earum corporis vero eveniet
								itaque blanditiis aut cupiditate quam? Corrupti, corporis. Eaque voluptatem, esse veritatis commodi
								veniam sint id nobis officia eligendi placeat ratione explicabo in, eius fugit quisquam.
							</p>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</section>
		</main>
	);
};
