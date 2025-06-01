import { Carousel, Modal, Tooltip, Typography } from "antd";
import Image from "next/image";
import { useState } from "react";
import { BsEye } from "react-icons/bs";
import { IProduct } from "./interface";

export default function ProductViewModal({ image, title, price }: IProduct) {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          <Image
            src={"https://inspiretemplates.com/E-shope/image/cache/catalog/product/28-212x212.jpg"}
            alt=""
            height={500}
            width={500}
            className="w-full h-auto"
          />
          <Image
            src={"https://inspiretemplates.com/E-shope/image/cache/catalog/product/28-212x212.jpg"}
            alt=""
            height={500}
            width={500}
            className="w-full h-auto"
          />
          <Image
            src={"https://inspiretemplates.com/E-shope/image/cache/catalog/product/28-212x212.jpg"}
            alt=""
            height={500}
            width={500}
            className="w-full h-auto"
          />
        </Carousel>

        <div className="divide-y space-y-1">
          <Typography.Title level={3}>{title}</Typography.Title>
          <div className="py-2">
            <p>SKU: SS-2365273</p>
            <p>Availability: In Stock</p>
          </div>
          <div className="py-2">
            <p className="text-3xl">${price}.00</p>
          </div>
        </div>
      </Modal>
    </>
  );
}
