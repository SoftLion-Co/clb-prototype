import s from "./VacanciesSection.module.scss";
import MainTitleComponent from "@/components/MainTitleComponent";
import VacanciesCards from "@/components/careers_page/VacanciesCards";
import { useTranslations } from "next-intl";

const VacanciesSection = () => {
  const t = useTranslations("careers");
  return (
    <section id="ourVacancies" className={s.box}>
      <div className={s.background}>
        <div className={s.container}>
          <MainTitleComponent
            title={t("openVacanciesTitle")}
            className={s.vacancies__title}
          />
          <VacanciesCards />
        </div>
      </div>
    </section>
  );
};

export default VacanciesSection;
