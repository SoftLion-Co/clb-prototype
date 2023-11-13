import s from "./VacanciesCards.module.scss";

const reqUrl =
  "https://softlion.blog/wp-json/wp/v2/vacancies?acf_format=standard&_fields=acf,id";

interface Vacancies {
  id: number;
  acf: Acf;
}

interface Acf {
  vacancies: string;
  position: number;
}

const VacanciesCards = async () => {
  const req = await fetch(reqUrl, { cache: "no-cache" });
  const vacancies: Vacancies[] = await req.json();
  vacancies.sort((a, b) => a.acf.position - b.acf.position);

  return (
    <div className={s.cards}>
      {vacancies.map((vacancy) => (
        <div className={s.cards__card}>{vacancy.acf.vacancies}</div>
      ))}
    </div>
  );
};

export default VacanciesCards;
