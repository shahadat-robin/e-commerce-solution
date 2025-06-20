import { Typography } from "antd";
import { BiSupport } from "react-icons/bi";
import { BsCashCoin } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { GoGift } from "react-icons/go";

export default function FacilitiesSection() {
  return (
    <section className="py-10">
      <div className="container">
        <div className="border grid sm:grid-cols-2 lg:grid-cols-4 divide-y divide-x">
          <div className="flex items-center gap-5 p-5">
            <GoGift className="text-4xl" />
            <div>
              <Typography.Title level={5}>Special gift cards</Typography.Title>
              <p className="text-sm">Give a perfect gift</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-5">
            <BsCashCoin className="text-4xl" />
            <div>
              <Typography.Title level={5}>Secure payment</Typography.Title>
              <p className="text-sm">100% secure payment</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-5">
            <BiSupport className="text-4xl" />
            <div>
              <Typography.Title level={5}>24/7 support</Typography.Title>
              <p className="text-sm">Seamless online support</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-5">
            <FaShippingFast className="text-4xl" />
            <div>
              <Typography.Title level={5}>Free shipping</Typography.Title>
              <p className="text-sm">give a perfect gift</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
