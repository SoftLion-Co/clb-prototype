import React from "react";
import CardsSection from "@/app/sections/careers_page/CardsSection";
import VacanciesSection from "@/app/sections/careers_page/VacanciesSection";
import ContactUsSection from "@/app/sections/main_page/ContactUsSection";
import { useTranslations } from "next-intl";

export async function generateMetadata({}) {
  return { title: "Careers" };
}

const Careers = () => {
  const t = useTranslations("careers");

  return (
    <React.Fragment>
      <CardsSection />
      <VacanciesSection />
      <ContactUsSection cv />
    </React.Fragment>
  );
};

export default Careers;
