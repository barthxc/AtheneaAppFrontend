import { useEffect } from "react";
import { Trash } from "lucide-react";

import {
  Button,
  Form,
  FormControl,
  Heading,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Textarea,
} from "@/features/core/components/ui";
import { FormField } from "@/features/core/components/forms";
import { ConfirmModal } from "@/features/core/components/modal";

import {
  type MemberFormViewProps,
  MemberStatus,
  MemberStreetType,
  MemberPaymentMethod,
} from "@/features/members/types";

export const MemberFormView = ({
  initialData,
  loading,
  showModal,
  openModal,
  closeModal,
  form,
  onSubmit,
  onDelete,
}: MemberFormViewProps) => {
  const title = initialData ? "Editar socio" : "Crear socio";
  const description = initialData ? "Edita el socio" : "Agrega un nuevo socio";
  const action = initialData ? "Guardar Socio" : "Crear Socio";

  // biome-ignore lint/correctness/useExhaustiveDependencies: Only trigger the gradeDisability when isDisabled changes
  useEffect(() => {
    form.trigger("gradeDisability");
  }, [form.watch("isDisabled")]);

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={title} description={description} />
        {initialData && (
          <Button
            disabled={loading}
            variant="destructive"
            size="sm"
            onClick={openModal}>
            <Trash className="h-4 w-4" />
          </Button>
        )}
      </div>
      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full max-w-5xl space-y-8">
          <div className="flex flex-col gap-4">
            {/* INFORMACIÓN DEL SOCIO */}
            <div className="flex flex-row gap-7 justify-between">
              <p className="text-2xl font-bold ">Información de Socio</p>
              {initialData && (
                <div className="flex flex-col gap-3 ">
                  <p>
                    <b className="font-semibold">SOCIO: </b>
                    {initialData.memberNumber}
                  </p>
                  <p>
                    <b className="font-semibold">PAGO: </b>
                    {initialData.bankInfo.paymentDate}
                  </p>
                </div>
              )}
            </div>

            <div className="gap-4 md:grid md:grid-cols-3">
              <FormField
                formControl={form.control}
                name="name"
                label="Nombre"
                render={({ field }) => (
                  <Input
                    disabled={loading}
                    placeholder="Nombre del socio"
                    {...field}
                  />
                )}
              />
              <FormField
                formControl={form.control}
                name="lastName"
                label="Apellidos"
                render={({ field }) => (
                  <Input
                    disabled={loading}
                    placeholder="Apellidos del socio"
                    {...field}
                  />
                )}
              />

              <FormField
                formControl={form.control}
                name="identificationNumber"
                label="DNI"
                render={({ field }) => (
                  <Input
                    disabled={loading}
                    placeholder="DNI del socio"
                    {...field}
                  />
                )}
              />
            </div>

            <div className="gap-4 md:grid md:grid-cols-3">
              <FormField
                formControl={form.control}
                name="phoneInfo.phone1"
                label="Teléfono"
                render={({ field }) => (
                  <Input disabled={loading} placeholder="Teléfono" {...field} />
                )}
              />
              <FormField
                formControl={form.control}
                name="phoneInfo.phone2"
                label="Teléfono 2"
                render={({ field }) => (
                  <Input
                    disabled={loading}
                    placeholder="Teléfono 2"
                    {...field}
                  />
                )}
              />

              <FormField
                formControl={form.control}
                name="email"
                label="Email"
                render={({ field }) => (
                  <Input disabled={loading} placeholder="Email" {...field} />
                )}
              />
            </div>
            <div className="gap-4 md:grid md:grid-cols-4 max-w-lg">
              <FormField
                formControl={form.control}
                name="birthDate"
                label="Fecha de Nac."
                render={({ field }) => (
                  <Input
                    disabled={loading}
                    placeholder="DD/MM/AAAA"
                    value
                    {...field}
                  />
                )}
              />

              <FormField
                formControl={form.control}
                name="isDisabled"
                label="Discapacidad"
                render={({ field }) => (
                  <Select
                    disabled={loading}
                    onValueChange={(value) => field.onChange(value === "true")}
                    value={field.value ? "true" : "false"}
                    defaultValue={field.value ? "true" : "false"}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          defaultValue={field.value ? "true" : "false"}
                          placeholder={field.value ? "Sí" : "No"}
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem key="true" value="true">
                        SI
                      </SelectItem>
                      <SelectItem key="false" value="false">
                        NO
                      </SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />

              <FormField
                formControl={form.control}
                name="gradeDisability"
                label="Grado"
                render={({ field }) => (
                  <Input disabled={loading} placeholder="%" {...field} />
                )}
              />

              <FormField
                formControl={form.control}
                name="status"
                label="Estado"
                render={({ field }) => (
                  <Select
                    disabled={loading}
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          defaultValue={MemberStatus.alta}
                          placeholder={MemberStatus.alta.toUpperCase()}
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Object.values(MemberStatus).map((status) => (
                        <SelectItem key={status} value={status}>
                          {status.toUpperCase()}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
          </div>
          <Separator />
          {/* DIRECCION DEL SOCIO */}
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-bold">Dirección del Socio</p>
            <div className="gap-4 md:grid md:grid-cols-4">
              <FormField
                formControl={form.control}
                name="addressInfo.streetType"
                label="Tipo de Domicilio"
                render={({ field }) => (
                  <Select
                    disabled={loading}
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          defaultValue={MemberStreetType.calle}
                          placeholder={MemberStreetType.calle.toUpperCase()}
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Object.values(MemberStreetType).map((streetType) => (
                        <SelectItem key={streetType} value={streetType}>
                          {streetType.toUpperCase()}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />

              <FormField
                formControl={form.control}
                name="addressInfo.streetName"
                label="Domicilio"
                render={({ field }) => (
                  <Input
                    disabled={loading}
                    placeholder="Domicilio"
                    {...field}
                  />
                )}
              />

              <FormField
                formControl={form.control}
                name="addressInfo.door"
                label="Puerta"
                render={({ field }) => (
                  <Input disabled={loading} placeholder="Puerta" {...field} />
                )}
              />

              <FormField
                formControl={form.control}
                name="addressInfo.block"
                label="Bloque"
                render={({ field }) => (
                  <Input disabled={loading} placeholder="Bloque" {...field} />
                )}
              />
            </div>
            <div className="gap-4 md:grid md:grid-cols-4 max-w-lg">
              <FormField
                formControl={form.control}
                name="addressInfo.location"
                label="Localidad"
                render={({ field }) => (
                  <Input
                    disabled={loading}
                    placeholder="Localidad"
                    {...field}
                  />
                )}
              />

              <FormField
                formControl={form.control}
                name="addressInfo.province"
                label="Provincia"
                render={({ field }) => (
                  <Input
                    disabled={loading}
                    placeholder="Provincia"
                    {...field}
                  />
                )}
              />
              <FormField
                formControl={form.control}
                name="addressInfo.postalCode"
                label="CP"
                render={({ field }) => (
                  <Input disabled={loading} placeholder="CP" {...field} />
                )}
              />
            </div>
          </div>
          <Separator />
          {/* DATOS DE PAGO */}
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-bold ">Datos de Pago</p>
            <div className="gap-4 md:grid md:grid-cols-4">
              <FormField
                formControl={form.control}
                name="bankInfo.paymentMethod"
                label="Método de Pago"
                render={({ field }) => (
                  <Select
                    disabled={loading}
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          defaultValue={MemberPaymentMethod.caja}
                          placeholder={MemberPaymentMethod.caja.toUpperCase()}
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Object.values(MemberPaymentMethod).map(
                        (paymentMethod) => (
                          <SelectItem key={paymentMethod} value={paymentMethod}>
                            {paymentMethod.toUpperCase()}
                          </SelectItem>
                        )
                      )}
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
            <div className="gap-4 md:grid md:grid-cols-3">
              <FormField
                formControl={form.control}
                name="bankInfo.name"
                label="Nombre"
                render={({ field }) => (
                  <Input disabled={loading} placeholder="Nombre" {...field} />
                )}
              />

              <FormField
                formControl={form.control}
                name="bankInfo.lastName"
                label="Apellidos"
                render={({ field }) => (
                  <Input
                    disabled={loading}
                    placeholder="Apellidos"
                    {...field}
                  />
                )}
              />
              <FormField
                formControl={form.control}
                name="bankInfo.identificationNumber"
                label="DNI"
                render={({ field }) => (
                  <Input disabled={loading} placeholder="DNI" {...field} />
                )}
              />
            </div>
            <div className="gap-4 md:grid md:grid-cols-2">
              <FormField
                formControl={form.control}
                name="bankInfo.entity"
                label="Entidad"
                render={({ field }) => (
                  <Input disabled={loading} placeholder="Entidad" {...field} />
                )}
              />
              <FormField
                formControl={form.control}
                name="bankInfo.iban"
                label="IBAN"
                render={({ field }) => (
                  <Input disabled={loading} placeholder="IBAN" {...field} />
                )}
              />
            </div>
          </div>
          <Separator />

          {/* ANOTACIONES */}
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-bold ">Anotaciones</p>
            <div className="gap-4  max-w-7xl">
              <FormField
                formControl={form.control}
                name="observations"
                label="Observaciones"
                render={({ field }) => (
                  <Textarea
                    className="min-h-24"
                    disabled={loading}
                    placeholder="Observaciones"
                    {...field}
                  />
                )}
              />
            </div>
          </div>

          <Button
            disabled={loading}
            className="ml-auto h-12 text-base"
            type="submit">
            {action}
          </Button>
        </form>
      </Form>

      {/* Modal de confirmación de eliminación */}
      <ConfirmModal
        title="¿Seguro que quieres eliminar este socio?"
        variant="destructive"
        confirmButtonLabel="Eliminar socio"
        isOpen={showModal}
        isDisabled={loading}
        onClose={closeModal}
        onConfirm={onDelete}
      />
    </>
  );
};
