import {
  Button,
  Form,
  FormControl,
  FormField,
  Input,
  Textarea,
} from "@/features/core/components/ui";
import type { EmailFormViewProps } from "@/features/email/types";

const EmailFormView = ({
  loading,
  form,
  onSubmit,
  emailType,
}: EmailFormViewProps) => {
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full max-w-5xl space-y-8">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-7 justify-between">
              <p className="text-2xl font-bold ">
                {emailType === "communication"
                  ? "Formulario de contacto"
                  : "Contactar con el Administrador"}
              </p>
            </div>

            {emailType === "communication" && (
              <div className="gap-4 md:grid md:grid-cols-3">
                <FormField
                  formControl={form.control}
                  name="from"
                  label="Email"
                  render={({ field }) => (
                    <Input
                      disabled={loading}
                      placeholder="Correo electrónico"
                      {...field}
                    />
                  )}
                />
              </div>
            )}

            <div className="gap-4 md:grid md:grid-cols-3">
              <FormField
                formControl={form.control}
                name="title"
                label="Título"
                render={({ field }) => (
                  <Input
                    disabled={loading}
                    placeholder="Encabezado"
                    {...field}
                  />
                )}
              />
            </div>
          </div>

          <div className="gap-4  max-w-7xl">
            <FormField
              formControl={form.control}
              name="msg"
              label="Mensaje"
              render={({ field }) => (
                <Textarea
                  className="min-h-24"
                  disabled={loading}
                  placeholder="Mensaje"
                  {...field}
                />
              )}
            />
          </div>

          <Button
            disabled={loading}
            className="ml-auto h-12 text-base"
            type="submit">
            Enviar
          </Button>
        </form>
      </Form>
    </>
  );
};

export default EmailFormView;
