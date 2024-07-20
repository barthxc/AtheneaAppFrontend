import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { useToast } from "@/features/core/components/ui";
import { ERROR_MESSAGES } from "@/features/core/constants";

import {
  type MemberFormProps,
  type MemberFormValues,
  MemberIsDisabled,
  MemberPaymentMethod,
  MemberStatus,
  MemberStreetType,
} from "@/features/members/types";
import { MemberFormView } from "@/features/members/components";
import { memberFormSchema } from "@/features/members/schemas";
import { MemberService } from "@/features/members/services";

export const MemberForm: React.FC<MemberFormProps> = ({ initialData }) => {
  //   const params = useParams();
  //   const router = useRouter();
  const { toast } = useToast();
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  // const toastMessage = initialData ? "Socio actualizado." : "Socio creado.";

  const defaultValues: MemberFormValues = initialData
    ? initialData
    : {
        name: "",
        lastName: "",
        identificationNumber: undefined,
        status: MemberStatus.alta,
        email: undefined,
        birthDate: "",
        isDisabled: MemberIsDisabled.no,
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
    MemberService.createMember(data);
    try {
      setLoading(true);
      if (initialData) {
        // await axios.post(`/api/products/edit-product/${initialData._id}`, data);
      } else {
        // const res = await axios.post(`/api/products/create-product`, data);
        // console.log("product", res);
      }
      //   router.refresh();
      //   router.push(`/dashboard/products`);
      toast({
        variant: "destructive",
        title: ERROR_MESSAGES.GENERIC.SOMETHING_WENT_WRONG,
        description: ERROR_MESSAGES.GENERIC.PROBLEM_WITH_REQUEST,
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: ERROR_MESSAGES.GENERIC.SOMETHING_WENT_WRONG,
        description: ERROR_MESSAGES.GENERIC.PROBLEM_WITH_REQUEST,
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

  return (
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
  );
};
