import { Icons } from "@/features/core/components";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Heading } from "@/features/core/components/ui";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import { useEffect } from "react";

export function ContentPage() {
	return (
		<div>
			<Heading title="Gestor de eventos" className="mb-5" />
			<div>
				<DND />
			</div>
		</div>
	);
}

export function DND() {
	const contentItems = [
		{
			id: 0,
			title: "post 1",
			content: <div>asd</div>,
			order: 0,
		},
		{
			id: 1,
			title: "post 2",
			content: <div>asd 2</div>,
			order: 1,
		},
	];

	const [contentList, content, setContentItems] = useDragAndDrop<
		HTMLDivElement,
		{ title: string; content: JSX.Element }
	>(contentItems, {
		group: "contentList",
		dragHandle: ".content-handler",
		handleEnd: () => {
			const newContentItems = content.map((item, i) => ({ ...item, order: i }));
			setContentItems(newContentItems);
		},
	});

	useEffect(() => {
		console.table(content);
	}, [content]);

	return (
		<Accordion ref={contentList} type="single" collapsible className="flex flex-col gap-5">
			{content.map((todo: any) => (
				<AccordionItem key={todo.id} value={todo.id} className="bg-secondary px-5 rounded-lg max-w-2xl kanban-item">
					<div className="flex justify-start items-center gap-5">
						<Icons.drag className="cursor-move content-handler" />
						<AccordionTrigger>
							<Heading title={todo.title} className="text-xl" />
						</AccordionTrigger>
					</div>
					<AccordionContent className="grid grid-cols-4 gap-10 [&_h3]:text-lg">{todo.content}</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	);
}
