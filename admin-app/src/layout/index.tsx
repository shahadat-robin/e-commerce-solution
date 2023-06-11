import { Box, Stack } from "@mui/material";
import type { FC, ReactNode } from "react";
import MobileSidebar from "./MobileSidebar";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

interface Props {
  children: ReactNode;
}

const AppLayout: FC<Props> = ({ children }) => {
  return (
    <main className="min-h-screen flex flex-col">
      <MobileSidebar />
      <TopBar />
      <Stack direction="row" className="flex-1">
        <Sidebar />
        <Box className="py-5 flex-1">{children}</Box>
      </Stack>
    </main>
  );
};

export default AppLayout;
