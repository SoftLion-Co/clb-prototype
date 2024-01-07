import s from "./page.module.scss";
import CardsSection from "../../sections/careers_page/CardsSection";
import VacanciesSection from "../../sections/careers_page/VacanciesSection";
import ContactUsSection from "../../sections/main_page/ContactUsSection";
import { useTranslations } from "next-intl";

const Careers = () => {
  const t = useTranslations("careers");

  return (
    <div>
      <CardsSection />
      <VacanciesSection />
      <ContactUsSection cv />
    </div>
  );
};

export default Careers;
