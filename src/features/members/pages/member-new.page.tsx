import { MemberForm } from "@/features/members/components";
import { useCreateMember } from "../hooks/hook";
import type { MemberFormValues } from "../types";

export function MemberNewPage() {
  const {
    mutate: createMember,
    isPending,
    isSuccess,
    isError,
    errorMessage,
  } = useCreateMember();

  const handleSubmit = async (data: MemberFormValues) => {
    createMember(data);
  };

  return (
    <MemberForm
      initialData={null}
      isEdit={false}
      onSubmit={handleSubmit}
      isError={isError}
      errorMessage={errorMessage}
      isPending={isPending}
      isSuccess={isSuccess}
    />
  );
}
