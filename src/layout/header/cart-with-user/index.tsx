import { useAppSelector } from "@/store/hooks";
import { Button, Drawer, Dropdown, Empty, MenuProps } from "antd";
import Link from "next/link";
import { useState } from "react";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import CartProduct from "./cart-product";

const items: MenuProps["items"] = [
  { label: "1st menu item", key: "1" },
  { label: "2nd menu item", key: "2" },
  { label: "3rd menu item", key: "3" },
];

export default function CartWithUser() {
  const [openCart, setOpenCart] = useState(false);
  const cart = useAppSelector((state) => state.cart);

  const totalPrice = cart.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  return (
    <>
      <Dropdown.Button
        menu={{ items }}
        size="large"
        type="primary"
        placement="bottomRight"
        rootClassName="w-max"
        icon={<FiUser className="text-xl" />}
        arrow
        onClick={() => setOpenCart(true)}
      >
        <FiShoppingCart className="text-xl" /> {cart.length} items
      </Dropdown.Button>

      <Drawer
        title="Cart"
        closable={{ "aria-label": "Close Button" }}
        onClose={() => setOpenCart(false)}
        open={openCart}
        classNames={{
          body: "flex flex-col justify-between gap-5",
        }}
      >
        {!cart.length ? (
          <Empty description="Empty cart" />
        ) : (
          <>
            <div className="divide-y">
              <div className="flex flex-col divide-y">
                {cart.map((item, index) => (
                  <CartProduct key={index} item={item} />
                ))}
              </div>

              <div className="text-xl font-semibold flex items-center py-3 justify-between">
                <p>Total:</p>
                <p>${totalPrice.toFixed(2)}</p>
              </div>
            </div>

            <Link href="/checkout" onClick={() => setOpenCart(false)}>
              <Button type="primary" size="large" className="w-full">
                Checkout
              </Button>
            </Link>
          </>
        )}
      </Drawer>
    </>
  );
}
