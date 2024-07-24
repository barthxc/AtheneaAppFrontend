import {
  MemberPaymentMethod,
  MemberStatus,
  MemberStreetType,
} from "@/features/members/types";

export const generateDefaultData = () => {
  return {
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
};
