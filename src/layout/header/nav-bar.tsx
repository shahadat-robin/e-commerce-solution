import { Dropdown, MenuProps, Space } from "antd";
import Link from "next/link";
import { IoMdArrowDropdown } from "react-icons/io";

export default function NavBar() {
  const items: MenuProps["items"] = [
    {
      key: "1",
      type: "group",
      label: "Group title",
      children: [
        {
          key: "1-1",
          label: "1st menu item",
        },
        {
          key: "1-2",
          label: "2nd menu item",
        },
      ],
    },
    {
      key: "2",
      label: "sub menu",
      children: [
        {
          key: "2-1",
          label: "3rd menu item",
        },
        {
          key: "2-2",
          label: "4th menu item",
        },
      ],
    },
    {
      key: "3",
      label: "disabled sub menu",
      disabled: true,
      children: [
        {
          key: "3-1",
          label: "5d menu item",
        },
        {
          key: "3-2",
          label: "6th menu item",
        },
      ],
    },
  ];

  return (
    <nav className="bg-dark text-white">
      <div className="container flex items-center gap-10">
        <Dropdown
          menu={{ items }}
          trigger={["click"]}
          className="bg-brand cursor-pointer py-3 px-10 group"
        >
          <Space className="uppercase tracking-widest">
            Categories
            <IoMdArrowDropdown className="text-xl group-[.ant-dropdown-open]:rotate-180 transition-all duration-300" />
          </Space>
        </Dropdown>

        <ul className="md:flex items-center gap-10 list-['⬩'] list-inside py-3 [&>li]:transition-colors [&>li]:duration-300 hidden">
          <li className="hover:text-brand">
            <Link href="#">Specials</Link>
          </li>
          <li className="hover:text-brand">
            <Link href="#">Specials</Link>
          </li>
          <li className="hover:text-brand">
            <Link href="#">Specials</Link>
          </li>
          <li className="hover:text-brand">
            <Link href="#">Specials</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
