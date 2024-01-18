import { useState, useEffect } from "react";

interface Portfolio {
  title: Title;
  acf: Acf | null;
}

interface Title {
  rendered: string;
}

interface Acf {
  icon: string;
  title: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  option5: string;
  option6: string;
  option7: string;
  option8: string;
  option9: string;
  option10: string;
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

  return { portfolio: portfolio ?? [], loading, error } as const;
};

export default useProductPortfolio;
