import CardsSection from "@/app/sections/careers_page/CardsSection";
import VacanciesSection from "@/app/sections/careers_page/VacanciesSection";
import ContactUsSection from "@/app/sections/main_page/ContactUsSection";
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
