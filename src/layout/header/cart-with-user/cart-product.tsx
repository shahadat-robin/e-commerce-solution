import type { IProduct } from "@/sections/product-list/interface";
import { useGetProductsQuery } from "@/store/api-slices/products-api";
import { useAppDispatch } from "@/store/hooks";
import { quantityAdjust, removeFromCart, type ICartItem } from "@/store/slices/cart.slice";
import { Tooltip, Typography } from "antd";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";
import { twMerge } from "tailwind-merge";

interface IProps {
  item: ICartItem;
}

export default function CartProduct({ item }: IProps) {
  const { data, error, isLoading } = useGetProductsQuery("products");

  const dispatch = useAppDispatch();

  if (isLoading) return <>Loading...</>;
  if (!data || error) return <>Something wrong</>;

  const handleAdjustQuantity = (quantity: number) =>
    dispatch(quantityAdjust({ productId: item.productId, quantity }));

  const handleRemoveFromCart = () => dispatch(removeFromCart(item.productId));

  const product = data.products.find((product) => product.id === item.productId) as IProduct;

  return (
    <div className="flex gap-2 pt-2">
      <Image
        src={product.thumbnail}
        alt={product.title}
        height={70}
        width={70}
        className="w-[4.5rem] h-[4.5rem] aspect-square"
      />
      <div className="flex-1 space-y-2">
        <Typography.Title level={5} className="line-clamp-1">
          {product.title}
        </Typography.Title>

        <div className="flex justify-between">
          <div className="border inline-flex items-center gap-2">
            <span
              className={twMerge(
                "p-1 bg-white-secondary cursor-pointer",
                item.quantity <= 1 && "pointer-events-none cursor-not-allowed"
              )}
              onClick={() => handleAdjustQuantity(item.quantity - 1)}
            >
              <TiMinus className="text-xs" />
            </span>
            <span className="min-w-[1rem] text-center select-none">{item.quantity}</span>
            <span
              className="p-1 bg-white-secondary cursor-pointer"
              onClick={() => handleAdjustQuantity(item.quantity + 1)}
            >
              <FaPlus className="text-xs" />
            </span>
          </div>

          <Tooltip
            title="Remove from cart"
            classNames={{
              body: "text-xs",
            }}
          >
            <button className="text-xs text-danger" onClick={handleRemoveFromCart}>
              Remove
            </button>
          </Tooltip>

          <p>${(product.price - (product.price * product.discountPercentage) / 100).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
