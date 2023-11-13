import Image from "next/image";
import s from "@/app/sections/main_page/PartnersSection.module.scss";

const reqUrl =
  "https://softlion.blog/wp-json/wp/v2/partners?per_page=100&acf_format=standard&_fields=id,acf,title";

interface Partners {
  title: Rendered;
  id: number;
  acf: Acf;
}

interface Acf {
  partner_company_logo: string;
  position: number;
}

interface Rendered {
  rendered: string;
}

const GetPartnersComponent = async () => {
  const req = await fetch(reqUrl, { cache: "no-cache" });
  const partners: Partners[] = await req.json();
  partners.sort((a, b) => a.acf.position - b.acf.position);

  return (
    <div className={s.partners__wrapper}>
      {partners.map((partner) => (
        <div className={s.partners__image_container}>
          <Image
            key={partner.id}
            src={partner.acf.partner_company_logo}
            alt={partner.title.rendered}
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
