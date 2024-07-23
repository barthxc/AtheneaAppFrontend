import { Heading, Separator } from "@/features/core/components/ui";

export const MemberPdfView = () => {
  const title = "PDF Socio";
  const description = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
  const action = "Volver";

  const pdfUrl =
    "https://athenea-app-backend.vercel.app/api/members/pdf/bank/1354899f-d355-4847-a0da-a65a68ed3bfb";
  return (
    <>
      {/* <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      /> */}
      <div className="flex items-center justify-between">
        <Heading title={title} description={description} />
      </div>
      <Separator />
      <iframe src={pdfUrl} width="100%" height="650px" title="pdf" />
    </>
  );
};
