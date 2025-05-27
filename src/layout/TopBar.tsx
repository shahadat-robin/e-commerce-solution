import useUI from "@/hooks/useUI";
import { AppBar, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import { useRouter } from "next/router";
import type { FC } from "react";
import { GiNightSleep } from "react-icons/gi";
import { HiMenuAlt1 } from "react-icons/hi";
import { WiDaySunny } from "react-icons/wi";
import navItems from "./nav-items";

const TopBar: FC = () => {
  const { changeTheme, theme, sidebarToggle, mobileMenuToggle } = useUI();

  const router = useRouter().pathname;

  const title = navItems.find((item) => item.href === router)?.label;

  return (
    <AppBar position="sticky">
      <Stack direction="row">
        <Toolbar
          className={`flex pr-0 pl-3 sm:pr-1 justify-end transition-all duration-300 ease-linear`}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            className="block lg:hidden"
            onClick={mobileMenuToggle}
          >
            <HiMenuAlt1 />
          </IconButton>
        </Toolbar>

        <Toolbar className="flex-1 pl-0 md:pl-3">
          <Typography variant="h6" component="div" className="flex-1">
            {title}
          </Typography>

          <IconButton color="inherit" onClick={changeTheme}>
            {theme === "dark" ? (
              <WiDaySunny className="cursor-pointer text-xl md:text-2xl lg:text-3xl" />
            ) : (
              <GiNightSleep className="text-xl sm:text-2xl md:text-3xl" />
            )}
          </IconButton>
        </Toolbar>
      </Stack>
    </AppBar>
  );
};

export default TopBar;
