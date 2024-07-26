import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

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
import { MemberService } from "@/features/members/services";
import { ErrorService } from "@/features/error/service";
import { Link } from "react-router-dom";

export const MemberForm: React.FC<MemberFormProps> = ({
  initialData,
  isEdit,
  editId,
}) => {
  const { toast } = useToast();
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [memberId, setMemberId] = useState<string | undefined>(editId);
  const [memberSubmitted, setMemberSubmitted] = useState<boolean>(false);
  // const toastMessage = initialData ? "Socio actualizado." : "Socio creado.";

  useEffect(() => {
    if (!memberId || !memberSubmitted) return;
    toast({
      description: isEdit ? "Socio actualizado" : "Socio creado con éxito",
      action: !isEdit ? (
        <ToastAction altText="Ficha de Socio">
          <Link to={`/dashboard/members/pdf/${memberId}`}>Ficha de Socio</Link>
        </ToastAction>
      ) : undefined,
    });
  }, [isEdit, memberId, memberSubmitted, toast]);

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

  const onSubmit = async (data: MemberFormValues) => {
    setLoading(true);
    try {
      const submittedMember = await (isEdit && editId
        ? MemberService.updateMember(data, editId)
        : MemberService.createMember(data));
      if (submittedMember) {
        setMemberId(submittedMember.id);
        setMemberSubmitted(true);
        !isEdit && form.reset();
        return;
      }
      toast({
        variant: "destructive",
        description: ERROR_MESSAGES.MEMBER.CREATE_MEMBER.GENERIC,
      });
    } catch (error: any) {
      const errorMessage = ErrorService.handleError(
        error.statusCode,
        isEdit
          ? ERROR_MESSAGES.MEMBER.CREATE_MEMBER
          : ERROR_MESSAGES.MEMBER.CREATE_MEMBER
      );
      toast({
        variant: "destructive",
        description: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setLoading(true);
      //   await axios.delete(`/api/${params.storeId}/products/${params.productId}`);
      //   router.refresh();
      //TODO REFRESCAR AL HACER COSAS (?)
    } catch (error: any) {
      // console.error(error)
    } finally {
      setLoading(false);
      closeModal();
    }
  };

  const onUpdatePayment = async () =>{
    setLoading(true);
      try {
        s
      } catch (error) {
        
      }

  return (
    <>
      <MemberFormView
        initialData={initialData}
        loading={loading}
        showModal={showModal}
        openModal={openModal}
        closeModal={closeModal}
        form={form}
        onSubmit={onSubmit}
        onDelete={onDelete}
      />

      {isEdit && (
        <div className="flex flex-row justify-around">
          <Button disabled={loading} className="h-12 text-base" type="button">
            <Link to={`/dashboard/members/pdf/${memberId}`}>
              Ficha de Socio
            </Link>
          </Button>
          <Button disabled={loading} className=" h-12 text-base" type="button">
            Actualizar fecha pago
          </Button>
        </div>
      )}
    </>
  );
};
