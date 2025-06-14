import { Button, Carousel, Modal, Rate, Tooltip, Typography } from "antd";
import Image from "next/image";
import { useState } from "react";
import { BiCart } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";
import { twMerge } from "tailwind-merge";
import type { IProduct } from "./interface";

export default function ProductViewModal({
  images,
  title,
  price,
  discountPercentage,
  rating,
}: IProduct) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <Tooltip title={"View details"}>
        <span
          className="p-1.5 cursor-pointer hover:bg-brand hover:text-white transition duration-300 bg-white-secondary border rounded-full"
          onClick={() => setIsModalOpen(true)}
        >
          <BsEye />
        </span>
      </Tooltip>

      <Modal
        title={<span className="invisible">Product Details</span>}
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        width={800}
        footer={null}
        classNames={{
          body: "grid grid-cols-2 gap-5",
        }}
      >
        <Carousel
          className="h-full"
          rootClassName="h-full border"
          autoplay={{ dotDuration: true }}
          autoplaySpeed={5000}
          pauseOnHover={false}
          adaptiveHeight
          draggable
        >
          {images.map((image, index) => (
            <Image
              src={image}
              alt=""
              key={index}
              height={500}
              width={500}
              className="w-full h-auto"
            />
          ))}
        </Carousel>

        <div className="space-y-5">
          <div>
            <Typography.Title level={3}>{title}</Typography.Title>
            <Rate disabled value={rating} allowHalf className="text-sm" />
          </div>

          <div>
            <p>SKU: SS-2365273</p>
            <p>Availability: In Stock</p>
          </div>

          <div className="flex items-end gap-3">
            <p className="text-3xl font-semibold">
              ${(price - (price * discountPercentage) / 100).toFixed(2)}
            </p>
            <p className="text-lg line-through">${price}</p>
          </div>

          <div className="border inline-flex items-center gap-2">
            <span
              className={twMerge(
                "p-2 bg-white-secondary cursor-pointer",
                quantity <= 1 && "cursor-not-allowed"
              )}
              onClick={() => quantity > 1 && setQuantity(quantity - 1)}
            >
              <TiMinus />
            </span>
            <span className="text-lg min-w-[2rem] text-center select-none">{quantity}</span>
            <span
              className="p-2 bg-white-secondary cursor-pointer"
              onClick={() => setQuantity(quantity + 1)}
            >
              <FaPlus />
            </span>
          </div>

          <div className="inline-flex items-stretch gap-3">
            <Button icon={<BiCart className="text-xl" />} type="primary" className="">
              Add to cart
            </Button>
            <Button>Add to wishlist</Button>
          </div>

          <p>* Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
      </Modal>
    </>
  );
}
