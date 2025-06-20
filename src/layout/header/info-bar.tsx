import Link from "next/link";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineMail } from "react-icons/md";

export default function InfoBar() {
  return (
    <div className="bg-white-secondary">
      <div className="container py-1.5 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1">
            <BiPhoneCall /> <span className="hidden md:block">Call us:</span>
          </span>
          <Link href="tel:+8801772493214" className="hover-underline">
            +8801772493214
          </Link>
          <span>⬩</span>
          <Link href="tel:+8801772493214" className="hover-underline">
            +8801772493214
          </Link>
        </div>

        <div className="flex items-center gap-1">
          <MdOutlineMail />
          <Link
            href="mailto:connection.robin@gmail.com"
            className="hover-underline"
            target="_blank"
          >
            connection.robin@gmail.com
          </Link>
        </div>
      </div>
    </div>
  );
}
