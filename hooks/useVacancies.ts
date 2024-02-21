import { useState, useEffect } from "react";

const reqUrl =
  "https://wp.cl-brokers.com/wp-json/wp/v2/vacancies?acf_format=standard&_fields=acf,id";

interface Vacancies {
  id: number;
  acf: Acf;
}

interface Acf {
  vacancies_en: string;
  vacancies_de: string;
  vacancies_es: string;
  vacancies_ua: string;
  position: number;
}

const useVacancies = () => {
  const [vacancies, setVacancies] = useState<Vacancies[]>([]);

  useEffect(() => {
    const fetchVacancies = async () => {
      try {
        const req = await fetch(reqUrl, { cache: "no-cache" });
        const fetchedVacancies: Vacancies[] = await req.json();
        fetchedVacancies.sort((a, b) => a.acf.position - b.acf.position);
        setVacancies(fetchedVacancies);
      } catch (error) {
        console.error("Error fetching vacancies:", error);
      }
    };

    fetchVacancies();
  }, []);

  return vacancies;
};

export default useVacancies;
