import { loadStripe } from "@stripe/stripe-js";
import type { NextPage } from "next";
import Head from "next/head";

const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`);

const CheckoutPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>ShopSizzle - Checkout</title>
      </Head>

      <section>
        <div className="container">
          <h2>This is checkout page</h2>

          {/* <Elements
            stripe={stripePromise}
            options={{
              clientSecret: process.env.STRIPE_SECRET_KEY,
            }}
          >
            <PaymentElement id="payment-element" />
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#333",
                    "::placeholder": { color: "#999" },
                  },
                  invalid: { color: "#e53935" },
                },
              }}
            />
          </Elements> */}
        </div>
      </section>
    </>
  );
};

export default CheckoutPage;
