import { MemberForm } from "@/features/members/components";
import { useCreateMember } from "@/features/members/hooks";
import type { MemberFormValues } from "@/features/members/types";

export function MemberNewPage() {
	const { mutate: createMember, data: memberData, isPending, isSuccess } = useCreateMember();

	const handleSubmit = (data: MemberFormValues, onSuccessAction: (memberId: string) => void) => {
		createMember(data, { onSuccess: (createdMember) => onSuccessAction(createdMember.id) });
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
