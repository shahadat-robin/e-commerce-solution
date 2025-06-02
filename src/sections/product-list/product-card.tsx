import { Rate, Tooltip, Typography } from "antd";
import Image from "next/image";
import { BiCart } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import type { IProduct } from "./interface";

export default function ProductCard({ image, title, price, rating }: IProduct) {
  return (
    <div className="border-[0.5px] group">
      <div className="overflow-hidden relative">
        <Image
          src={image}
          alt=""
          height={200}
          width={200}
          className="w-full h-auto group-hover:scale-110 transition-all"
        />

        <div className="flex items-center justify-center gap-3 absolute bottom-0 left-0 right-0 text-lg transform translate-y-full group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
          <Tooltip title={"Add to wishlist"}>
            <span className="p-1.5 cursor-pointer hover:bg-brand hover:text-white transition duration-300 bg-white-secondary border rounded-full">
              <IoMdHeartEmpty />
            </span>
          </Tooltip>

          <Tooltip title={"View details"}>
            <span className="p-1.5 cursor-pointer hover:bg-brand hover:text-white transition duration-300 bg-white-secondary border rounded-full">
              <BsEye />
            </span>
          </Tooltip>

          <Tooltip title={"Add to cart"}>
            <span className="p-1.5 cursor-pointer hover:bg-brand hover:text-white transition duration-300 bg-white-secondary border rounded-full">
              <BiCart />
            </span>
          </Tooltip>
        </div>
      </div>

      <div className="p-3 text-center">
        <Typography.Title level={5} className="line-clamp-2">
          {title}
        </Typography.Title>
        <Rate disabled defaultValue={rating} allowHalf className="text-sm" />
        <p>${price}.00</p>
      </div>
    </div>
  );
}
