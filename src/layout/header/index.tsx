import Image from "next/image";
// import brandLogo from "../../../public/brand-logo.svg";
import { Input } from "antd";
import Link from "next/link";
import CartWithUser from "./cart-with-user";
import InfoBar from "./info-bar";
import NavBar from "./nav-bar";

export default function Header() {
  return (
    <>
      <InfoBar />
      <header className="sticky top-0 bg-white z-50">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/">
            <Image src={"/brand-logo.svg"} alt="" width={200} height={100} />
          </Link>

          <Input.Search
            placeholder="Search"
            size="large"
            className="max-w-[25rem]"
            onSearch={(e) => console.log(e)}
          />

          <CartWithUser />
        </div>

        <NavBar />
      </header>
    </>
  );
}
