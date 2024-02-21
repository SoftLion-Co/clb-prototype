import PageTitleComponent from "@/components/PageTitleComponent";
import { useLocale } from "next-intl";

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

interface HeroSectionProps {
  path: string;
  className?: string;
}

const GetHeroComponent = async ({ path, className }: HeroSectionProps) => {
  const reqUrl = `https://wp.cl-brokers.com/wp-json/wp/v2/${path}?acf_format=standard&_fields=id,acf`;

  const req = await fetch(reqUrl);
  const heroData: HeroData[] = await req.json();
  const locale = useLocale();

  return (
    <PageTitleComponent
      title={(heroData[0].acf as any)[`hero_title_${locale}`]}
      text={(heroData[0].acf as any)[`hero_text_${locale}`]}
      className={className}
    />
  );
};


export default GetHeroComponent;
 