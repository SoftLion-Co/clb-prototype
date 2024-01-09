import s from "./page.module.scss";
import ContactUsSection from "../../sections/main_page/ContactUsSection";
import PageTitleComponent from "@/components/PageTitleComponent";
import ThreeCardsComponent from "@/components/ThreeCardsComponent";
import KeyServices from "../../sections/export_consulting/KeyServices";
import { useTranslations } from "next-intl";
import WhyChoose from "@/app/sections/export_consulting/WhyChoose";

const Export = () => {
  const t = useTranslations("exportConsulting");
  const t1 = useTranslations("exportConsulting.whyChoose");
  return (
    <div className={s.export}>
      <div className={s.box}>
        <div className={s.background}>
          <PageTitleComponent
            title={t("exportConsultingTitle")}
            text={t("exportConsultingSubtitle")}
            className={s.export__title}
          />
          <ThreeCardsComponent
            imagePosition={1}
            smallText={t("heroSmallText")}
            bigText={t("heroBigText")}
            imageSrc="exportConsulting"
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
