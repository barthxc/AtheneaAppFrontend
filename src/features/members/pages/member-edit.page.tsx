import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import type { MemberResponse } from "@/features/members/types";
import { useMemberStore } from "@/features/members/stores";
import { MemberForm } from "@/features/members/components";
import LoadingView from "@/features/core/components/loading-view.component";

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

  return (
    <>
      <LoadingView isLoading={pending && !member}>
        <MemberForm initialData={member} isEdit editId={paramId} />
      </LoadingView>
    </>
  );
}
