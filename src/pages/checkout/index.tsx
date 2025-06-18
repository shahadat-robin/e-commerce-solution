import Checkout from "@/sections/checkout";
import type { NextPage } from "next";
import Head from "next/head";

const CheckoutPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>ShopSizzle - Checkout</title>
      </Head>

      <Checkout />
    </>
  );
};

export default CheckoutPage;
