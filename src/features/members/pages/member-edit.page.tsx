import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import type { MemberResponse } from "@/features/members/types";
import { useMemberStore } from "@/features/members/stores";
import { MemberForm } from "@/features/members/components";
import { ScrollArea, Spinner } from "@/features/core/components/ui";

export function MemberEditPage() {
	const { id: paramId } = useParams();
	const [member, setMember] = useState<MemberResponse | null>(null);
	const [pending, setPending] = useState<boolean>(true);
	const getMemberById = useMemberStore((s) => s.getMemberById);
	const navigate = useNavigate();

	useEffect(() => {
		const getMember = async () => {
			if (!paramId) return setPending(false);
			const memberFound = (await getMemberById(paramId)) ?? {};
			if (Object.entries(memberFound).length > 0) setMember(memberFound);
			setPending(false);
		};

		getMember();
	}, [getMemberById, paramId]);

	useEffect(() => {
		if (!pending && !member) {
			navigate("/dashboard");
		}
	}, [pending, member, navigate]);

	if (pending && !member) {
		return (
			<div className="h-full grid place-content-center">
				<Spinner />
			</div>
		);
	}

	return (
		<ScrollArea className="h-full">
			<div className="flex-1 space-y-4 p-8">
				<MemberForm initialData={member} />
			</div>
		</ScrollArea>
	);
}
