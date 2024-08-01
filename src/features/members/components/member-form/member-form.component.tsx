import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { Button, ToastAction, useToast } from "@/features/core/components/ui";
import { useNavigate } from "react-router-dom";
import {
  type MemberFormProps,
  type MemberFormValues,
  MemberPaymentMethod,
  MemberStatus,
  MemberStreetType,
} from "@/features/members/types";
import { MemberFormView } from "@/features/members/components";
import { memberFormSchema } from "@/features/members/schemas";

import { useDeleteMember, useUpdatePaymentDate } from "../../hooks/hook";

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
  const navigate = useNavigate();

  const {
    mutate: updateMemberPaymentDate,
    errorMessage: updateErrorMessage,
    isPending: isPendingUpdatePaymentDate,
    isSuccess: isSuccessUpdatePaymentDate,
    isError: isErrorUpdatePaymentDate,
  } = useUpdatePaymentDate();
  const {
    mutate: deleteMember,
    errorMessage: deleteErrorMessage,
    isPending: isPendingDeleteMember,
    isSuccess: isSuccessDeleteMember,
    isError: isErrorDeleteMember,
  } = useDeleteMember();

  // useEffect(() => {
  //   if (isSuccess) {
  //     toast({
  //       description: isEdit ? "Socio actualizado" : "Socio creado con éxito",
  //       action: !isEdit ? (
  //         <ToastAction altText="Ficha de Socio">
  //           <Link to={`/dashboard/members/pdf/${memberId}`}>
  //             Ficha de Socio
  //           </Link>
  //         </ToastAction>
  //       ) : undefined,
  //     });
  //   }
  //   if (isSuccessUpdatePaymentDate) {
  //     toast({
  //       description: "Fecha del socio actualizada correctamente.",
  //     });
  //   }
  // }, [isSuccess, memberId, isEdit, toast, isSuccessUpdatePaymentDate]);

  useEffect(() => {
    if (isError && errorMessage) {
      toast({
        variant: "destructive",
        description: errorMessage,
      });
    }
    if (isErrorUpdatePaymentDate && updateErrorMessage) {
      toast({
        description: updateErrorMessage,
        variant: "destructive",
      });
    }
    if (isErrorDeleteMember && deleteErrorMessage) {
      toast({
        description: deleteErrorMessage,
        variant: "destructive",
      });
    }

    if (isSuccess) {
      toast({
        description: isEdit ? "Socio actualizado" : "Socio creado con éxito",
        action: !isEdit ? (
          <ToastAction altText="Ficha de Socio">
            <Link to={`/dashboard/members/pdf/${memberId}`}>
              Ficha de Socio
            </Link>
          </ToastAction>
        ) : undefined,
      });
    }
    if (isSuccessUpdatePaymentDate) {
      toast({
        description: "Fecha del socio actualizada correctamente.",
      });
    }
    if (isSuccessDeleteMember) {
      navigate("/dashboard/members");
      toast({
        description: "Socio eliminado correctamente",
      });
    }
  }, [
    isError,
    errorMessage,
    toast,
    isErrorUpdatePaymentDate,
    updateErrorMessage,
    isEdit,
    isSuccess,
    isSuccessUpdatePaymentDate,
    memberId,
    isErrorDeleteMember,
    deleteErrorMessage,
    isSuccessDeleteMember,
  ]);

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
    deleteMember(memberId ?? "");

    closeModal();
  };

  const onUpdatePaymentDate = async () => {
    updateMemberPaymentDate(memberId ?? "");
  };

  return (
    <>
      <MemberFormView
        initialData={initialData}
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
          <Button
            disabled={
              isLoading || isPendingUpdatePaymentDate || isPendingDeleteMember
            }
            className="h-12 text-base"
            type="button">
            <Link to={`/dashboard/members/pdf/${memberId}`}>
              Ficha de Socio
            </Link>
          </Button>
          <Button
            disabled={
              isLoading || isPendingUpdatePaymentDate || isPendingDeleteMember
            }
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
