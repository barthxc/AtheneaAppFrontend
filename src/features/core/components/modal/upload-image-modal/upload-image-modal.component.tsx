import { useEffect, useRef, useState } from "react";
import type { ControllerRenderProps, FieldValues } from "react-hook-form";

import type { UploadImageModalProps } from "@/features/core/components/modal";
import { Button, Form, Input, Modal } from "@/features/core/components/ui";
import { FormField } from "@/features/core/components";
import { useImagePreview } from "@/features/core/hooks";

export const UploadImageModal = <TFieldValues extends FieldValues>({
  title,
  description,
  isOpen,
  isSuccess,
  onClose,
  form,
  customElements,
  handleSubmit,
  isLoading,
  ...props
}: UploadImageModalProps<TFieldValues>) => {
  return (
    <Modal
      title={title}
      description={description}
      isOpen={isOpen}
      onClose={onClose}
      {...props}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="w-full space-y-8">
          {customElements?.fieldsContainer?.(
            <Fields
              form={form}
              isLoading={isLoading}
              isSuccess={isSuccess}
              customElements={customElements}
            />
          ) ?? (
            <div className="flex flex-col md:flex-row items-start gap-5">
              <Fields
                form={form}
                isLoading={isLoading}
                isSuccess={isSuccess}
                customElements={customElements}
              />
            </div>
          )}

          <Button
            disabled={isLoading}
            className="mr-auto space-y-2"
            type="submit">
            Crear
          </Button>
        </form>
      </Form>
    </Modal>
  );
};

interface FieldsProps
  extends Pick<
    UploadImageModalProps<any>,
    "form" | "customElements" | "isLoading" | "isSuccess"
  > {}

const Fields = ({
  form,
  customElements,
  isLoading,
  isSuccess,
}: FieldsProps) => {
  const [showImagePreview, setShowImagePreview] = useState<boolean>(true);
  const { imagePreview, setImagePreview, readImageFile } = useImagePreview();
  const imageInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isSuccess) return;
    form.reset();
    setImagePreview(null);
  }, [isSuccess, setImagePreview, form.reset]);

  const toggleImagePreview = () => {
    setShowImagePreview((x) => !x);
  };

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: ControllerRenderProps<any, string>
  ) => {
    const image = e.target.files?.[0];
    if (!image) return;
    field.onChange(image);
    readImageFile(image);
  };

  const triggerImageInput = () => {
    imageInputRef.current?.click();
  };

  return (
    <>
      {customElements?.additionalFields}

      <FormField
        formControl={form.control}
        name="image"
        label={customElements?.additionalFields ? "Imagen" : null}
        render={{
          renderProp: ({ field }) => (
            <div className="flex flex-col justify-center items-start gap-5">
              <Button onClick={triggerImageInput}>Selecciona una imagen</Button>
              <Input
                className="hidden"
                type="file"
                disabled={isLoading}
                {...field}
                ref={imageInputRef}
                onChange={(e) => handleImageChange(e, field)}
              />
              {imagePreview && (
                <label className="flex justify-start items-center gap-1">
                  <input
                    type="checkbox"
                    defaultChecked={showImagePreview}
                    onChange={toggleImagePreview}
                  />
                  <span className="text-sm">Mostrar previsualización</span>
                </label>
              )}
              {showImagePreview && imagePreview ? (
                <img src={imagePreview} alt="" width={150} height={150} />
              ) : null}
            </div>
          ),
        }}
      />
    </>
  );
};
