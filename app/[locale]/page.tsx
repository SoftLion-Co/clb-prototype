import s from "./page.module.scss";
import HeroSection from "../sections/main_page/HeroSection";
import OurServicesSection from "../sections/main_page/OurServicesSection";
import ContactUsSection from "../sections/main_page/ContactUsSection";
import BlogCardsSection from "../sections/main_page/BlogCardsSection";
import PartnersSection from "../sections/main_page/PartnersSection";
import useLocale from "@/hooks/useLocale";

export default function Home() {
  const locale = useLocale();
  return (
    <div className={s.home}>
      <HeroSection />
      <OurServicesSection />
      <PartnersSection />
      <BlogCardsSection />
      <ContactUsSection locale={locale} />
    </div>
  );
}
