import { useState, useEffect } from "react";

interface Portfolio {
  title: Title;
  acf: Acf;
}

interface Title {
  rendered: string;
}
interface Acf {
  icon: string;
  title_en: string;
  option1_en: string;
  option2_en: string;
  option3_en: string;
  option4_en: string;
  option5_en: string;
  option6_en: string;
  option7_en: string;
  option8_en: string;
  option9_en: string;
  option10_en: string;
  title_es: string;
  option1_es: string;
  option2_es: string;
  option3_es: string;
  option4_es: string;
  option5_es: string;
  option6_es: string;
  option7_es: string;
  option8_es: string;
  option9_es: string;
  option10_es: string;
  title_de: string;
  option1_de: string;
  option2_de: string;
  option3_de: string;
  option4_de: string;
  option5_de: string;
  option6_de: string;
  option7_de: string;
  option8_de: string;
  option9_de: string;
  option10_de: string;
  title_ua: string;
  option1_ua: string;
  option2_ua: string;
  option3_ua: string;
  option4_ua: string;
  option5_ua: string;
  option6_ua: string;
  option7_ua: string;
  option8_ua: string;
  option9_ua: string;
  option10_ua: string;
}

const useProductPortfolio = (lang: string) => {
  const [portfolio, setPortfolio] = useState<Portfolio[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPortfolio = async () => {
    try {
      setLoading(true);
      const reqUrl = `https://softlion.blog/wp-json/wp/v2/product-portfolio?acf_format=standard&_fields=acf,title.rendered`;
      const req = await fetch(reqUrl);
      const fetchedPortfolio = await req.json();

      const filteredPortfolio = fetchedPortfolio.map((item: any) => {
        const acfEntries = Object.entries(item.acf);
        const filteredAcf = Object.fromEntries(
          acfEntries
            .filter(([key, value]) => key.includes(`_${lang}`) && value !== "")
            .map(([key, value]) => [key.replace(`_${lang}`, ""), value])
        );

        return {
          title: item.title,
          acf: {
            ...filteredAcf,
            icon: item.acf.icon,
          },
        };
      });

      setPortfolio(filteredPortfolio);
      setLoading(false);
    } catch (error: any) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPortfolio();
  }, [lang]);

  return { portfolio, loading, error };
};

export default useProductPortfolio;
