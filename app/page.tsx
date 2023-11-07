import s from "./page.module.scss";
import HeroSection from "./sections/HeroSection";
import OurServicesSection from "./sections/main_page/OurServicesSection";
import ContactUsSection from "./sections/main_page/ContactUsSection";

export default function Home() {
  return (
    <div className={s.home}>
      <HeroSection />
      <OurServicesSection />
      <ContactUsSection />
    </div>
  );
}
