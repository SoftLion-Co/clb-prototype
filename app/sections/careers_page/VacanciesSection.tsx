import MainTitleComponent from "@/components/MainTitleComponent";
import s from "./VacanciesSection.module.scss";
import VacanciesCards from "@/components/careers_page/VacanciesCards";
import { useTranslations } from "next-intl";

const VacanciesSection = () => {
  const t = useTranslations("careers");
  return (
    <section className={s.vacancies}>
      <MainTitleComponent
        title={t("openVacanciesTitle")}
        className={s.vacancies__title}
      />
      <VacanciesCards />
    </section>
  );
};

export default VacanciesSection;
