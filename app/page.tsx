import s from "./page.module.scss";
import HeroSection from "./sections/HeroSection";
// import ContactUsSection from "./sections/main_page/ContactUsSection";
import OurServicesSection from "./sections/main_page/OurServicesSection";

export default function Home() {
  return (
    <div className={s.home}>
      <HeroSection />
      <OurServicesSection />
      {/* <ContactUsSection /> */}
    </div>
  );
}
