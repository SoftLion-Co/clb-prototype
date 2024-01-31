"use client";
import s from "./VacanciesSection.module.scss";
import { MMainTitleComponent } from "@/components/MainTitleComponent";
import VacanciesCards from "@/components/careers_page/VacanciesCards";
import { useTranslations } from "next-intl";
import useFramerAnimations from "@/hooks/useFramerAnimations";
import MotionWrapper from "@/hooks/MotionWrapper";

const VacanciesSection = () => {
  const t = useTranslations("careers");
  const defaultAnimation = useFramerAnimations();

  return (
    <section id="ourVacancies" className={s.box}>
      <div className={s.background}>
        <MotionWrapper
          className={s.container}
          initial
          viewport
        >
          <MMainTitleComponent
            title={t("openVacanciesTitle")}
            className={s.vacancies__title}
            variants={defaultAnimation}
          />
          <VacanciesCards />
        </MotionWrapper>
      </div>
    </section>
  );
};

export default VacanciesSection;
