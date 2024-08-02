import { Trash } from "lucide-react";

import {
  Button,
  Form,
  Heading,
  Input,
  Separator,
} from "@/features/core/components/ui";
import { FormField } from "@/features/core/components/forms";
import { ConfirmModal } from "@/features/core/components/modal";
import { CalendarDateRangePicker } from "@/features/core/components/date-range-picker";

import type { CalendarFormViewProps } from "@/features/calendar/types";
import type { DateRange, SelectRangeEventHandler } from "react-day-picker";
import { addDays } from "date-fns";
import { useState } from "react";

export const CalendarFormView = ({
  loading,
  showModal,
  openModal,
  closeModal,
  form,
  onSubmit,
  onDelete,
}: CalendarFormViewProps) => {
  const title = "Gestión del calendario";
  const description = "Gestiona el calendario de la asociación.";
  const action = "Crear";

  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2023, 0, 20),
    to: addDays(new Date(2023, 0, 20), 20),
  });

  const onChangeDateRange: SelectRangeEventHandler = (data) => {
    setDate(data);
  };

  const handleSubmit = (formData: any) => {
    onSubmit({ ...formData, date });
  };

  return (
    <>
      {/* <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      /> */}
      {/* <div className="flex items-center justify-between"> */}
      <Heading title={title} description={description} />
      {/* <Button
          disabled={loading}
          variant="destructive"
          size="sm"
          onClick={openModal}>
          <Trash className="h-4 w-4" />
        </Button> */}
      {/* </div> */}

      <Separator />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="w-full space-y-8">
          <div className="gap-8 md:grid md:grid-cols-3 items-end">
            <FormField
              formControl={form.control}
              name="title"
              label="Título"
              render={({ field }) => (
                <Input disabled={loading} placeholder="Título" {...field} />
              )}
            />
            <CalendarDateRangePicker
              onChangeDateRage={onChangeDateRange}
              currentDate={date}
            />
          </div>

          <div className="items-center space-x-2 md:flex" />

          <Button
            disabled={loading}
            className="ml-auto space-y-2"
            type="submit">
            {action}
          </Button>
        </form>
      </Form>

      {/* Modal de confirmación de eliminación */}

      {/* //TODO : */}
      {/* {showModal && (
        <ConfirmModal
          title="¿Seguro que quieres eliminar este calendario?"
          variant="destructive"
          onCancel={closeModal}
          onConfirm={onDelete}
          confirmButtonLabel="Eliminar calendario"
          isConfirmButtonDisabled={loading}
        />
      )} */}
    </>
  );
};
