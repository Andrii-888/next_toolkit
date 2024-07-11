// "use client";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import React, { useEffect, useState } from "react";
// import CheckoutForm from "../checkoutForm";

// const PaymentForm = () => {
//   const [stripePromise, setStripePromise] = useState(null);
//   const [clientSecret, setClientSecret] = useState("");

//   useEffect(() => {
//     fetch("http://localhost:8000/api/stripe/config").then(async (response) => {
//       const { publishableKey } = await response.json();
//       setStripePromise(loadStripe(publishableKey));
//     });
//   }, []);

//   useEffect(() => {
//     fetch("http://localhost:8000/api/stripe/create-payment-intent", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({}),
//     }).then(async (res) => {
//       const { clientSecret } = await res.json();
//       setClientSecret(clientSecret);
//     });
//   }, []);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
//         <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
//           Payment
//         </h1>
//         {clientSecret && stripePromise && (
//           <Elements stripe={stripePromise} options={{ clientSecret }}>
//             <CheckoutForm />
//           </Elements>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PaymentForm;

"use client";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import CheckoutForm from "../checkoutForm";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const PaymentForm = () => {
  const { t } = useTranslation();
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/api/stripe/config").then(async (response) => {
      const { publishableKey } = await response.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/api/stripe/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    }).then(async (res) => {
      const { clientSecret } = await res.json();
      setClientSecret(clientSecret);
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Payment
        </h1>
        {clientSecret && stripePromise && (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm clientSecret={clientSecret} />
          </Elements>
        )}
        <p className="mt-4 text-sm text-center text-gray-600">
          <Link href="/" className="text-indigo-600 hover:text-indigo-700">
            {t("Continue Shopping")}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default PaymentForm;
