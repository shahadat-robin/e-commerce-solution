import FacilitiesSection from "@/sections/facilities-section";
import HeroSection from "@/sections/hero-section";
import ProductListing from "@/sections/product-list";
import type { NextPage } from "next";
import Head from "next/head";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>ShopSizzle</title>
      </Head>

      <HeroSection />
      <FacilitiesSection />
      <ProductListing />
    </>
  );
};

export default HomePage;
