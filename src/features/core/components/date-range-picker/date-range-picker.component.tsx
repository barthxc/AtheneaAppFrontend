import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { es } from "date-fns/locale";

import { cn } from "@/features/core/lib/utils";
import type { CalendarDateRangePickerProps } from "@/features/core/components";
import { Button, Calendar, Popover, PopoverContent, PopoverTrigger } from "@/features/core/components/ui";

export const CalendarDateRangePicker = ({
	label = "Selecciona un rango de fechas",
	className,
	onChangeDateRage,
	currentDate,
}: CalendarDateRangePickerProps) => {
	return (
		<div className={cn("grid gap-2", className)}>
			<Popover>
				<PopoverTrigger asChild>
					<div>
						<label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base">
							{label}
						</label>
						<Button
							id="date"
							variant={"outline"}
							// Desabilitado porque trigerea la petición
							disabled={true}
							className={cn(
								"w-[260px] justify-start text-left font-normal text-base flex h-12 rounded-lg border border-input bg-muted/50 mt-2",
								!currentDate && "text-muted-foreground",
							)}>
							<CalendarIcon className="mr-2 h-4 w-4" />
							{currentDate?.from ? (
								currentDate.to ? (
									<>
										{format(currentDate.from, "LLL dd, y", { locale: es })} -{" "}
										{format(currentDate.to, "LLL dd, y", { locale: es })}
									</>
								) : (
									format(currentDate.from, "LLL dd, y", { locale: es })
								)
							) : (
								<span>Selecciona fechas</span>
							)}
						</Button>
					</div>
				</PopoverTrigger>
				<PopoverContent className="w-auto p-0" align="end">
					<Calendar
						initialFocus
						mode="range"
						defaultMonth={currentDate?.from}
						selected={currentDate}
						onSelect={onChangeDateRage}
						numberOfMonths={2}
						locale={es}
					/>
				</PopoverContent>
			</Popover>
		</div>
	);
};
