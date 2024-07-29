import React from "react";
import { CardElement } from "@stripe/react-stripe-js";

interface PaymentFormViewProps {
  onSubmit: (event: React.FormEvent) => Promise<void>;
  stripe: boolean;
  error: string | null;
  success: boolean;
  amount: number;
  onAmountChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  loading: boolean;
}

const PaymentFormView: React.FC<PaymentFormViewProps> = ({
  onSubmit,
  stripe,
  error,
  success,
  amount,
  onAmountChange,
  loading,
}) => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Donate</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700 mb-2">
            Amount (EUR):
          </label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={onAmountChange}
            min="0.01"
            step="0.01"
            className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="card-element"
            className="block text-sm font-medium text-gray-700 mb-2">
            Card details:
          </label>
          <div className="p-2 border border-gray-300 rounded-md shadow-sm">
            <CardElement
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
                    color: "#fa755a",
                    iconColor: "#fa755a",
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
            <button
              type="submit"
              disabled={!stripe}
              className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Pay
            </button>
          )}
        </div>

        {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
        {success && (
          <div className="text-green-500 text-sm mt-2">Payment successful!</div>
        )}
      </form>
    </div>
  );
};

export default PaymentFormView;
