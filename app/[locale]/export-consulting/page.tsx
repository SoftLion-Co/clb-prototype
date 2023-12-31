import s from "./page.module.scss";
import ContactUsSection from "../../sections/main_page/ContactUsSection";
import PageTitleComponent from "@/components/PageTitleComponent";
import ThreeCardsComponent from "@/components/ThreeCardsComponent";
import ProductPortfolioSection from "../../sections/export_consulting/ProductPortfolioSection";
import OurCoreServices from "../../sections/export_consulting/OurCoreServices";
import { useTranslations } from "next-intl";

const Export = () => {
  const t = useTranslations("exportConsulting");
  
  return (
    <div className={s.export}>
      <div className={s.container}>
        <PageTitleComponent
          title={t("exportConsultingTitle")}
          text={t("exportConsultingSubtitle")}
          className={s.export__title}
        />
        <ThreeCardsComponent
          imagePosition={2}
          smallText={t("heroSmallText")}
          bigText={t("heroBigText")}
          imageSrc="exportConsulting"
        />
        <ProductPortfolioSection />
        <OurCoreServices />
      </div>
      <ContactUsSection />
    </div>
  );
};

export default Export;
