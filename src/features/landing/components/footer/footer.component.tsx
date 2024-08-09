import { Link } from "react-router-dom";

import { Separator } from "@/features/core/components/ui";
import { Heading, Logo } from "@/features/landing/components";

export const Footer = () => {
	return (
		<footer className="flex flex-col gap-10 px-20 py-10">
			<div className="flex justify-between items-start gap-20 py-14">
				<section className="flex-1 flex flex-col gap-5">
					<header className="text-white">
						<Logo />
						<p className="max-w-xs">Making a Difference, One Act of Kindness at a Time</p>
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
						<Heading as="h3" className="mb-5">
							Quick Links
						</Heading>
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
						<Heading as="h3" className="mb-5">
							Company
						</Heading>
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
						<Heading as="h3" size="lg">
							Have questions or want to get involved?
						</Heading>
						<Link to="#" className="block w-full py-5 bg-[#FF521A] text-white text-xl text-center font-medium">
							Contact us
						</Link>
					</article>
				</section>
			</div>

			<Separator className="bg-white/10 h-1" />

			<p className="text-white text-lg text-center">&copy; 2024 Athenea. All rights reserved.</p>
		</footer>
	);
};
