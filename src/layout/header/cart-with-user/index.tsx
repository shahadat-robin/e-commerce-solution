import { Button, Drawer, Dropdown, MenuProps } from "antd";
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
        <FiShoppingCart className="text-xl" /> 0 items
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
        <div className="divide-y ">
          <div className="flex flex-col divide-y">
            {new Array(5).fill("").map((item, index) => (
              <CartProduct key={index} />
            ))}
          </div>

          <div className="text-lg font-semibold flex items-center py-3 justify-between">
            <p>Total:</p>
            <p>$1000.00</p>
          </div>
        </div>

        <Link href="/checkout">
          <Button type="primary" size="large" className="w-full" onClick={() => setOpenCart(false)}>
            Checkout
          </Button>
        </Link>
      </Drawer>
    </>
  );
}
