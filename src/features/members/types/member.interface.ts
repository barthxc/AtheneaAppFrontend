import type { UseFormReturn } from "react-hook-form";

import type { FormViewProps } from "@/features/core/types";

import type { MemberFormValues, MemberPaymentMethod, MemberStatus, MemberStreetType } from "@/features/members/types";

interface EditMemberForm {
	initialData: MemberResponse;
	isEdit: true;
	editId: string;
}

interface CreateMemberForm {
	initialData: null;
	isEdit?: false;
	editId?: string;
}

export type CASOS = EditMemberForm | CreateMemberForm;

export interface MemberFormProps {
	initialData: MemberFormValues | null;
	isEdit?: boolean;
	editId?: string;
}

export interface MemberFormViewProps extends FormViewProps {
	form: UseFormReturn<MemberFormValues>;
	paymentDate?: string;
}

export interface CreateMemberResponse {
	id: string;
	memberNumber: string;
}
export interface Members
	extends Pick<MemberResponse, "id" | "memberNumber" | "name" | "lastName" | "identificationNumber" | "status"> {
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
	isDisabled: boolean;
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

export interface MemberState {
	members: Members[];
	getMembers: () => Promise<Members[] | undefined>;
	getMemberById: (id: string) => Promise<MemberResponse>;
	deleteMemberById: (id: string) => Promise<any>;
	updateMemberPaymentDate: (id: string) => Promise<Members | undefined>;
}

export interface MembersInfo {
	totalMembers: string;
	activeMembers: string;
	membersNoPay: string;
	membersPerYears: string;
}

export interface MembersInfoState {
	membersInfo?: MembersInfo;
	isLoading: boolean;
	getMembersInfo: () => Awaited<any>;
	refreshMembersInfo: () => Awaited<any>;
}

export interface MemberPdfProps {
	id?: string;
	bank: boolean;
}

export interface MemberTableCellActionProps {
	data: Members;
}
