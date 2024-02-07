import s from "./page.module.scss";
import OurStorySection from "@/app/sections/about_us_page/OurStorySection";
import OurAdvantagesSection from "@/app/sections/about_us_page/OurAdvantagesSection";
import ContactUsSection from "@/app/sections/main_page/ContactUsSection";
import OurTeamSection from "@/app/sections/about_us_page/OurTeamSection";
import GetHeroComponent from "@/hooks/GetHeroComponent";
import classNames from "classnames";

export default function AboutUs() {

  return (
    <div className={s.about}>
      <div className={s.box}>
        <GetHeroComponent path="about-hero" className={classNames(s.background, s.about__container)} />
      </div>

      <OurStorySection />
      <OurTeamSection />
      <OurAdvantagesSection />
      <ContactUsSection />
    </div>
  );
}
