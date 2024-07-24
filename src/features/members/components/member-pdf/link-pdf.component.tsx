import { Link } from "react-router-dom";

export const LinkPdf = ({ id }) => {
  return (
    <>
      <Link to={`members/pdf/${id}`}>Ver Pdf</Link>
    </>
  );
};
