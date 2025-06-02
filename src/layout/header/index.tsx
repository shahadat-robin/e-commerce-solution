import Image from "next/image";
// import brandLogo from "../../../public/brand-logo.svg";
import { Dropdown, Input, MenuProps } from "antd";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import InfoBar from "./info-bar";
import NavBar from "./nav-bar";

export default function Header() {
  const items: MenuProps["items"] = [
    { label: "1st menu item", key: "1" },
    { label: "2nd menu item", key: "2" },
    { label: "3rd menu item", key: "3" },
  ];

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

          <Dropdown.Button
            menu={{ items }}
            size="large"
            type="primary"
            placement="bottomRight"
            rootClassName="w-max"
            icon={<FiUser className="text-xl" />}
            arrow
            onClick={() => console.log("will expose the cart")}
          >
            <FiShoppingCart className="text-xl" /> 0 items
          </Dropdown.Button>
        </div>

        <NavBar />
      </header>
    </>
  );
}
