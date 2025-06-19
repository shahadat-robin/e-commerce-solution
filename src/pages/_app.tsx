import { store } from "@/store";
import theme from "@/utils/theme";
import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import AppLayout from "../layout";
import "./globals.css";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <ConfigProvider theme={theme}>
      <Provider store={store}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </Provider>
    </ConfigProvider>
  );
}
