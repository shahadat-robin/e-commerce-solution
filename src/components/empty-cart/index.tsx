import { Empty } from "antd";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

interface IProps {
  shoppingLink?: boolean;
}

export default function EmptyCart({ shoppingLink=true }: IProps) {
  return (
    <div className="text-center space-y-5">
      <Empty description="Oops, your cart is empty. Add items to proceed to checkout." />
      {shoppingLink && (
        <Link href="/" className="inline-flex items-center gap-2 hover-ellipse">
          <FaArrowLeftLong />
          Shopping
        </Link>
      )}
    </div>
  );
}
