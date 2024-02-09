import s from "./page.module.scss";
import ThreeCardsComponent from "@/components/ThreeCardsComponent";
import KeyServices from "@/app/sections/export_consulting/KeyServicesSection";
import WhyChoose from "@/app/sections/export_consulting/WhyChooseSection";
import ContactUsSection from "@/app/sections/main_page/ContactUsSection";
import GetHeroComponent from "@/hooks/GetHeroComponent";

const Export = () => {
  return (
    <div className={s.export}>
      <div className={s.box}>
        <div className={s.background}>
          <GetHeroComponent path="consulting-hero" className={s.export__title}/>
          <ThreeCardsComponent
            path="consulting-cards"
            className={s.container}
          />
        </div>
      </div>

      <KeyServices />
      <WhyChoose />
      <ContactUsSection />
    </div>
  );
};

export default Export;
