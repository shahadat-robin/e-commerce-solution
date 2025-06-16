import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { quantityAdjust, removeFromCart } from "@/store/slices/cart.slice";
import { Button, Carousel, message, Modal, Rate, Tooltip, Typography } from "antd";
import Image from "next/image";
import { type Dispatch, useState } from "react";
import { BiCart } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";
import { twMerge } from "tailwind-merge";
import type { IProduct } from "./interface";

interface IProps {
  product: IProduct;
  handleAddToCart: Dispatch<number>;
  price: number;
}

export default function ProductViewModal({ product, handleAddToCart, price }: IProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [toast, toastHolder] = message.useMessage();

  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);
  const hasIntoCart = cart.find((item) => item.productId === product.id);

  const handleIncrement = () => {
    if (hasIntoCart) {
      dispatch(quantityAdjust({ productId: product.id, quantity: hasIntoCart.quantity + 1 }));
    }
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (hasIntoCart) {
      dispatch(quantityAdjust({ productId: product.id, quantity: hasIntoCart.quantity - 1 }));
    }
    setQuantity(quantity - 1);
  };

  const handleRemoveFromCart = () => dispatch(removeFromCart(product.id));

  return (
    <>
      {toastHolder}

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
          {product.images.map((image, index) => (
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
            <Typography.Title level={3}>{product.title}</Typography.Title>
            <Rate disabled value={product.rating} allowHalf className="text-sm" />
          </div>

          <div>
            <p>SKU: {product.sku}</p>
            <p>Availability: {product.availabilityStatus}</p>
          </div>

          <div className="flex items-end gap-3">
            <p className="text-3xl font-semibold">${price}</p>
            <p className="text-lg line-through">${product.price}</p>
          </div>

          <div className="border inline-flex items-center gap-2">
            <span
              className={twMerge(
                "p-2 bg-white-secondary cursor-pointer",
                quantity <= 1 && "pointer-events-none cursor-not-allowed text-gray"
              )}
              onClick={handleDecrement}
            >
              <TiMinus />
            </span>
            <span className="text-lg min-w-[2rem] text-center select-none">
              {hasIntoCart ? hasIntoCart.quantity : quantity}
            </span>
            <span className="p-2 bg-white-secondary cursor-pointer" onClick={handleIncrement}>
              <FaPlus />
            </span>
          </div>

          <div className="inline-flex items-stretch gap-3">
            {hasIntoCart ? (
              <Button
                icon={<BiCart className="text-xl" />}
                type="primary"
                onClick={handleRemoveFromCart}
              >
                Remove from cart
              </Button>
            ) : (
              <Button
                icon={<BiCart className="text-xl" />}
                type="primary"
                onClick={() => handleAddToCart(quantity)}
              >
                Add to cart
              </Button>
            )}

            <Button
              onClick={() =>
                toast.info({
                  content: "Wishlist in not functional yet. Anyway, thanks for checking.",
                })
              }
            >
              Add to wishlist
            </Button>
          </div>

          <div>
            <p>* {product.warrantyInformation}</p>
            <p>* {product.shippingInformation}</p>
          </div>
        </div>
      </Modal>
    </>
  );
}
