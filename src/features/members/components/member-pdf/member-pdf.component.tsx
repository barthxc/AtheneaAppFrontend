import { useEffect, useState } from "react";
import { Heading, Separator, Spinner } from "@/features/core/components/ui";
import { useToast } from "@/features/core/components/ui";
import { MemberService } from "@/features/members/services";
import type { MemberPdfProps } from "@/features/members/types";
import { ErrorService } from "@/features/error/service";
import { ERROR_MESSAGES } from "@/features/error/constants";
import NavigationButtons from "@/features/core/components/navigation-buttons.component";

export const MemberPdf: React.FC<MemberPdfProps> = ({ id, bank }) => {
	const title = bank ? "PDF Banco de Socios" : "Ficha de Socio";
	const description = bank ? "Descarga del PDF del Banco de Socios" : "Descarga del PDF del Socio";

	const [pdfUrl, setPdfUrl] = useState<string | null>(null);
	const [pending, setPending] = useState(true);
	const { toast } = useToast();
	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	useEffect(() => {
		const getPdfUrl = async () => {
			try {
				let blob: Blob;
				if (bank) {
					blob = await MemberService.getPDFMembersBank();
				} else {
					blob = await MemberService.getPDFMemberById(id);
				}

				const url = URL.createObjectURL(blob);

				setPdfUrl(url);
			} catch (error: any) {
				const errorMessage = ErrorService.handleError(
					error.status || 500,
					bank ? ERROR_MESSAGES.MEMBER.GET_PDF_PAYMENT_METHOD_BANK : ERROR_MESSAGES.MEMBER.GET_PDF_BY_ID,
				);
				setErrorMessage(errorMessage);
				toast({
					variant: "destructive",
					description: errorMessage,
				});
			} finally {
				setPending(false);
			}
		};

		getPdfUrl();
	}, [id, bank, toast]);

	if (pending) {
		return <Spinner />;
	}

	if (errorMessage) {
		return (
			<div className="h-full grid place-content-center">
				<div className="p-4 bg-red-100 text-red-700 rounded">{errorMessage}</div>
				<NavigationButtons />
			</div>
		);
	}

	return (
		<>
			<div className="flex items-center justify-between">
				<Heading title={title} description={description} />
			</div>
			<Separator />
			{pdfUrl && <iframe src={pdfUrl} width="100%" height="650px" title="pdf" />}
			<NavigationButtons pdf={true} />
		</>
	);
};