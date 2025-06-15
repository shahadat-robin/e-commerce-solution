import { IProduct } from "@/sections/product-list/interface";
import { useGetProductsQuery } from "@/store/api-slices/products-api";
import { Typography } from "antd";
import Image from "next/image";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";
import { twMerge } from "tailwind-merge";

interface IProps {
  productId: string | number;
}

export default function CartProduct({ productId }: IProps) {
  const [itemQuantity, setItemQuantity] = useState(1);
  const { data, error, isLoading } = useGetProductsQuery("products");

  if (isLoading) return <>Loading...</>;
  if (!data || error) return <>Something wrong</>;

  const product = data.products.find((product) => product.id === productId) as IProduct;

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
                itemQuantity <= 1 && "cursor-not-allowed"
              )}
              onClick={() => itemQuantity > 1 && setItemQuantity(itemQuantity - 1)}
            >
              <TiMinus className="text-xs" />
            </span>
            <span className="min-w-[1rem] text-center select-none">{itemQuantity}</span>
            <span
              className="p-1 bg-white-secondary cursor-pointer"
              onClick={() => setItemQuantity(itemQuantity + 1)}
            >
              <FaPlus className="text-xs" />
            </span>
          </div>

          <p>${(product.price - (product.price * product.discountPercentage) / 100).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
