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
} from "@/components/ui";
import { Trash } from "lucide-react";
import { FormField } from "@/components/forms";
import {
  PaymentMethod,
  Status,
  StreetType,
  type MemberFormViewProps,
} from "@/types";
import { ConfirmModal } from "@/components/modal";

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

  return (
    <>
      {/* <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      /> */}
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
            {/* INFORMACIÖN DEL SOCIO */}
            <p className="text-2xl font-bold ">Información de Socio</p>

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
                name="phone1"
                label="Teléfono"
                render={({ field }) => (
                  <Input disabled={loading} placeholder="Teléfono" {...field} />
                )}
              />
              <FormField
                formControl={form.control}
                name="phone2"
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
                label="Fecha de Nac"
                render={({ field }) => (
                  <Input
                    disabled={loading}
                    placeholder="Fecha Nac."
                    type="date"
                    {...field}
                  />
                )}
              />

              {/* <FormField
                formControl={form.control}
                name="isDisability"
                label="Discapacidad"
                render={({ field }) => (
                  <Input
                    disabled={loading}
                    placeholder="Discapacidad"
                    {...field}
                  />
                )}
              /> */}

              <FormField
                formControl={form.control}
                name="isDisability"
                label="Discapacidad"
                render={({ field }) => (
                  <Select
                    disabled={loading}
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue defaultValue={"no"} placeholder="NO" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="si">SI</SelectItem>
                      <SelectItem value="no">NO</SelectItem>
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
                          defaultValue={Status.alta}
                          placeholder={Status.alta.toUpperCase()}
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Object.values(Status).map((status) => (
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
                name="streetType"
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
                          defaultValue={StreetType.calle}
                          placeholder={StreetType.calle.toUpperCase()}
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Object.values(StreetType).map((streetType) => (
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
                name="streetName"
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
                name="door"
                label="Puerta"
                render={({ field }) => (
                  <Input disabled={loading} placeholder="Puerta" {...field} />
                )}
              />

              <FormField
                formControl={form.control}
                name="block"
                label="Bloque"
                render={({ field }) => (
                  <Input disabled={loading} placeholder="Bloque" {...field} />
                )}
              />
            </div>
            <div className="gap-4 md:grid md:grid-cols-4 max-w-lg">
              <FormField
                formControl={form.control}
                name="location"
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
                name="province"
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
                name="postalCode"
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
                name="paymentMethod"
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
                          defaultValue={PaymentMethod.caja}
                          placeholder={PaymentMethod.caja.toUpperCase()}
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Object.values(PaymentMethod).map((paymentMethod) => (
                        <SelectItem key={paymentMethod} value={paymentMethod}>
                          {paymentMethod.toUpperCase()}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
            <div className="gap-4 md:grid md:grid-cols-3">
              <FormField
                formControl={form.control}
                name="name"
                label="Nombre"
                render={({ field }) => (
                  <Input disabled={loading} placeholder="Nombre" {...field} />
                )}
              />

              <FormField
                formControl={form.control}
                name="lastName"
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
                name="identificationNumber"
                label="DNI"
                render={({ field }) => (
                  <Input disabled={loading} placeholder="DNI" {...field} />
                )}
              />
            </div>
            <div className="gap-4 md:grid md:grid-cols-2">
              <FormField
                formControl={form.control}
                name="entity"
                label="Entidad"
                render={({ field }) => (
                  <Input disabled={loading} placeholder="Entidad" {...field} />
                )}
              />
              <FormField
                formControl={form.control}
                name="iban"
                label="IBAN"
                render={({ field }) => (
                  <Input disabled={loading} placeholder="IBAN" {...field} />
                )}
              />
            </div>
          </div>
          <Separator />

          {/* <FormField
              formControl={form.control}
              name="role"
              label="Role"
              render={({ field }) => (
                <Select
                disabled={loading}
                onValueChange={field.onChange}
                value={field.value}
                defaultValue={field.value}>
                <FormControl>
                <SelectTrigger>
                <SelectValue
                defaultValue={field.value}
                placeholder="Selecciona un rol"
                />
                </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                  {roles.map((role) => (
                    <SelectItem key={role._id} value={role._id}>
                    {role.name}
                    </SelectItem>
                    ))}
                    </SelectContent>
                    </Select>
                    )}
                    /> */}

          {/* ANOTACIONES */}
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-bold ">Anotaciones</p>
            <div className="gap-4 md:grid md:grid-cols-4 max-w-lg">
              <FormField
                formControl={form.control}
                name="observations"
                label="Observaciones"
                render={({ field }) => (
                  <Input
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
      {showModal && (
        <ConfirmModal
          title="¿Seguro que quieres eliminar este socio?"
          variant="destructive"
          onCancel={closeModal}
          onConfirm={onDelete}
          confirmButtonLabel="Eliminar socio"
          isConfirmButtonDisabled={loading}
        />
      )}
    </>
  );
};
