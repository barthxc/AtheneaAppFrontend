import type { UseFormReturn } from "react-hook-form";

import type { FormViewProps } from "@/features/core/types";

import type {
  MemberFormValues,
  MemberIsDisabled,
  MemberPaymentMethod,
  MemberStatus,
  MemberStreetType,
} from "@/features/members/types";

export interface MemberFormProps {
  initialData: MemberFormValues | null;
}

export interface MemberFormViewProps extends FormViewProps {
  form: UseFormReturn<MemberFormValues>;
}

export interface CreateMemberResponse {
  id: string;
  memberNumber: string;
}
export interface Members
  extends Pick<
    MemberResponse,
    "id" | "memberNumber" | "name" | "lastName" | "identificationNumber"
  > {
  phoneInfo: Pick<PhoneInfo, "phone1" | "phone2">;
  bankInfo: Pick<BankInfo, "paymentDate" | "paymentMethod">;
}

export interface UpdateMemberResponse extends MemberResponse {}

export interface MemberResponse extends Member {
  id: string;
  memberNumber: string;
}

export interface Member {
  name: string;
  lastName: string;
  identificationNumber?: string;
  phoneInfo: PhoneInfo;
  email?: string;
  birthDate: string;
  isDisabled: MemberIsDisabled;
  gradeDisability?: number;
  status: MemberStatus;
  addressInfo: AddressInfo;
  bankInfo: BankInfo;
  observations?: string;
}

export interface BankInfo {
  paymentMethod: MemberPaymentMethod;
  name?: string;
  paymentDate: any;
  lastName?: string;
  identificationNumber?: string;
  entity?: string;
  iban?: string;
}

export interface AddressInfo {
  streetType?: MemberStreetType;
  streetName?: string;
  door?: string;
  block?: string;
  location?: string;
  province?: string;
  postalCode?: number;
}

interface PhoneInfo {
  phone1: string;
  phone2?: string;
}

export interface MembersInfoResponse {
  totalMembers: string;
  activeMembers: string;
  membersNoPay: string;
  membersPerYears: string;
}
