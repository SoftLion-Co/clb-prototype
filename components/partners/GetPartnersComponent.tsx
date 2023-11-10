import Image from "next/image";
import s from "@/app/sections/main_page/PartnersSection.module.scss";

const reqUrl =
  "https://softlion.blog/wp-json/wp/v2/partners?per_page=100&acf_format=standard&_fields=id,acf";

interface Partners {
  id: number;
  acf: Acf;
}

interface Acf {
  partner_company_logo: string;
}

const GetPartnersComponent = async () => {
  const req = await fetch(reqUrl, { cache: "no-cache" });
  const partners: Partners[] = await req.json();
  console.log(partners);

  return (
    <div className={s.partners__wrapper}>
      {partners.map((partner, index) => (
        <div className={s.partners__image_container}>
          <Image
            key={index}
            src={partner.acf.partner_company_logo}
            alt={`Partner Logo ${index + 1}`}
            width={200}
            height={100}
            className={s.partners__image}
          />
        </div>
      ))}
    </div>
  );
};

export default GetPartnersComponent;
