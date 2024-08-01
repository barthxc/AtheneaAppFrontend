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
  } = useCreateMember();

  console.log(isError);

  const handleSubmit = (
    data: MemberFormValues,
    onSuccessAction: () => void
  ) => {
    createMember(data, { onSuccess: onSuccessAction });
  };

  return (
    <MemberForm
      memberId={memberData?.id}
      initialData={null}
      isEdit={false}
      onSubmit={handleSubmit}
      isPending={isPending}
      isSuccess={isSuccess}
    />
  );
}
