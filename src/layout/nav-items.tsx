import { ReactNode } from "react";
import { BsGridFill } from "react-icons/bs";
import { FaShoppingCart, FaUsers } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";

type NavItemType = {
  id: number;
  icon: ReactNode;
  label: string;
  href: string;
};

const navItems: NavItemType[] = [
  { id: 1, label: "Dashboard", href: "/", icon: <BsGridFill className="lg:text-xl" /> },
  { id: 2, icon: <FaShoppingCart className="lg:text-xl" />, label: "Orders", href: "/orders" },
  { id: 3, icon: <FaUsers className="lg:text-xl" />, label: "Customers", href: "/customers" },
  { id: 4, icon: <IoStatsChart className="lg:text-xl" />, label: "Reports", href: "/reports" },
];

export default navItems;
