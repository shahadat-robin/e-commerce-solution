import Image from "next/image";
// import brandLogo from "../../../public/brand-logo.svg";
import { Button } from "antd";
import InfoBar from "./info-bar";
import NavBar from "./nav-bar";

export default function Header() {
  return (
    <>
      <InfoBar />
      <header className="sticky top-0 bg-white">
        <div className="container py-4 flex items-center justify-between">
          <Image src={"/brand-logo.svg"} alt="" width={200} height={100} />

          <div>
            <Button>Cart</Button>
          </div>
        </div>
        <NavBar />
      </header>
    </>
  );
}
