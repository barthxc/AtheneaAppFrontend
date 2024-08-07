// import MainCarousel from "../components/hero.component";

import {
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

			<header className="flex justify-start items-stretch">
				<section className="bg-[#F3D047] flex-1 flex flex-col gap-20 py-5 px-12">
					<div>
						<h2 className="text-2xl font-semibold">Athenea</h2>
					</div>

					<div className="flex flex-col gap-10">
						<article className="flex flex-col gap-4">
							<h3 className="text-2xl font-semibold">Donate Now</h3>
							<p>
								Your financial contribution can make a real difference. Every dollar you donate goes directly toward our
								projects.
							</p>
							<Link to="#" className="font-medium text-base">
								Get started
							</Link>
						</article>

						<Separator className="bg-black" />

						<article className="flex flex-col gap-4">
							<h3 className="text-2xl font-semibold">Become a Volunteer</h3>
							<p>
								Join our team of dedicated volunteers and actively participate in our projects and events. Your time and
								skills are invaluable.
							</p>
							<Link to="#" className="font-medium text-base">
								Get started
							</Link>
						</article>
					</div>
				</section>

				<section className="flex-[2.5] flex flex-col gap-14 py-5 px-12">
					<nav className="flex justify-between items-center">
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

					<h2 className="text-white text-9xl font-display max-w-4xl">Changes Lives for the Better</h2>
					<img src="/hero.jpg" alt="" className="w-full max-w-screen-md h-96 object-cover" />
				</section>
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
							<h3 className="text-2xl font-medium">Quenching Thirst, Saving Lives</h3>
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
			</main>
		</div>
	);
}
