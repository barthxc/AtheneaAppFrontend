import { Link } from "react-router-dom";

import { Separator } from "@/features/core/components/ui";

export const Hero = () => {
	return (
		<div className="flex justify-between items-stretch [&>*]:pt-24 [&>*]:pb-20">
			<section className="bg-[#FFE353] flex-1 flex flex-col gap-20 px-12">
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

			<section className="flex-[2] flex flex-col gap-14 px-12">
				<h2 className="text-white text-9xl font-display max-w-4xl">Changing Lives for the Better</h2>
				<img src="/hero.jpg" alt="" className="w-full max-w-screen-md h-[500px] object-cover" />
			</section>
		</div>
	);
};
