import useUI from "@/hooks/useUI";
import {
  Drawer,
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { SlClose } from "react-icons/sl";
import navItems from "./nav-items";

const MobileSidebar: FC = () => {
  const { isMobileMenuOpen, mobileMenuToggle } = useUI();

  const activeItem = useRouter().pathname;

  return (
    <Drawer open={isMobileMenuOpen} onClose={mobileMenuToggle} transitionDuration={400}>
      <Toolbar className="p-1">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className="ml-auto"
          onClick={mobileMenuToggle}
        >
          <SlClose />
        </IconButton>
      </Toolbar>

      <Stack spacing={1} className="px-5 h-full">
        {navItems.map(({ id, label, icon, href }) => (
          <Link href={href} key={id} onClick={mobileMenuToggle}>
            <ListItemButton
              className={`px-6 gap-3 rounded-md py-1 ${
                activeItem === href && "bg-secondary text-white"
              }`}
            >
              <ListItemIcon className="min-w-max text-inherit">{icon}</ListItemIcon>
              <ListItemText primary={label} />
            </ListItemButton>
          </Link>
        ))}
      </Stack>
    </Drawer>
  );
};

export default MobileSidebar;
