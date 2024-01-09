import React from "react";
import s from "./OurAdvantagesSection.module.scss";
import classNames from "classnames";
import MainTitleComponent from "@/components/MainTitleComponent";
import OurAdvantagesCardComponent from "@/components/about_us/OurAdvantagesCardComponent";
import { useTranslations } from "next-intl";

interface advantagesContent {
  advantages: {
    text: string;
  };
}

const OurAdvantagesSection = () => {
  const t = useTranslations("aboutUs.ourAdvantages");
  const t1 = useTranslations("aboutUs.ourAdvantages.cards");

  const advantagesProps = Array.from({ length: 6 }, (_, index) => ({
    text: t1(`card${index + 1}`),
  }));

  const advantagesContent = [
    {
      text: "Mitigate risks associated with exporting agricultural products",
    },
    {
      text: "Expand your market reach and increase profitability by accessing new international markets.",
    },
    {
      text: "Save time and resources by leveraging our expertise and experience",
    },
    {
      text: "Foster long-term relationships with international buyers for sustained growth",
    },
  ];

  return (
    <section className={s.box}>
      <div className={s.background}>
        <div className={s.container}>
          <MainTitleComponent title={t("ourAdvantagesTitle")} color="blue" />
          <div className={s.advantages__cards}>
            {advantagesProps.map((advantage, index) => (
              <OurAdvantagesCardComponent advantages={advantage} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurAdvantagesSection;
