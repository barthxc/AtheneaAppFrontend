// import MainCarousel from "../components/hero.component";

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
	Separator,
	Toaster,
} from "@/features/core/components/ui";
import { Footer } from "@/features/landing/components";
import Header from "@/features/core/layout/header";
import { Link } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";
import { Icons } from "@/features/core/components";

// import Footer from "../components/footer/footer.component";

export function LandingPage() {
	return (
		<div className="min-h-screen bg-[#0D5244]">
			{/*<Toaster />
			<Header />
			
			<h1 className="text-4xl ">
				Asociación de Discapacitados <span className="text-blue-500 font-bold">Athenea</span> Sin Ánimo de Lucro
			</h1>
			<Footer />*/}

			<header>
				<div className="flex justify-between items-center absolute top-0 left-0 w-full h-20">
					<div className="flex-1 flex justify-start items-center px-12 h-full">
						<h2 className="text-2xl font-semibold">Athenea</h2>
					</div>
					<nav className="flex-[2] px-12 flex justify-between items-center h-full">
						<ul className="flex justify-start items-center gap-10 text-white">
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="#about-us">About us</Link>
							</li>
							<li>
								<Link to="#campaigns">Campaigns</Link>
							</li>
							<li>
								<Link to="#blog">Blog</Link>
							</li>
							<li>
								<Link to="#contact">Contact</Link>
							</li>
						</ul>
						<Link to="/donate" className="py-2 px-5 bg-white text-black text-lg font-medium inline-block">
							Donate
						</Link>
					</nav>
				</div>

				<div className="flex justify-between items-stretch [&>*]:pt-24 [&>*]:pb-20">
					<section className="bg-[#FFE353] flex-1 flex flex-col gap-20 px-12">
						<div className="flex flex-col gap-10">
							<article className="flex flex-col gap-4">
								<h3 className="text-2xl font-semibold">Donate Now</h3>
								<p>
									Your financial contribution can make a real difference. Every dollar you donate goes directly toward
									our projects.
								</p>
								<Link to="#" className="font-medium text-base">
									Get started
								</Link>
							</article>

							<Separator className="bg-black" />

							<article className="flex flex-col gap-4">
								<h3 className="text-2xl font-semibold">Become a Volunteer</h3>
								<p>
									Join our team of dedicated volunteers and actively participate in our projects and events. Your time
									and skills are invaluable.
								</p>
								<Link to="#" className="font-medium text-base">
									Get started
								</Link>
							</article>
						</div>
					</section>

					<section className="flex-[2] flex flex-col gap-14 px-12">
						<h2 className="text-white text-9xl font-display max-w-4xl">Changing Lives for the Better</h2>
						<img src="/hero.jpg" alt="" className="w-full max-w-screen-md h-[500px] object-cover" />
					</section>
				</div>
			</header>

			<main>
				<section className="bg-[#FFFDF1] p-32 flex flex-col gap-20">
					<h2 className="text-black text-8xl text-center font-display max-w-4xl mx-auto">
						Stories of Hope and Transformation
					</h2>
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
							<h3 className="font-display text-8xl mb-5">30+</h3>
							<p>Our charity organization thrives on the remarkable dedication of over 30 members.</p>
						</article>
					</section>
				</section>

				<section className="p-32 flex justify-between items-center gap-20">
					<figure className="flex-1">
						<img src="/hero.jpg" alt="" className="w-full h-[700px] object-cover" />
					</figure>
					<article className="flex flex-col gap-10 flex-1">
						<h2 className="font-display text-8xl text-white max-w-2xl">Supporting Those in Need</h2>
						<p className="text-white leading-relaxed">
							At Athenea, we believe that every act of kindness has the power to transform lives and make the world a
							better place. Founded in 2019, we are a passionate community of volunteers and donors dedicated to
							creating positive change in the world.
						</p>
						<Link to="#" className="py-4 px-8 bg-[#FF521A] text-white text-lg font-medium w-max">
							Learn More
						</Link>
					</article>
				</section>

				<section className="bg-[#FFFDF1] p-32 flex flex-col gap-20">
					<h2 className="text-black text-8xl text-center font-display max-w-4xl mx-auto">Donate to Make an Impact</h2>
					<div className="grid grid-cols-4 justify-center items-start">
						<article className="border border-[#D5D3C8] hover:bg-white p-5 flex flex-col justify-center items-start gap-3">
							<img src="/hero.jpg" alt="" className="w-full max-h-80 object-cover" />
							<h3 className="text-2xl font-semibold">Quenching Thirst, Saving Lives</h3>
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
								<h2 className="font-display text-8xl text-white max-w-2xl">Together, We Change Lives</h2>
								<p className="text-white leading-loose">
									Over the years, Athenea has made a significant impact in the lives of countless individuals and
									communities. Here are some key highlights of our work that we have done:
								</p>
							</header>

							<ul className="[&_h3]:text-white [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:mb-2 [&_p]:leading-loose [&_p]:text-white flex flex-col gap-5">
								<li>
									<h3>Education for All</h3>
									<p>
										We've provided education and scholarships to X underprivileged children, empowering them to break
										the cycle of poverty.
									</p>
								</li>
								<li>
									<h3>Access to Clean Water</h3>
									<p>
										Through our water projects, we've brought clean and safe drinking water to X communities, reducing
										waterborne diseases.
									</p>
								</li>
								<li>
									<h3>Empowering Women</h3>
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
						<h2 className="text-8xl text-center font-display max-w-4xl mx-auto">Our Team</h2>
						<p className="leading-loose text-center max-w-xl mx-auto">
							Meet the dedicated individuals who drive Athenea forward. Our team is made up of passionate individuals
							with diverse backgrounds and expertise
						</p>
					</header>

					<div className="grid grid-cols-4 justify-start gap-10">
						<article className="bg-[#FFD9CD] max-w-sm flex flex-col relative">
							<header className="flex flex-col gap-2 p-5">
								<h3 className="font-medium text-2xl">David Warner</h3>
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
								<h3 className="font-medium text-2xl">David Warner</h3>
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
					<h2 className="text-8xl font-display max-w-2xl mx-auto flex-1">Frequently Asked Question</h2>
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
									various donation options, including one-time donations, monthly contributions, and even opportunities
									to sponsor specific programs or individuals.
								</p>
							</AccordionContent>
						</AccordionItem>

						<AccordionItem value="item-2">
							<AccordionTrigger className="font-medium text-2xl">Is my donation tax-deductible?</AccordionTrigger>
							<AccordionContent asChild>
								<p>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione sed magni earum corporis vero
									eveniet itaque blanditiis aut cupiditate quam? Corrupti, corporis. Eaque voluptatem, esse veritatis
									commodi veniam sint id nobis officia eligendi placeat ratione explicabo in, eius fugit quisquam.
								</p>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</section>

				<footer className="flex flex-col gap-10 px-20 py-10">
					<div className="flex justify-between items-start gap-20 py-14">
						<section className="flex-1 flex flex-col gap-5">
							<header className="text-white">
								<h3 className="text-2xl font-semibold mb-5">Athenea</h3>
								<p className="text-lg max-w-xs">Making a Difference, One Act of Kindness at a Time</p>
							</header>

							<ul className="flex justify-start flex-wrap gap-2 text-white max-w-xs">
								<li>
									<Link to="#" className="bg-white/50 hover:bg-[#FF521A] w-10 h-10 flex justify-center items-center">
										FB
									</Link>
								</li>
								<li>
									<Link to="#" className="bg-white/50 hover:bg-[#FF521A] w-10 h-10 flex justify-center items-center">
										IN
									</Link>
								</li>
							</ul>
						</section>

						<section className="flex-1 flex justify-between items-start gap-20">
							<article className="text-white">
								<h3 className="text-2xl font-semibold mb-5">Quick Links</h3>
								<ul className="flex flex-col gap-5 text-lg">
									<li>
										<Link to="#">Home</Link>
									</li>
									<li>
										<Link to="#">About us</Link>
									</li>
									<li>
										<Link to="#">Campaigns</Link>
									</li>
									<li>
										<Link to="#">Blog</Link>
									</li>
									<li>
										<Link to="#">Contact</Link>
									</li>
								</ul>
							</article>

							<article className="text-white">
								<h3 className="text-2xl font-semibold mb-5">Company</h3>
								<ul className="flex flex-col gap-5 text-lg">
									<li>
										<Link to="#">Terms & Conditions</Link>
									</li>
									<li>
										<Link to="#">Privacy Policy</Link>
									</li>
									<li>
										<Link to="#">Cookie Preferences</Link>
									</li>
								</ul>
							</article>

							<article className="px-5 py-14 bg-[#FFD502] flex flex-col justify-between gap-14 max-w-sm">
								<h3 className="text-4xl text-black font-semibold">Have questions or want to get involved?</h3>
								<Link to="#" className="block w-full py-5 bg-[#FF521A] text-white text-xl text-center font-medium">
									Contact us
								</Link>
							</article>
						</section>
					</div>

					<Separator className="bg-white/10 h-1" />

					<p className="text-white text-lg text-center">&copy; 2024 Athenea. All rights reserved.</p>
				</footer>
			</main>
		</div>
	);
}