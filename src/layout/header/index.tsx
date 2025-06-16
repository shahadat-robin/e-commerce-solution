import Image from "next/image";
// import brandLogo from "../../../public/brand-logo.svg";
import { Input, Skeleton } from "antd";
import dynamic from "next/dynamic";
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
        <div className="container py-4 flex items-center justify-between">
          <Image src={"/brand-logo.svg"} alt="" width={200} height={100} />

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
