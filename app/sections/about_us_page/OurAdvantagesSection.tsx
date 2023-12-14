import React from "react";
import s from "./OurAdvantagesSection.module.scss";
import classNames from "classnames";
import MainTitleComponent from "@/components/MainTitleComponent";
import OurAdvantagesCardComponent from "@/components/about_us/OurAdvantagesCardComponent";
import { useTranslations } from "next-intl";

const OurAdvantagesSection = () => {
  const t = useTranslations("aboutUs.ourAdvantages");
  const t1 = useTranslations("aboutUs.ourAdvantages.cards");

  const advantagesProps = Array.from({ length: 6 }, (_, index) => ({
    text: t1(`card${index + 1}`),
  }));

  return (
    <section className={classNames(s.container, s.advantages)}>
      <MainTitleComponent title={t("ourAdvantagesTitle")} />
      <div className={s.advantages__cards}>
        {advantagesProps.map((advantage, index) => (
          <OurAdvantagesCardComponent advantages={advantage} key={index} />
        ))}
      </div>
    </section>
  );
};

export default OurAdvantagesSection;
