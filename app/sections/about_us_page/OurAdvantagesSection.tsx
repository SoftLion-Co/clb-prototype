import React from "react";
import s from "./OurAdvantagesSection.module.scss";
import MainTitleComponent from "@/components/MainTitleComponent";
import OurAdvantagesCardComponent from "@/components/about_us/OurAdvantagesCardComponent";
import { useLocale } from "next-intl";
import {getTranslations} from 'next-intl/server';
import Image from "next/image";
import MotionWrapper from "@/hooks/MotionWrapper";

export interface OurAnvantages {
  acf: Acf;
}
export interface Acf {
  card_2_photo: string;
  card_4_photo: string;
  card1_text_en: string;
  card3_text_en: string;
  card5_text_en: string;
  card6_text_en: string;
  card1_text_es: string;
  card3_text_es: string;
  card5_text_es: string;
  card6_text_es: string;
  card1_text_de: string;
  card3_text_de: string;
  card5_text_de: string;
  card6_text_de: string;
  card1_text_ua: string;
  card3_text_ua: string;
  card5_text_ua: string;
  card6_text_ua: string;
}

const OurAdvantagesSection = async () => {
  const reqUrl = "https://softlion.blog/wp-json/wp/v2/our-advantages?acf_format=standard&_fields=acf";
  const req = await fetch(reqUrl);
  const advantages: OurAnvantages[] = await req.json();
  const t = await getTranslations("aboutUs.ourAdvantages");
  const locale = useLocale();

  const contentOrder = [
    { type: "blue", data: (advantages[0].acf as any)[`card1_text_${locale}`] },
    { type: "image", data: advantages[0].acf.card_2_photo },
    { type: "white", data: (advantages[0].acf as any)[`card3_text_${locale}`] },
    { type: "image", data: advantages[0].acf.card_4_photo },
    { type: "white", data: (advantages[0].acf as any)[`card5_text_${locale}`] },
    { type: "blue", data: (advantages[0].acf as any)[`card6_text_${locale}`] },
  ];

  return (
    <section className={s.box}>
      <div className={s.background}>
        <MotionWrapper className={s.container} initial viewport>
          <MotionWrapper variants>
            <MainTitleComponent title={t("ourAdvantagesTitle")} color="blue" />
          </MotionWrapper>

          <div className={s.advantages__cards}>
            {contentOrder.map((item, index) => (
              <MotionWrapper key={index} initial viewport variants>
                {item.type === "blue" || item.type === "white" ? (
                  <OurAdvantagesCardComponent advantages={item.data} colorVariant={item.type} />
                ) : (
                  <Image
                    src={item.data}
                    alt={`Advantages Image ${index}`}
                    className={s.advantages__image}
                    width={1000}
                    height={1000}
                  />
                )}
              </MotionWrapper>
            ))}
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
};

export default OurAdvantagesSection;