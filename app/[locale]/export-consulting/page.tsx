import React from "react";
import s from "./page.module.scss";
import ThreeCardsComponent from "@/components/ThreeCardsComponent";
import KeyServices from "@/app/sections/export_consulting/KeyServicesSection";
import WhyChoose from "@/app/sections/export_consulting/WhyChooseSection";
import ContactUsSection from "@/app/sections/main_page/ContactUsSection";
import GetHeroComponent from "@/hooks/GetHeroComponent";

const Export = () => {
  return (
    <React.Fragment>
      <section className={s.box}>
        <div className={s.background}>
          <GetHeroComponent
            path="consulting-hero"
            className={s.export__title}
          />
          <ThreeCardsComponent
            path="consulting-cards"
            className={s.container}
          />
        </div>
      </section>

      <KeyServices />
      <WhyChoose />
      <ContactUsSection />
    </React.Fragment>
  );
};

export default Export;
