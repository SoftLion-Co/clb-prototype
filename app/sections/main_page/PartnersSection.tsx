import s from "./PartnersSection.module.scss";
import MainTitleComponent from "@/components/MainTitleComponent";
import classNames from "classnames";
import Image from "next/image";

const reqUrl =
  "https://softlion.blog/wp-json/wp/v2/partners?acf_format=standard&_fields=id,acf";

export type Root = Root2[];

export interface Root2 {
  id: number;
  acf: Acf;
}

export interface Acf {
  partner_company_logo: string;
}

const PartnersSection = async () => {
  const req = await fetch(reqUrl);
  const partners: Root2[] = await req.json();
  console.log(partners);

  return (
    <section className={classNames(s.container, s.services)}>
      <MainTitleComponent title="Partners" className={s.services__title} />

      <div className={s.photos}>
        {partners.map((partner, index) => (
          <Image
            key={index}
            src={partner.acf.partner_company_logo}
            alt={`Partner Logo ${index + 1}`}
            className={s.photo}
            width={400}
            height={200}
          />
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
