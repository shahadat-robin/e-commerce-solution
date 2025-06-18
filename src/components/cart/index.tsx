import { useAppSelector } from "@/store/hooks";
import { Empty } from "antd";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import CartProduct from "./cart-product";

interface IProps {
  shoppingLinkWhenEmpty?: boolean;
}

export default function Cart({ shoppingLinkWhenEmpty = false }: IProps) {
  const cart = useAppSelector((state) => state.cart);

  if (!cart.length) {
    return (
      <div className="text-center space-y-5">
        <Empty description="Oops, your cart is empty. Add items to proceed to checkout." />
        {shoppingLinkWhenEmpty && (
          <Link href="/" className="inline-flex items-center gap-2 hover-ellipse">
            <FaArrowLeftLong />
            Shopping
          </Link>
        )}
      </div>
    );
  }

  const totalPrice = cart.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  return (
    <div className="divide-y">
      <div className="flex flex-col divide-y">
        {cart.map((item, index) => (
          <CartProduct key={index} item={item} />
        ))}
      </div>

      <div className="text-lg font-semibold flex items-center py-3 gap-5 justify-end">
        <p>Total:</p>
        <p>${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
}
