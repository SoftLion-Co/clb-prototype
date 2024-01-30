"use client";
import s from "./VacanciesSection.module.scss";
import { MMainTitleComponent } from "@/components/MainTitleComponent";
import VacanciesCards from "@/components/careers_page/VacanciesCards";
import { useTranslations } from "next-intl";
import useFramerAnimations from "@/hooks/useFramerAnimations";
import { motion } from "framer-motion";

const VacanciesSection = () => {
  const t = useTranslations("careers");
  const defaultAnimation = useFramerAnimations();

  return (
    <section id="ourVacancies" className={s.box}>
      <div className={s.background}>
        <motion.div
          className={s.container}
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ margin: "20% 0% -20% 0%" }}
        >
          <MMainTitleComponent
            title={t("openVacanciesTitle")}
            className={s.vacancies__title}
            variants={defaultAnimation}
          />
          <VacanciesCards />
        </motion.div>
      </div>
    </section>
  );
};

export default VacanciesSection;
