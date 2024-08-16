import { CardElement } from "@stripe/react-stripe-js";
import type { UseFormReturn } from "react-hook-form";

interface PaymentFormViewProps extends FormViewProps {
	onSubmit: (event: React.FormEvent) => Promise<void>;
	stripe: boolean;
	error: string | false;
	success: boolean;
	loading: boolean;
	form: UseFormReturn<DonationFormValues>;
}

import { FormField } from "@/features/core/components";
import { Input, Form } from "@/features/core/components/ui";
import type { FormViewProps } from "@/features/core/types";
import type { DonationFormValues } from "../types/donation.type";
import type { StripeCardElementChangeEvent } from "@stripe/stripe-js";
import { useState } from "react";

const PaymentFormView: React.FC<PaymentFormViewProps> = ({ onSubmit, stripe, error, success, loading, form }) => {
	const [isComplete, setIsComplete] = useState<boolean>(false);
	const [isEmpty, setIsEmpty] = useState<boolean>(true);
	const [cardElementError, setCardElementError] = useState<string | false>(false);

	const handleCardValidation = (event: StripeCardElementChangeEvent) => {
		if (event.complete) {
			setIsComplete(true);
		} else {
			setIsComplete(false);
		}
		if (event.empty) {
			setIsEmpty(true);
		} else {
			setIsEmpty(false);
		}
		if (event.error) {
			setCardElementError(event.error.message);
		} else {
			setCardElementError(false);
		}
	};

	console.log("LOADING---->", loading);
	console.log("ERROR---->", error);
	console.log("isEMPTY---->", isEmpty);
	console.log("isCOMPLETE---->", isComplete);
	return (
		<>
			<div className="max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
				{success && (
					<div className="text-green-500 font-bold text-sm mt-2 p-4">Pago registrado!! Intentaremos hacer cosas</div>
				)}
				<h2 className="text-2xl font-semibold mb-6 text-gray-800">Donación</h2>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
						<div>
							<FormField
								formControl={form.control}
								name="name"
								label="Nombre"
								render={{ renderProp: ({ field }) => <Input disabled={loading} placeholder="Anónimo" {...field} /> }}
							/>
						</div>
						<div>
							<FormField
								formControl={form.control}
								name="amount"
								label="Cantidad"
								render={{
									renderProp: ({ field }) => <Input type="number" disabled={loading} placeholder="€" {...field} />,
								}}
							/>
						</div>

						<div>
							<label
								htmlFor="card-element"
								className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base">
								Detalles de la Tarjeta:
							</label>
							<div className="p-2 border border-gray-300 rounded-md shadow-sm">
								<CardElement
									onChange={handleCardValidation}
									id="card-element"
									className="w-full"
									options={{
										style: {
											base: {
												color: "#32325d",
												fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
												fontSize: "16px",
												"::placeholder": {
													color: "#aab7c4",
												},
											},
											invalid: {
												color: "#2974ba",
												iconColor: "#2974ba",
											},
										},
									}}
								/>
							</div>
						</div>

						<div>
							{loading ? (
								<div className="text-center text-blue-600">Loading...</div>
							) : (
								!error &&
								!isEmpty &&
								isComplete && (
									<button
										type="submit"
										disabled={!stripe}
										className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
										Donar
									</button>
								)
							)}
						</div>

						{error ||
							(cardElementError && <div className="text-red-500 text-sm mt-2">{error || cardElementError}</div>)}
					</form>
				</Form>
			</div>
		</>
	);
};

export default PaymentFormView;
