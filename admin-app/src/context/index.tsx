import useWindowDimensions from "@/hooks/useWindowSize";
import themes from "@/utils/theme";
import { ThemeProvider } from "@emotion/react";
import { FC, ReactNode, createContext, useEffect, useState } from "react";

export const UIContext = createContext({});

interface Props {
  children: ReactNode;
}

const AppContext: FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const [isSidebarExpand, setIsSidebarExpand] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { width: deviceWidth } = useWindowDimensions();

  const changeTheme = () => setTheme((pre) => (pre === "dark" ? "light" : "dark"));
  const sidebarToggle = () => setIsSidebarExpand(!isSidebarExpand);
  const mobileMenuToggle = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    deviceWidth > 1023 && setIsMobileMenuOpen(false);
  }, [deviceWidth]);

  return (
    <UIContext.Provider
      value={{
        theme,
        changeTheme,
        isSidebarExpand,
        sidebarToggle,
        isMobileMenuOpen,
        mobileMenuToggle,
      }}
    >
      <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>
    </UIContext.Provider>
  );
};

export default AppContext;
