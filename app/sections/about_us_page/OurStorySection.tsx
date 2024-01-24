"use client"
import s from "./OurStorySection.module.scss";
import MainTitleComponent from "@/components/MainTitleComponent";
import ThreeCardsComponent from "@/components/ThreeCardsComponent";
import classNames from "classnames";
import { useTranslations } from "next-intl";

const OurStorySection = () => {
  const t = useTranslations("aboutUs.ourStory");

  return (
    <section className={s.box}>
      <div className={s.background}>
        <div className={s.container}>
          <MainTitleComponent title={t("heading")} color="black" left  mobileLeft/>
          <ThreeCardsComponent
            imagePosition={3}
            imageSrc="ourStory"
            smallText={t("smallCard")}
            bigText={t("bigCard")}
          />
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
