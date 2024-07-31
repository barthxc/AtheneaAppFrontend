import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { Button, ToastAction, useToast } from "@/features/core/components/ui";
import { ERROR_MESSAGES } from "@/features/error/constants";

import {
  type MemberFormProps,
  type MemberFormValues,
  MemberPaymentMethod,
  MemberStatus,
  MemberStreetType,
} from "@/features/members/types";
import { MemberFormView } from "@/features/members/components";
import { memberFormSchema } from "@/features/members/schemas";
import { useMemberStore } from "@/features/members/stores";

import { ErrorService } from "@/features/error/service";

export const MemberForm: React.FC<MemberFormProps> = ({
  memberId,
  initialData,
  isEdit,
  onSubmit,
  isLoading,
  isError,
  errorMessage,
  isPending,
  isSuccess,
}) => {
  const { toast } = useToast();
  const [showModal, setShowModal] = useState(false);
  const [memberPaymentDate, setMemberPaymentDate] = useState<string>();
  const updateMemberPaymentDate = useMemberStore(
    (s) => s.updateMemberPaymentDate
  );

  // const toastMessage = initialData ? "Socio actualizado." : "Socio creado.";

  useEffect(() => {
    if (isSuccess) {
      toast({
        description: isEdit ? "Socio actualizado" : "Socio creado con éxito",
        action: !isEdit ? (
          <ToastAction altText="Ficha de Socio">
            <Link to={`/dashboard/members/pdf/${memberId}`}>Ficha de Socio</Link>
          </ToastAction>
        ) : undefined,
      });
    }
  }, [isSuccess, memberId, isEdit, toast]);

  useEffect(() => {
    if (isError && errorMessage) {
      toast({
        variant: "destructive",
        description: errorMessage,
      });
    }
  }, [isError, errorMessage, toast]);

  const defaultValues: MemberFormValues = initialData
    ? initialData
    : {
        name: "",
        lastName: "",
        identificationNumber: undefined,
        status: MemberStatus.alta,
        email: undefined,
        birthDate: "",
        isDisabled: false,
        gradeDisability: 0,
        observations: undefined,
        // paymentDate: new Date(),
        phoneInfo: {
          phone1: "",
          phone2: undefined,
        },
        addressInfo: {
          streetType: MemberStreetType.calle,
          streetName: undefined,
          door: undefined,
          postalCode: undefined,
          location: undefined,
          province: undefined,
          block: undefined,
        },
        bankInfo: {
          paymentMethod: MemberPaymentMethod.caja,
          entity: undefined,
          iban: undefined,
          name: undefined,
          lastName: undefined,
          identificationNumber: undefined,
        },
      };

  const form = useForm<MemberFormValues>({
    resolver: zodResolver(memberFormSchema),
    defaultValues,
    // Validation strategy before submitting.
    // See: https://react-hook-form.com/docs/useform#mode
    mode: "all",
    // After submitting.
    // See: https://react-hook-form.com/docs/useform#reValidateMode
    reValidateMode: "onChange",
  });

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleSubmit = (data: MemberFormValues) => {
    onSubmit(data);
    !isEdit && form.reset();
    return;
  };

  const onDelete = async () => {
    try {
      //   await axios.delete(`/api/${params.storeId}/products/${params.productId}`);
      //   router.refresh();
      //TODO REFRESCAR AL HACER COSAS (?)
    } catch (error: any) {
      // console.error(error)
    } finally {
      closeModal();
    }
  };

  const onUpdatePaymentDate = async () => {
    if (!memberId) return;
    try {
      const { bankInfo } = (await updateMemberPaymentDate(memberId)) ?? {};
      if (bankInfo) {
        const { paymentDate } = bankInfo;
        setMemberPaymentDate(paymentDate);
        toast({
          description: "Fecha del socio actualizada correctamente.",
        });
      }
    } catch (error: any) {
      if (error.statusCode) {
        const errorMessage = ErrorService.handleError(
          error.statusCode,
          ERROR_MESSAGES.MEMBER.UPDATE_PAYMENT_DATE
        );
        toast({
          description: errorMessage,
          variant: "destructive",
        });
      }
      toast({
        description: ERROR_MESSAGES.MEMBER.UPDATE_PAYMENT_DATE.GENERIC,
      });
    }
  };

  return (
    <>
      <MemberFormView
        initialData={initialData}
        paymentDate={memberPaymentDate}
        loading={isLoading || isPending}
        showModal={showModal}
        openModal={openModal}
        closeModal={closeModal}
        form={form}
        onSubmit={handleSubmit}
        onDelete={onDelete}
      />

      {isEdit && (
        <div className="flex flex-row justify-around">
          <Button disabled={isLoading} className="h-12 text-base" type="button">
            <Link to={`/dashboard/members/pdf/${memberId}`}>Ficha de Socio</Link>
          </Button>
          <Button
            disabled={isLoading}
            className=" h-12 text-base"
            type="button"
            onClick={onUpdatePaymentDate}>
            Actualizar fecha pago
          </Button>
        </div>
      )}
    </>
  );
};
