import { MemberForm } from "@/features/members/components";
import { useCreateMember } from "../hooks/hook";
import type { MemberFormValues } from "../types";

export function MemberNewPage() {
  const {
    mutate: createMember,
    data: memberData,
    isPending,
    isSuccess,
    isError,
    errorMessage,
  } = useCreateMember();

  const handleSubmit = (data: MemberFormValues) => {
    createMember(data);
  };

  return (
    <MemberForm
      memberId={memberData?.id}
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
