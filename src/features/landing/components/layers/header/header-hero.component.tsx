import { Separator } from "@/features/core/components/ui";
import { Heading, Link, Paragraph } from "@/features/landing/components";

export const Hero = () => {
	return (
		<div className="flex justify-between items-stretch [&>*]:pt-24 [&>*]:pb-20">
			<section className="bg-[#FFE353] flex-1 flex flex-col gap-20 px-12">
				<div className="flex flex-col gap-10">
					<article className="flex flex-col gap-4">
						<Heading as="h3">Donate Now</Heading>
						<Paragraph>
							Your financial contribution can make a real difference. Every dollar you donate goes directly toward our
							projects.
						</Paragraph>
						<Link to="#" className="font-medium text-base">
							Get started
						</Link>
					</article>

					<Separator className="bg-black" />

					<article className="flex flex-col gap-4">
						<Heading as="h3">Become a Volunteer</Heading>
						<Paragraph>
							Join our team of dedicated volunteers and actively participate in our projects and events. Your time and
							skills are invaluable.
						</Paragraph>
						<Link to="#" className="font-medium text-base">
							Get started
						</Link>
					</article>
				</div>
			</section>

			<section className="flex-[2] flex flex-col gap-14 px-12">
				<Heading variant="display" size="2xl" className="text-white">
					Changing Lives for the Better
				</Heading>
				<img src="/hero.jpg" alt="" className="w-full max-w-screen-md h-[500px] object-cover" />
			</section>
		</div>
	);
};
