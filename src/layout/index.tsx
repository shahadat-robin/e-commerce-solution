import type { PropsWithChildren } from "react";
import Footer from "./footer";
import Header from "./header";
import NewsLetter from "./newsletter";

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <NewsLetter />
      <Footer />
    </>
  );
}
