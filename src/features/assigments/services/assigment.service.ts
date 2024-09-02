import { atheneaApi } from "@/features/core/lib/api";

export interface AssigmentDetails {
  itemName: string;
  quantity: number;
  id: string;
}

export interface MemberAssigment {
  id: string;
  memberNumber: string;
  identificationNumber: string;
  name: string;
  lastName: string;
}

export interface AssigmentResponse {
  id: string;
  from: Date;
  to: Date;
  defails: AssigmentDetails[];
  member: MemberAssigment;
  createdAt: Date;
  updateAt: Date;
}

export class AssigmentService {
  static create = async (assigment: any) => {
    try {
      const { data } = await atheneaApi.post<AssigmentResponse>(
        "/assigments",
        assigment
      );
      return data;
    } catch (error: any) {
      throw error.response?.data;
    }
  };

  static getAssigments = async () => {
    try {
      const { data } = await atheneaApi.get<AssigmentResponse[]>("/assigments");
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
