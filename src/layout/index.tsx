import type { PropsWithChildren } from "react";
import Footer from "./footer";
import Header from "./header";

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
