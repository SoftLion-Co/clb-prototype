import React from "react";
import ContactUsSection from "@/app/sections/main_page/ContactUsSection";
import ProductPortfolioSection from "@/app/sections/commodity_brokerage_page/ProductPortfolioSection";
import HeroSection from "@/app/sections/commodity_brokerage_page/HeroSection";
import OurCoreServices from "@/app/sections/commodity_brokerage_page/OurCoreServices";
import { useTranslations } from "next-intl";

export async function generateMetadata({}) {
  return { title: "Commodity Brokerage" };
}

const Commodity = () => {
  const t = useTranslations("commodityBrokerage");

  return (
    <React.Fragment>
      <HeroSection />
      <ProductPortfolioSection />
      <OurCoreServices />
      <ContactUsSection />
    </React.Fragment>
  );
};

export default Commodity;
