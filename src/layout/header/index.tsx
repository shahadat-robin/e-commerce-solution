import Image from "next/image";
// import brandLogo from "../../../public/brand-logo.svg";
import { Input, Skeleton } from "antd";
import dynamic from "next/dynamic";
import Link from "next/link";
import InfoBar from "./info-bar";
import NavBar from "./nav-bar";

const CartWithUser = dynamic(() => import("./cart-with-user"), {
  ssr: false,
  loading: () => <Skeleton.Input active className="h-10" />,
});

export default function Header() {
  return (
    <>
      <InfoBar />
      <header className="sticky top-0 bg-white z-50">
        <div className="container py-4 flex items-center justify-between gap-10">
          <Link href="/">
            <Image src={"/brand-logo.svg"} alt="brand-logo" width={200} height={100} priority />
          </Link>

          <Input.Search
            placeholder="Search"
            size="large"
            className="max-w-[25rem] hidden md:block"
            onSearch={(e) => console.log(e)}
          />

          <CartWithUser />
        </div>

        <NavBar />
      </header>
    </>
  );
}
