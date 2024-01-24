import s from "./page.module.scss";
import HeroSection from "../sections/main_page/HeroSection";
import OurServicesSection from "../sections/main_page/OurServicesSection";
import PartnersSection from "../sections/main_page/PartnersSection";
import TradingMarketSection from "../sections/main_page/TradingMarketSection";
import BlogCardsSection from "../sections/main_page/BlogCardsSection";
import ContactUsSection from "../sections/main_page/ContactUsSection";

export default function Home() {
  return (
    <div className={s.home}>
      <HeroSection />
      <OurServicesSection />
      <PartnersSection />
      <TradingMarketSection />
      <BlogCardsSection />
      <ContactUsSection />
    </div>
  );
}
