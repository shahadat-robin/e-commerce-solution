import { UIContext } from "@/context";
import { useContext } from "react";

const useUI = () => {
  const {
    theme,
    changeTheme,
    isSidebarExpand,
    sidebarToggle,
    isMobileMenuOpen,
    mobileMenuToggle,
  }: any = useContext(UIContext);

  return { theme, changeTheme, isSidebarExpand, sidebarToggle, isMobileMenuOpen, mobileMenuToggle };
};

export default useUI;
