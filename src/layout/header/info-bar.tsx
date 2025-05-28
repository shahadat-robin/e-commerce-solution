import Link from "next/link";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

export default function InfoBar() {
  return (
    <div className="bg-white-secondary">
      <div className="container py-1.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1">
            <BiSolidPhoneCall /> Call us:
          </span>
          <Link href="tel:+8801772493214">+8801772493214</Link>
          <span>⬩</span>
          <Link href="tel:+8801772493214">+8801772493214</Link>
        </div>

        <div className="flex items-center gap-1">
          <MdEmail />
          <a href="mailto:connection.robin@gmail.com" target="_blank">
            connection.robin@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
