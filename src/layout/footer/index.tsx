import { Button, Typography } from "antd";
import Link from "next/link";
import { BiPhoneCall } from "react-icons/bi";
import { FaFacebook, FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { quickLinks } from "./data";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container grid grid-cols-4 py-10">
        {quickLinks.map((item, index) => (
          <div className="space-y-5" key={index}>
            <Typography.Title
              level={4}
              className="relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-[3rem] after:bg-brand"
            >
              {item.title}
            </Typography.Title>

            <ul className="flex flex-col gap-2">
              {item.links ? (
                item.links.map(({ title, href }, key) => (
                  <li key={key}>
                    <Link href={href} className="hover-ellipse">
                      {title}
                    </Link>
                  </li>
                ))
              ) : (
                <>
                  <li className="flex gap-2">
                    <IoLocationOutline className="text-2xl" />
                    <span>{item.contactInfo.location}</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <MdOutlineMail className="text-xl" />
                    <span>{item.contactInfo.email}</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <BiPhoneCall className="text-xl" />
                    <span>{item.contactInfo.phone}</span>
                  </li>
                  <li className="py-3 flex items-center gap-3">
                    <Button
                      shape="circle"
                      className="flex items-center justify-center"
                      icon={<FaFacebook className="text-xl" />}
                    />
                    <Button
                      shape="circle"
                      className="flex items-center justify-center"
                      icon={<FaInstagram className="text-xl" />}
                    />
                    <Button
                      shape="circle"
                      className="flex items-center justify-center"
                      icon={<FaPinterest className="text-xl" />}
                    />
                    <Button
                      shape="circle"
                      className="flex items-center justify-center"
                      icon={<FaYoutube className="text-xl" />}
                    />
                  </li>
                </>
              )}
            </ul>
          </div>
        ))}
      </div>

      <div className="py-5 bg-brand text-center">
        Developed By{" "}
        <Link href="https://shahadat-robin.vercel.app" target="_blank" className="font-semibold">
          Shahadat Robin
        </Link>{" "}
        © 2023
      </div>
    </footer>
  );
}
