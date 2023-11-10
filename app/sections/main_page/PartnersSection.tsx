"use client";

import s from "./PartnersSection.module.scss";
import MainTitleComponent from "@/components/MainTitleComponent";
import classNames from "classnames";
import { useEffect, useState } from "react";

const reqUrl = "https://softlion.blog/wp-json/wp/v2/partners?acf_format=standard&_fields=id,acf";

export type Root = Root2[]

export interface Root2 {
  id: number
  acf: Acf
}

export interface Acf {
  partner_company_logo: string
}

const OurServicesSection = async () => {
  
    const req = await fetch (reqUrl);
    const partners: Root2[] = await req.json();
    console.log(partners)

  return (
    <section className={classNames(s.container, s.services)}>
      <MainTitleComponent title="Partners" className={s.services__title} />

      <div className={s.photos}>
        {partners.map((partner, index) => (
          <img
            key={index}
            src="https://softlion.blog/wp-content/uploads/2023/07/softlion.png"
            alt={`Partner Logo ${index + 1}`}
            className={s.photo}
          />
        ))}
      </div>
    </section>
  );
};

export default OurServicesSection;
