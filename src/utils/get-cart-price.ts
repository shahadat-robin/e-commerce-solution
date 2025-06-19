import type { ICartItem } from "@/store/slices/cart.slice";

function getCartPrice(cart: ICartItem[]) {
  const totalPrice = cart.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  return totalPrice;
}

export default getCartPrice;
