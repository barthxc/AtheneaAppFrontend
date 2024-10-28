import { atheneaApi } from "@/features/core/lib/api";

export interface Assignment {
	from: Date;
	to: Date;
	details: AssignmentDetails[];
	member: MemberAssignment;
}

export interface AssignmentDetails {
	itemName: string;
	quantity: number;
	id: string;
}

export interface MemberAssignment {
	id: string;
	memberNumber: string;
	identificationNumber: string;
	name: string;
	lastName: string;
}

export interface AssignmentResponse extends Assignment {
	id: string;
	createdAt: Date;
	updateAt: Date;
}

export class AssigmentService {
	static create = async (assigment: Assignment) => {
		try {
			const { data } = await atheneaApi.post<AssignmentResponse>("/assigments", assigment);
			return data;
		} catch (error: any) {
			throw error.response?.data;
		}
	};

	static getAssigments = async () => {
		try {
			const { data } = await atheneaApi.get<AssignmentResponse[]>("/assigments");
			return data;
		} catch (error: any) {
			throw error.response?.data;
		}
	};

	static getPDFAssigment = async (id: string) => {
		try {
			const { data } = await atheneaApi.get(`/assigments/pdf/${id}`, {
				responseType: "blob",
			});
			return data;
		} catch (error: any) {
			throw error.response?.data;
		}
	};
}
