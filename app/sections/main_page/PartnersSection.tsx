"use client"

import React, { useState, useEffect } from "react";
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

const PartnersSection = () => {
  const [partners, setPartners] = useState<Root2[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const req = await fetch(reqUrl);
        const partnersData: Root2[] = await req.json();
        setPartners(partnersData);
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className={classNames(s.container, s.services)}>
      <MainTitleComponent title="Partners" className={s.services__title} />

      <div className={s.photos}>
        {partners.map((partner, index) => (
          <Image
            key={partner.id}
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
