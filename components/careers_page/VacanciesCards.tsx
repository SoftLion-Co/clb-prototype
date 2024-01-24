import useVacancies from "@/hooks/useVacancies";
import s from "./VacanciesCards.module.scss";
import useLocale from "@/hooks/useLocale";
import { motion } from "framer-motion";
import useFramerAnimations from "@/hooks/useFramerAnimations";

interface Acf {
  vacancies_en: string;
  vacancies_de: string;
  vacancies_es: string;
  vacancies_ua: string;
  position: number;
}

const VacanciesCards = () => {
  const vacancies = useVacancies();
  const locale = useLocale();
  const defaultAnimation = useFramerAnimations();

  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ margin: "20% 0% -20% 0%" }}
      className={s.cards}
    >
      {vacancies.map((vacancy, index) => (
        <motion.div
          className={s.cards__card}
          variants={defaultAnimation}
          custom={index}
          key={vacancy.id}
        >
          {vacancy.acf[`vacancies_${locale}` as keyof Acf]}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default VacanciesCards;
