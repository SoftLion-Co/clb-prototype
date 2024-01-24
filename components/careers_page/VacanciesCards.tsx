import useVacancies from "@/hooks/useVacancies";
import s from "./VacanciesCards.module.scss";
import useLocale from "@/hooks/useLocale";
import { motion } from "framer-motion";

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

  const textAnimation = {
    hidden: {
      y: 100,
      opacity: 0,
      delay: 1,
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      delay: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  return (
    <motion.div initial={"hidden"} whileInView={"visible"} className={s.cards}>
      {vacancies.map((vacancy, index) => (
        <motion.div
          className={s.cards__card}
          variants={textAnimation}
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
