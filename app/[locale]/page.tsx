import s from "./page.module.scss";
import HeroSection from "@/app/sections/main_page/HeroSection";
import OurServicesSection from "@/app/sections/main_page/OurServicesSection";
import PartnersSection from "@/app/sections/main_page/PartnersSection";
import BlogCardsSection from "@/app/sections/main_page/BlogCardsSection";
import ContactUsSection from "@/app/sections/main_page/ContactUsSection";

export default function Home() {
  return (
    <div className={s.home}>
      <HeroSection />
      <OurServicesSection />
      <PartnersSection />
      <BlogCardsSection />
      <ContactUsSection />
    </div>
  );
}
