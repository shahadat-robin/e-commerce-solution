import { useAppSelector } from "@/store/hooks";
import getCartPrice from "@/utils/get-cart-price";
import CartProduct from "./cart-product";

export default function Cart() {
  const cart = useAppSelector((state) => state.cart);
  const totalPrice = getCartPrice(cart);

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
