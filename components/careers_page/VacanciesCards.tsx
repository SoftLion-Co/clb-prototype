import useVacancies from "@/hooks/useVacancies";
import s from "./VacanciesCards.module.scss";
import useLocale from "@/hooks/useLocale";
import MotionWrapper from "@/hooks/MotionWrapper";

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

  return vacancies.length !== 0 ? (
    <MotionWrapper
      initial
      viewport
      className={s.cards}
    >
      {vacancies.map((vacancy, index) => (
        <MotionWrapper
          className={s.cards__card}
          variants
          custom={index}
          key={vacancy.id}
        >
          {vacancy.acf[`vacancies_${locale}` as keyof Acf]}
        </MotionWrapper>
      ))}
    </MotionWrapper>
  ) : null;
};

export default VacanciesCards;
