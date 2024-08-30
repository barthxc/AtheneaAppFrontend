import { cn } from "@/features/core/lib/utils";
import { Heading } from "@/features/core/components/ui";
import { dateFormatter } from "@/features/core/utils";

import type { Content } from "@/features/content/types";
import { EventsContentEdit } from "@/features/content/components";

export interface EventsContentProps
	extends Omit<React.HTMLAttributes<HTMLDivElement>, "title" | "id">,
		Pick<Content, "title" | "date" | "description"> {
	contentId: string;
}

export const EventsContent = ({ contentId, title, date, description, className, ...props }: EventsContentProps) => {
	if (!title && !date && !description) {
		return null;
	}

	const defaultValues = { title, description };

	return (
		<div className={cn("bg-white p-5 rounded-lg flex justify-between gap-5", className)} {...props}>
			<ul className="flex-1">
				{title && (
					<li>
						<Heading title="Título" />
						<span className="text-lg font-medium pl-5">{title}</span>
					</li>
				)}
				{date && (
					<li>
						<Heading title="Fecha" />
						<span className="text-md pl-5">{dateFormatter(new Date(date))}</span>
					</li>
				)}
				{description && (
					<li>
						<Heading title="Descripción" />
						<span className="text-md pl-5">{description}</span>
					</li>
				)}
			</ul>

			<EventsContentEdit contentId={contentId} defaultValues={defaultValues} />
		</div>
	);
};
