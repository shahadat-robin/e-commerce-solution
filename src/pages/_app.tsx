import AppContext from "@/context";
import "@/styles/globals.css";
import { CssBaseline } from "@mui/material";
import type { AppProps } from "next/app";
import AppLayout from "../layout";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <AppContext>
      <AppLayout>
        <CssBaseline />
        <Component {...pageProps} />
      </AppLayout>
    </AppContext>
  );
}
