"use client"
import useVacancies from "@/hooks/useVacancies";
import s from "./VacanciesCards.module.scss";
import useLocale from "@/hooks/useLocale";

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

  return (
    <div className={s.cards}>
      {vacancies.map((vacancy) => (
        <div className={s.cards__card} key={vacancy.id}>{vacancy.acf[`vacancies_${locale}` as keyof Acf]}</div>
      ))}
    </div>
  );
};

export default VacanciesCards;
