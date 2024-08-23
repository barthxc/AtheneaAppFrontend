import { addDays } from "date-fns";
import { useState } from "react";
import type { DateRange, SelectRangeEventHandler } from "react-day-picker";

import { Button, Form, Input } from "@/features/core/components/ui";
import { FormField } from "@/features/core/components/forms";
import { CalendarDateRangePicker } from "@/features/core/components";
import type { CalendarFormViewProps } from "@/features/calendar/types";

export const CalendarFormView = ({
  loading,
  form,
  onSubmit,
}: CalendarFormViewProps) => {
  const action = "Crear";
  const today = new Date();

  const [date, setDate] = useState<DateRange | undefined>({
    from: today,
    to: addDays(today, 0),
  });

  const onChangeDateRange: SelectRangeEventHandler = (data) => {
    setDate(data);
  };

  const handleSubmit = (formData: any) => {
    onSubmit({ ...formData, date });
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="w-full space-y-8">
          <div className="gap-8 md:grid md:grid-cols-3 items-end">
            <FormField
              formControl={form.control}
              name="title"
              label="Título"
              render={{
                renderProp: ({ field }) => (
                  <Input disabled={loading} placeholder="Título" {...field} />
                ),
              }}
            />
            <CalendarDateRangePicker
              onChangeDateRage={onChangeDateRange}
              currentDate={date}
            />
            <Button
              disabled={loading}
              className="mr-auto space-y-2"
              type="submit">
              {action}
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};
