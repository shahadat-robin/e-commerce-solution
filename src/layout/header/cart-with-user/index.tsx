import Cart from "@/components/cart";
import { useAppSelector } from "@/store/hooks";
import { Button, Drawer, Dropdown, MenuProps } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { FiShoppingCart, FiUser } from "react-icons/fi";

const items: MenuProps["items"] = [
  { label: "1st menu item", key: "1" },
  { label: "2nd menu item", key: "2" },
  { label: "3rd menu item", key: "3" },
];

export default function CartWithUser() {
  const [openCart, setOpenCart] = useState(false);
  const cart = useAppSelector((state) => state.cart);

  const router = useRouter();

  const closeDrawer = () => setOpenCart(false);

  useEffect(() => {
    setOpenCart(false);
  }, [router.pathname]);

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
        onClose={closeDrawer}
        open={openCart}
        classNames={{
          body: "flex flex-col justify-between gap-5",
        }}
      >
        <Cart />

        {!cart.length ? (
          <Link href="/" onClick={closeDrawer}>
            <Button type="primary" size="large" className="w-full" icon={<FaArrowLeftLong />}>
              Shopping
            </Button>
          </Link>
        ) : (
          <Link href="/checkout" onClick={closeDrawer}>
            <Button
              type="primary"
              size="large"
              className="w-full"
              icon={<FaArrowRightLong />}
              iconPosition="end"
            >
              Checkout
            </Button>
          </Link>
        )}
      </Drawer>
    </>
  );
}
