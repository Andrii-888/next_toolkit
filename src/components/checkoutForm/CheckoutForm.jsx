"use client";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import React, { useState } from "react";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      }
    );

    if (error) {
      setError(`Payment failed: ${error.message}`);
      setProcessing(false);
    } else if (paymentIntent.status === "succeeded") {
      setSucceeded(true);
      setError(null);
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <CardElement className="p-4 border border-gray-300 rounded-md" />
      {error && <div className="text-red-500 text-sm">{error}</div>}
      <button
        type="submit"
        disabled={!stripe || processing || succeeded}
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
      >
        {processing ? "Processing..." : "Pay"}
      </button>
    </form>
  );
};

export default CheckoutForm;

// "use client";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import React, { useState } from "react";

// const CheckoutForm = ({ clientSecret }) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [error, setError] = useState(null);
//   const [processing, setProcessing] = useState(false);
//   const [succeeded, setSucceeded] = useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setProcessing(true);

//     const { error, paymentIntent } = await stripe.confirmCardPayment(
//       clientSecret,
//       {
//         payment_method: {
//           card: elements.getElement(CardElement),
//         },
//       }
//     );

//     if (error) {
//       setError(`Payment failed: ${error.message}`);
//       setProcessing(false);
//     } else if (paymentIntent.status === "succeeded") {
//       setSucceeded(true);
//       setError(null);
//       setProcessing(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <CardElement className="p-4 border border-gray-300 rounded-md" />
//       {error && <div className="text-red-500 text-sm">{error}</div>}
//       <button
//         type="submit"
//         disabled={!stripe || processing || succeeded}
//         className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
//       >
//         {processing ? "Processing..." : "Pay"}
//       </button>
//     </form>
//   );
// };

// export default CheckoutForm;
