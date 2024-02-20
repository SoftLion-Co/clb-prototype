import { useState, useEffect } from "react";

const reqUrl =
  "https://wp.cl-brokers.com/wp-json/wp/v2/blog-hero?acf_format=standard&_fields=acf";

interface HeroData {
  id: number;
  acf: Acf;
}

interface Acf {
  hero_title_en: string;
  hero_text_en: string | undefined;
  hero_title_es: string;
  hero_text_es: string | undefined;
  hero_title_de: string;
  hero_text_de: string | undefined;
  hero_title_ua: string;
  hero_text_ua: string | undefined;
}

const useBlogHero = () => {
  const [heroes, setHeroes] = useState<HeroData[]>([]);

  const fetchHeroes = async () => {
    try {
      const req = await fetch(reqUrl);
      const fetchedHeroes: HeroData[] = await req.json();
      setHeroes(fetchedHeroes);
    } catch (error) {
      console.error("Error fetching hero data:", error);
    }
  };

  useEffect(() => {
    fetchHeroes();
  }, []);

  return heroes;
};

export default useBlogHero;
