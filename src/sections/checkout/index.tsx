import BlockTitle from "@/components/block-title";
import Cart from "@/components/cart";
import EmptyCart from "@/components/empty-cart";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { clearCart } from "@/store/slices/cart.slice";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Modal } from "antd";
import { useRouter } from "next/router";
import CheckoutForm from "./checkout-form";

const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`);

export default function Checkout() {
  const cart = useAppSelector((state) => state.cart);
  const [modal, contextHolder] = Modal.useModal();

  const router = useRouter();
  const dispatch = useAppDispatch();

  const showSuccessModal = () => {
    let secondsToGo = 5;

    const instance = modal.success({
      title: "Order placed successfully.",
      content: (
        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur omnis esse
            recusandae quibusdam voluptas neque qui ex nobis laudantium sunt!
          </p>
          <p className="text-xl text-center">{secondsToGo}</p>
        </div>
      ),
      footer: null,
    });

    const timer = setInterval(() => {
      secondsToGo -= 1;
      instance.update({
        content: (
          <div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur omnis esse
              recusandae quibusdam voluptas neque qui ex nobis laudantium sunt!
            </p>
            <p className="text-xl text-center">{secondsToGo}</p>
          </div>
        ),
      });
    }, 1000);

    setTimeout(() => {
      clearInterval(timer);
      router.push("/");
      instance.destroy();
      dispatch(clearCart());
    }, secondsToGo * 1000);
  };

  return (
    <section className="py-10">
      {contextHolder}
      <div className="container space-y-5">
        <BlockTitle>Checkout</BlockTitle>

        {!cart.length ? (
          <EmptyCart />
        ) : (
          <div className="grid grid-cols-5 gap-10">
            <div className="col-span-3">
              <Elements stripe={stripePromise}>
                <CheckoutForm showSuccessModal={showSuccessModal} />
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
