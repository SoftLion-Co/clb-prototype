import s from "./page.module.scss";
import PageTitleComponent from "@/components/PageTitleComponent";
import ThreeCardsComponent from "@/components/ThreeCardsComponent";
import KeyServices from "@/app/sections/export_consulting/KeyServicesSection";
import WhyChoose from "@/app/sections/export_consulting/WhyChooseSection";
import ContactUsSection from "@/app/sections/main_page/ContactUsSection";

import { useTranslations } from "next-intl";
import GetHeroComponent from "@/hooks/GetHeroComponent";

const Export = () => {
  const t = useTranslations("exportConsulting");
  const t1 = useTranslations("exportConsulting.whyChoose");
  return (
    <div className={s.export}>
      <div className={s.box}>
        <div className={s.background}>
          <GetHeroComponent path="consulting-hero" className={s.export__title}/>
          <ThreeCardsComponent
            imagePosition={1}
            smallText={t("heroSmallText")}
            bigText={t("heroBigText")}
            imageSrc="exportConsulting"
            className={s.container}
          />
        </div>
      </div>

      <KeyServices />
      <WhyChoose text1={t1("text1")} text2={t1("text2")} text3={t1("text3")} />
      <ContactUsSection />
    </div>
  );
};

export default Export;
