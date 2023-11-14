"use client"
import useVacancies from "@/hooks/useVacancies";
import s from "./VacanciesCards.module.scss";

const VacanciesCards = () => {
  const vacancies = useVacancies();

  return (
    <div className={s.cards}>
      {vacancies.map((vacancy) => (
        <div className={s.cards__card} key={vacancy.id}>{vacancy.acf.vacancies}</div>
      ))}
    </div>
  );
};

export default VacanciesCards;
