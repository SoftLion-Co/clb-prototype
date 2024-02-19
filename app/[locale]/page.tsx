import React from "react";
import HeroSection from "../sections/main_page/HeroSection";
import OurServicesSection from "../sections/main_page/OurServicesSection";
import PartnersSection from "../sections/main_page/PartnersSection";
import TradingMarketSection from "../sections/main_page/TradingMarketSection";
import BlogCardsSection from "../sections/main_page/BlogCardsSection";
import ContactUsSection from "../sections/main_page/ContactUsSection";

export async function generateMetadata({}) {
  return { title: "Commodities & Logistics Brokers" };
}

export default function Home() {
  return (
    <React.Fragment>
      <HeroSection />
      <OurServicesSection />
      <PartnersSection />
      <TradingMarketSection />
      <BlogCardsSection />
      <ContactUsSection />
    </React.Fragment>
  );
}
