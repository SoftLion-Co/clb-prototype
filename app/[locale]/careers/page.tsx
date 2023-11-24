import s from "./page.module.scss";
import CardsSection from "../../sections/careers_page/CardsSection";
import PageTitleComponent from "@/components/PageTitleComponent";
import VacanciesSection from "../../sections/careers_page/VacanciesSection";
import ContactUsSection from "../../sections/main_page/ContactUsSection";
import { useTranslations } from "next-intl";

const Careers = () => {
  const t = useTranslations("careers");

  return (
    <div className={s.careers}>
      <div className={s.container}>
        <PageTitleComponent
          title={t("careersTitle")}
          text={t("careersSubtitle")}
          className={s.careers__title}
        />
        <CardsSection />
        <VacanciesSection />
      </div>
      <ContactUsSection cv />
    </div>
  );
};

export default Careers;
