import { useAppSelector } from "@/store/hooks";
import getCartPrice from "@/utils/get-cart-price";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Input, InputNumber } from "antd";
import { type FormEvent, useState } from "react";

interface ShippingInfo {
  name: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  email: string;
  phone: string;
}

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const cart = useAppSelector((state) => state.cart);

  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsProcessing(true);
    setErrorMessage("");

    const form = new FormData(e.currentTarget);

    const formData = {
      name: form.get("fullName") as string,
      email: form.get("email") as string,
      phone: form.get("phone") as string,
      city: form.get("city") as string,
      postalCode: form.get("postalCode") as string,
      address: form.get("address") as string,
    } as ShippingInfo;

    try {
      if (!stripe || !elements) throw new Error("Payment system is not ready");

      for (const [key, value] of Object.entries(formData)) {
        if (!value) {
          console.warn(`Missing required field: ${key}`);
          throw new Error(`Missing required field: ${key}`);
        }
      }

      const res = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: Math.round(getCartPrice(cart) * 100),
          shipping: formData,
          receiptEmail: formData.email,
        }),
      });
      const { clientSecret } = await res.json();

      if (!clientSecret) throw new Error("Payment intent crashed.");

      const cardElement = elements.getElement(CardElement);
      if (!cardElement) throw new Error("Card input is missing");

      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: formData.name,
            email: formData.email,
            address: {
              line1: formData.address,
              city: formData.city,
              postal_code: formData.postalCode,
              country: formData.country,
            },
          },
        },
      });

      if (paymentIntent?.status === "succeeded") {
        console.log("🎉 Payment succeeded!");
        return;
      }

      throw new Error(error?.message ?? "Payment failed.");
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
        console.log("Checkout failed for ==> ", error.message);
      } else {
        setErrorMessage("Something went wrong.");
        console.log("Unknown error during checkout.", error);
      }
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input placeholder="Full name" size="large" name="fullName" required />
      <Input placeholder="Email" size="large" required type="email" name="email" />
      <InputNumber
        placeholder="Phone"
        size="large"
        type="number"
        required
        className="w-full [&_.ant-input-number-handler-wrap]:hidden"
        name="phone"
      />
      <div className="flex items-center gap-5">
        <Input placeholder="City" size="large" className="flex-1" name="city" required />
        <InputNumber
          placeholder="Postal code"
          size="large"
          type="number"
          className="flex-1 [&_.ant-input-number-handler-wrap]:hidden"
          name="postalCode"
        />
      </div>
      <Input.TextArea placeholder="Address" rows={3} required name="address" />

      <CardElement
        className="border py-[7px] px-[11px]"
        options={{
          hidePostalCode: true,
          classes: {
            focus: "border-brand",
          },
          style: { base: { fontSize: "16px", lineHeight: "1.5" } },
        }}
      />

      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        {isProcessing ? "Processing..." : `Pay $${getCartPrice(cart)}`}
      </button>

      {errorMessage && <div className="text-sm text-red-500 mt-2">{errorMessage}</div>}
    </form>
  );
}
