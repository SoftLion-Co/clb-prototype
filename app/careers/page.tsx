import s from "./page.module.scss";
import CardsSection from "../sections/careers_page/CardsSection";
import PageTitleComponent from "@/components/PageTitleComponent";
import VacanciesSection from "../sections/careers_page/VacanciesSection";
import ContactUsSection from "../sections/main_page/ContactUsSection";

const Careers = () => {
  return (
    <div className={s.careers}>
      <div className={s.container}>
        <PageTitleComponent
          title={"Careers"}
          text={"Paving the Way to Innovation and New Horizons"}
          className={s.careers__title}
        />
        <CardsSection />
        <VacanciesSection />
      </div>
      <ContactUsSection />
    </div>
  );
};

export default Careers;
