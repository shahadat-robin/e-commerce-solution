import "@/styles/globals.css";
import theme from "@/utils/theme";
import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";
import AppLayout from "../layout";

export default function App(props: AppProps) {
  const { Component: Page, pageProps } = props;

  return (
    <ConfigProvider theme={theme}>
      <AppLayout>
        <Page {...pageProps} />
      </AppLayout>
    </ConfigProvider>
  );
}
