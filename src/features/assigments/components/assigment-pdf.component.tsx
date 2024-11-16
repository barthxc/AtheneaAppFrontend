import { useEffect, useState } from "react";

import { Heading, Separator } from "@/features/core/components/ui";
import { useToast } from "@/features/core/components/ui";
import { PdfSkeleton } from "@/features/members/components";
import { ErrorService } from "@/features/error/service";
import { ERROR_MESSAGES } from "@/features/error/constants";
import { LoadingView, NavigationButtons } from "@/features/core/components";
import { AssigmentService } from "@/features/assigments/services";

export const AssignmentPdf = ({ id }: { id: string | undefined }) => {
	const title = "Cesión";
	const description = "Descarga de la Cesión";

	const [pdfUrl, setPdfUrl] = useState<string | null>(null);
	const [pending, setPending] = useState(true);
	const { toast } = useToast();
	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	useEffect(() => {
		const getPdfUrl = async () => {
			try {
				const blob: Blob = id && (await AssigmentService.getPDFAssigment(id));
				const url = URL.createObjectURL(blob);
				setPdfUrl(url);
			} catch (error: any) {
				const errorMessage = ErrorService.handleError(
					error.status || 500,
					ERROR_MESSAGES.MEMBER.GET_PDF_PAYMENT_METHOD_BANK,
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
	}, [id, toast]);

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
			<LoadingView isLoading={pending} skeleton={<PdfSkeleton />}>
				{pdfUrl && <iframe src={pdfUrl} width="100%" height="650px" title="pdf" />}
			</LoadingView>

			<NavigationButtons pdf={true} />
		</>
	);
};
