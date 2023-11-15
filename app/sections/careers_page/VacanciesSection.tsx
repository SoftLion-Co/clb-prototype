import MainTitleComponent from "@/components/MainTitleComponent";
import s from "./VacanciesSection.module.scss";
import VacanciesCards from "@/components/careers_page/VacanciesCards";

const VacanciesSection = () => {
  return (
    <section className={s.vacancies}>
      <MainTitleComponent
        title="Open Vacancies"
        className={s.vacancies__title}
      />
      <VacanciesCards />
    </section>
  );
};

export default VacanciesSection;
