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

import { Button, Heading, Paragraph, Progress } from "@/features/landing/components";
import { cn } from "@/features/core/lib/utils";

export const MainContent = () => {
	return (
		<main>
			<section className="bg-[#FFFDF1] p-16 xl:p-32 flex flex-col gap-10 xl:gap-20">
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
					<CarouselPreviousNext previous />
					<CarouselPreviousNext next />
				</Carousel>

				<section className="flex justify-center items-start gap-10">
					<article className="max-w-sm text-center">
						<Heading as="h3" variant="display" className="mb-5">
							30+
						</Heading>
						<Paragraph>Our charity organization thrives on the remarkable dedication of over 30 members.</Paragraph>
					</article>
				</section>
			</section>

			<section className="p-16 xl:p-32 flex flex-col xl:flex-row xl:justify-between xl:items-center gap-10 xl:gap-20">
				<figure className="flex-1">
					<img src="/hero.jpg" alt="" className="w-full h-96 xl:h-[700px] object-cover" />
				</figure>
				<article className="flex flex-col gap-5 xl:gap-10 flex-1">
					<Heading variant="display" className="text-white max-w-2xl">
						Supporting Those in Need
					</Heading>
					<Paragraph className="text-white">
						At Athenea, we believe that every act of kindness has the power to transform lives and make the world a
						better place. Founded in 2019, we are a passionate community of volunteers and donors dedicated to creating
						positive change in the world.
					</Paragraph>
					<Button asChild variant="accent" size="lg" className="w-max">
						<Link to="#">Learn More</Link>
					</Button>
				</article>
			</section>

			<section className="bg-[#FFFDF1] p-16 xl:p-32 flex flex-col gap-10 xl:gap-20">
				<Heading variant="display" position="centered">
					Donate to Make an Impact
				</Heading>
				<div className="grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] xl:[grid-template-columns:repeat(auto-fit,350px)] place-items-center gap-10">
					<article className="border border-[#D5D3C8] hover:bg-white p-5 flex flex-col justify-center items-start gap-3">
						<img src="/hero.jpg" alt="" className="w-full max-h-80 object-cover" />
						<Heading as="h3">Quenching Thirst, Saving Lives</Heading>
						<Paragraph>
							Join us in our mission to provide pure, clean and safe drinking water to communities in need around the
							world.
						</Paragraph>

						<div className="flex flex-col gap-2 w-full">
							<div className="flex justify-between items-center font-medium text-lg">
								<Paragraph as="span">$8,520</Paragraph>
								<Paragraph as="span">50%</Paragraph>
							</div>
							<Paragraph as="span" size="sm" className="uppercase">
								Raised of $17,000
							</Paragraph>
							<Progress value={50} />
						</div>

						<Button className="mt-6" variant="ghost">
							Donate Now
						</Button>
					</article>
				</div>

				<Button asChild variant="accent" size="lg" className="w-max" position="centered">
					<Link to="#">View All Campaigns</Link>
				</Button>
			</section>

			<section className="p-16 xl:p-32">
				<article className="flex flex-col xl:flex-row xl:justify-between xl:items-center gap-10 xl:gap-20">
					<div className="flex-1 flex flex-col gap-10">
						<header className="flex flex-col gap-5">
							<Heading variant="display" className="text-white max-w-2xl">
								Together, We Change Lives
							</Heading>
							<Paragraph className="text-white">
								Over the years, Athenea has made a significant impact in the lives of countless individuals and
								communities. Here are some key highlights of our work that we have done:
							</Paragraph>
						</header>

						<ul className="[&_h3]:text-white [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:mb-2 [&_p]:text-white flex flex-col gap-5">
							<li>
								<Heading as="h3" className="text-white">
									Education for All
								</Heading>
								<Paragraph>
									We've provided education and scholarships to X underprivileged children, empowering them to break the
									cycle of poverty.
								</Paragraph>
							</li>
							<li>
								<Heading as="h3" className="text-white">
									Access to Clean Water
								</Heading>
								<Paragraph>
									Through our water projects, we've brought clean and safe drinking water to X communities, reducing
									waterborne diseases.
								</Paragraph>
							</li>
							<li>
								<Heading as="h3" className="text-white">
									Empowering Women
								</Heading>
								<Paragraph>
									We've supported X women in starting their own businesses, fostering economic independence and gender
									equality.
								</Paragraph>
							</li>
						</ul>
					</div>

					<div className="flex-1 flex flex-col gap-10">
						<img src="/hero.jpg" alt="" className="h-96 xl:h-[450px] object-cover" />
						<div className="grid grid-cols-2 gap-10">
							<img src="/hero.jpg" alt="" className="aspect-square object-cover" />
							<img src="/hero.jpg" alt="" className="aspect-square object-cover rounded-full" />
						</div>
					</div>
				</article>
			</section>

			<section className="bg-[#FFFDF1] p-16 xl:p-32 flex flex-col gap-10 xl:gap-20">
				<header className="flex flex-col gap-5">
					<Heading variant="display" position="centered">
						Our Team
					</Heading>
					<Paragraph className="text-center max-w-xl mx-auto">
						Meet the dedicated individuals who drive Athenea forward. Our team is made up of passionate individuals with
						diverse backgrounds and expertise
					</Paragraph>
				</header>

				<div className="grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] xl:[grid-template-columns:repeat(auto-fit,350px)] place-items-center gap-10">
					<article className="bg-[#FFD9CD] max-w-sm flex flex-col relative">
						<header className="flex flex-col gap-2 p-5">
							<Heading as="h3">David Warner</Heading>
							<Paragraph as="span">Founder</Paragraph>
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
							<Paragraph as="span">Founder</Paragraph>
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

			<section className="bg-[#FFFDF1] p-16 xl:p-32 flex flex-col xl:flex-row xl:justify-between xl:items-start gap-10 xl:gap-20">
				<Heading variant="display" className="flex-1 max-w-2xl">
					Frequently Asked Question
				</Heading>
				<Accordion type="multiple" className="flex-1 [&_svg]:text-black [&_svg]:w-7 [&_svg]:h-7">
					<AccordionItem value="item-1">
						<AccordionTrigger className="font-medium text-xl xl:text-2xl text-left">
							How can I make a donation to your charity?
						</AccordionTrigger>
						<AccordionContent>
							<Paragraph>
								You can make a donation to our charity by clicking the "Donate Now" button on our website. We offer
								various donation options, including one-time donations, monthly contributions, and even opportunities to
								sponsor specific programs or individuals.
							</Paragraph>
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-2">
						<AccordionTrigger className="font-medium text-xl xl:text-2xl text-left">
							Is my donation tax-deductible?
						</AccordionTrigger>
						<AccordionContent>
							<Paragraph>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione sed magni earum corporis vero eveniet
								itaque blanditiis aut cupiditate quam? Corrupti, corporis. Eaque voluptatem, esse veritatis commodi
								veniam sint id nobis officia eligendi placeat ratione explicabo in, eius fugit quisquam.
							</Paragraph>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</section>
		</main>
	);
};

export interface CarouselPreviousNextProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	previous?: boolean;
	next?: boolean;
}

const CarouselPreviousNext = ({ previous, next, className, ...restProps }: CarouselPreviousNextProps) => {
	const props = {
		className: cn(
			"w-10 h-10 xl:w-16 xl:h-16 rounded-none border-none bg-[#FF521A] hover:bg-[#FF521A] disabled:bg-[#FFFDF1]/50 [&>svg]:text-white [&>svg]:w-6 [&>svg]:h-6",
			previous ? "xl:translate-x-4" : next ? "xl:-translate-x-4" : null,
			className,
		),
		...restProps,
	};

	if (previous) {
		return <CarouselPrevious {...props} />;
	}

	return <CarouselNext {...props} />;
};
