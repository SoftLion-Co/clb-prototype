import s from "@/app/sections/main_page/OurServicesSection.module.scss";

import MotionWrapper from "@/hooks/MotionWrapper";
import OurServicesCardComponent from "./OurServicesCardComponent";
import { useLocale } from "next-intl";

const reqUrl =
  "https://softlion.blog/wp-json/wp/v2/services?acf_format=standard&_fields=id,acf,title";

export interface Services {
  id: number;
  acf: Acf;
}
export interface Acf {
  service_image: string;
  service_heading_en: string;
  service_description_en: string;
  service_heading_es: string;
  service_description_es: string;
  service_heading_de: string;
  service_description_de: string;
  service_heading_ua: string;
  service_description_ua: string;
}

const GetServicesComponent = async () => {
  const req = await fetch(reqUrl);
  const services: Services[] = await req.json();
  const locale = useLocale();


  const servicesCards = [
    {
      href: "export-consulting",
    },
    {
      href: "execution",
    },
    {
      href: "freight-brokerage",
    },
    {
      href: "commodity-brokerage",
    },
  ];

  const servicesWithHref = services.map((service, index) => ({
    ...service,
    href: servicesCards[index].href,
  }));

  return (
    <div className={s.services__cards}>
      {servicesWithHref.reverse().map((item, index) => (
        <MotionWrapper initial viewport key={index} variants custom={index}>
            <OurServicesCardComponent
              href={item.href}
              key={index}
              title={(item.acf as any)[`service_heading_${locale}`]}
              text={(item.acf as any)[`service_description_${locale}`]}
              image={item.acf.service_image}
            />
        </MotionWrapper>
      ))}
    </div>
  );
};

export default GetServicesComponent;
