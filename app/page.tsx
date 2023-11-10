import s from "./page.module.scss";
import HeroSection from "./sections/HeroSection";
import OurServicesSection from "./sections/main_page/OurServicesSection";
import ContactUsSection from "./sections/main_page/ContactUsSection";
import BlogCardSection from "./sections/main_page/BlogCardSection";
import PartnersSection from "./sections/main_page/PartnersSection";

export default function Home() {
  return (
    <div className={s.home}>
      <HeroSection />
      <OurServicesSection />
      <PartnersSection />
      <BlogCardSection />
      <ContactUsSection />
    </div>
  );
}
