import { Button } from "@/features/core/components/ui/button";
import { Calendar } from "@/features/core/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/features/core/components/ui/popover";
import { cn } from "@/features/core/lib/utils";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import type { DateRange, SelectRangeEventHandler } from "react-day-picker";

interface CalendarDateRangePickerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  onChangeDateRage: SelectRangeEventHandler;
  currentDate: DateRange | undefined;
}

export function CalendarDateRangePicker({
  className,
  onChangeDateRage,
  currentDate,
}: CalendarDateRangePickerProps) {
  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <div>
            <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base">
              Selecciona un rango de fechas
            </label>
            <Button
              id="date"
              variant={"outline"}
              className={cn(
                "w-[260px] justify-start text-left font-normal text-base flex h-12 rounded-md border border-input bg-muted/50 mt-2",
                !currentDate && "text-muted-foreground"
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
}
