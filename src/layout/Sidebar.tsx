import useUI from "@/hooks/useUI";
import { Divider, ListItemButton, ListItemIcon, ListItemText, Paper } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { IoSettings } from "react-icons/io5";
import navItems from "./nav-items";

const Sidebar: FC = () => {
  const { isSidebarExpand } = useUI();
  const activeItem = useRouter().pathname;

  return (
    <Paper
      className={`transition-all duration-300 py-5 ease-linear overflow-hidden rounded-none hidden lg:block ${
        isSidebarExpand ? "w-[200px]" : "w-[68px]"
      }`}
    >
      {navItems.map(({ icon, id, label, href }) => (
        <Link href={href} key={id}>
          <ListItemButton selected={href === activeItem} className={`px-6 gap-6 menuitem`}>
            <ListItemIcon className="min-w-max text-inherit">{icon}</ListItemIcon>
            <ListItemText primary={label} />
          </ListItemButton>
        </Link>
      ))}

      <Divider />
      <Link href="/settings">
        <ListItemButton
          className={`px-6 gap-6 transition-all ${
            activeItem === "/settings" && "bg-secondary text-white"
          }`}
        >
          <ListItemIcon className="min-w-max text-inherit">
            <IoSettings className="text-xl" />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
      </Link>
    </Paper>
  );
};

export default Sidebar;
