import s from "./page.module.scss";
import OurStorySection from "@/app/sections/about_us_page/OurStorySection";
import OurAdvantagesSection from "@/app/sections/about_us_page/OurAdvantagesSection";
import ContactUsSection from "@/app/sections/main_page/ContactUsSection";
import OurTeamSection from "@/app/sections/about_us_page/OurTeamSection";
import HeroSection from "@/app/sections/about_us_page/HeroSection";

export default function AboutUs() {

  return (
    <div className={s.about}>
      <div className={s.box}>
        <HeroSection />
      </div>

      <OurStorySection />
      <OurTeamSection />
      <OurAdvantagesSection />
      <ContactUsSection />
    </div>
  );
}
