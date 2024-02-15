"use client";
import s from "./VacanciesSection.module.scss";
import MainTitleComponent from "@/components/MainTitleComponent";
import VacanciesCards from "@/components/careers_page/VacanciesCards";
import { useTranslations } from "next-intl";
import MotionWrapper from "@/hooks/MotionWrapper";

const VacanciesSection = () => {
  const t = useTranslations("careers");

  return (
    <section id="ourVacancies" className={s.box}>
      <div className={s.background}>
        <MotionWrapper className={s.container} initial viewport>
          <MainTitleComponent
            title={t("openVacanciesTitle")}
            className={s.vacancies__title}
          />
          <MotionWrapper variants></MotionWrapper>
          <VacanciesCards />
        </MotionWrapper>
      </div>
    </section>
  );
};

export default VacanciesSection;
