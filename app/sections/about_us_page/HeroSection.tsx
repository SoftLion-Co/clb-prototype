import PageTitleComponent from "@/components/PageTitleComponent";
import { useLocale } from "next-intl";
import s from "@/app/[locale]/about-us/page.module.scss";
import classNames from "classnames";

const reqUrl =
  "https://softlion.blog/wp-json/wp/v2/about-hero?acf_format=standard&_fields=id,acf";

interface HeroData {
  id: number;
  acf: Acf;
}
interface Acf {
  hero_title_en: string;
  hero_text_en: string;
  hero_title_es: string;
  hero_text_es: string;
  hero_title_de: string;
  hero_text_de: string;
  hero_title_ua: string;
  hero_text_ua: string;
}

const HeroSection = async () => {
  const req = await fetch(reqUrl);
  const heroData: HeroData[] = await req.json();
  const locale = useLocale();

  return (
    <PageTitleComponent
      title={(heroData[0].acf as any)[`hero_title_${locale}`]}
      text={(heroData[0].acf as any)[`hero_text_${locale}`]}
      className={classNames(s.background, s.about__container)}
    />
  );
};

export default HeroSection;
