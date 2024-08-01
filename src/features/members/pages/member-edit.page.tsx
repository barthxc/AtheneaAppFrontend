import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LoadingView } from "@/features/core/components";
import { MemberForm } from "@/features/members/components";
import type {
  MemberFormValues,
  MemberResponse,
} from "@/features/members/types";
import { useUpdateMember, useMemberById } from "../hooks/hook";

export function MemberEditPage() {
  const { id: paramId } = useParams<{ id: string }>();
  const navigate = useNavigate();

  if (!paramId) {
    navigate("/dashboard");
  }
  const { data, isLoading } = useMemberById(paramId ?? "");

  const { mutate: updateMember, isPending, isSuccess } = useUpdateMember();

  useEffect(() => {
    if (!isLoading && !data) {
      navigate("/dashboard");
    }
  }, [isLoading, data, navigate]);

  const handleSubmit = async (formData: MemberFormValues) => {
    if (paramId) {
      updateMember({ member: formData, id: paramId });
    }
  };

  return (
    <>
      <LoadingView isLoading={isLoading && !data}>
        <MemberForm
          initialData={data as MemberFormValues}
          isEdit={true}
          memberId={paramId}
          onSubmit={handleSubmit}
          isPending={isPending}
          isSuccess={isSuccess}
        />
      </LoadingView>
    </>
  );
}
