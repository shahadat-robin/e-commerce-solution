import BlockTitle from "@/components/block-title";
import Cart from "@/components/cart";
import EmptyCart from "@/components/empty-cart";
import { useAppSelector } from "@/store/hooks";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./checkout-form";

const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`);

export default function Checkout() {
  const cart = useAppSelector((state) => state.cart);

  return (
    <section className="py-10">
      <div className="container space-y-5">
        <BlockTitle>Checkout</BlockTitle>

        {!cart.length ? (
          <EmptyCart />
        ) : (
          <div className="grid grid-cols-5 gap-10">
            <div className="col-span-3">
              <Elements stripe={stripePromise}>
                <CheckoutForm />
              </Elements>
            </div>

            <div className="col-span-2">
              <Cart />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
