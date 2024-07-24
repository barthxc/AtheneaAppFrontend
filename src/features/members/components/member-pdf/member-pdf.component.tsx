import { Button, Heading, Separator } from "@/features/core/components/ui";
import { useNavigate } from "react-router-dom";

export const MemberPdf = ({ id }) => {
  const title = "PDF Socio";
  const description = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
  const navigate = useNavigate();
  const pdfUrl = `${import.meta.env.VITE_BACKEND_URL}/members/pdf/member/${id}`;

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

      <div className="mt-8 flex justify-center gap-2">
        <Button onClick={() => navigate(-1)} variant="default" size="lg">
          Volver
        </Button>
        <Button
          onClick={() => navigate("/dashboard")}
          variant="ghost"
          size="lg">
          Volver al Inicio
        </Button>
      </div>
    </>
  );
};
