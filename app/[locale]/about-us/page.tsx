import React from "react";
import s from "./page.module.scss";
import OurStorySection from "@/app/sections/about_us_page/OurStorySection";
import OurAdvantagesSection from "@/app/sections/about_us_page/OurAdvantagesSection";
import ContactUsSection from "@/app/sections/main_page/ContactUsSection";
import OurTeamSection from "@/app/sections/about_us_page/OurTeamSection";
import GetHeroComponent from "@/hooks/GetHeroComponent";
import classNames from "classnames";

export async function generateMetadata({}) {
  return { title: "About Us" };
}

export default function AboutUs() {
  return (
    <React.Fragment>
      <section className={s.box}>
        <GetHeroComponent
          path="about-hero"
          className={classNames(s.background, s.about__container)}
        />
      </section>

      <OurStorySection />
      <OurTeamSection />
      <OurAdvantagesSection />
      <ContactUsSection />
    </React.Fragment>
  );
}
