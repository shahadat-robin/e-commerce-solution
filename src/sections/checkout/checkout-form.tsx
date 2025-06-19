import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Input } from "antd";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

interface ShippingInfo {
  name: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  email: string;
}

interface CreatePaymentIntentResponse {
  clientSecret: string;
}

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState("");

  const [form, setForm] = useState<ShippingInfo>({
    name: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    email: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    const allFilled = Object.values(form).every((v) => v !== "");

    if (allFilled) {
      fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: 2000, // $20.00
          shipping: form,
          receiptEmail: form.email,
        }),
      })
        .then((res) => res.json())
        .then((data: CreatePaymentIntentResponse) => {
          setClientSecret(data.clientSecret);
        });
    }
  }, [form]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements || !clientSecret) return;

    setIsProcessing(true);
    setMessage("");

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      setMessage("Card input missing.");
      setIsProcessing(false);
      return;
    }

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          name: form.name,
          email: form.email,
          address: {
            line1: form.address,
            city: form.city,
            postal_code: form.postalCode,
            country: form.country,
          },
        },
      },
      shipping: {
        name: form.name,
        address: {
          line1: form.address,
          city: form.city,
          postal_code: form.postalCode,
          country: form.country,
        },
      },
    });

    if (error) {
      setMessage(error.message ?? "Payment failed.");
    } else if (paymentIntent?.status === "succeeded") {
      setMessage("🎉 Payment succeeded!");
    }

    setIsProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input placeholder="Full name" size="large" />
      <Input placeholder="Email" size="large" />
      <div className="flex items-center gap-5">
        <Input placeholder="City" size="large" />
        <Input placeholder="Postal code" size="large" />
      </div>

      <Input.TextArea placeholder="Address" rows={3} />

      <CardElement
        className="p-2 border rounded"
        options={{
          hidePostalCode: true,
        }}
      />

      <button
        type="submit"
        disabled={!stripe || !clientSecret || isProcessing}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        {isProcessing ? "Processing..." : "Pay $20"}
      </button>

      {message && <div className="text-sm text-red-500 mt-2">{message}</div>}
    </form>
  );
}
