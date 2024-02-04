"use client";
import s from "./OurStorySection.module.scss";
import MainTitleComponent from "@/components/MainTitleComponent";
import ThreeCardsComponent from "@/components/ThreeCardsComponent";
import { useTranslations } from "next-intl";
import MotionWrapper from "@/hooks/MotionWrapper";

const OurStorySection = () => {
  const t = useTranslations("aboutUs.ourStory");

  return (
    <section className={s.box}>
      <div className={s.background}>
        <MotionWrapper className={s.container} initial viewport>
          <MotionWrapper variants>
            <MainTitleComponent
              title={t("heading")}
              color="black"
              left
              mobileLeft
            />
          </MotionWrapper>
          <ThreeCardsComponent
            imagePosition={3}
            imageSrc="ourStory"
            smallText={t("smallCard")}
            bigText={t("bigCard")}
          />
        </MotionWrapper>
      </div>
    </section>
  );
};

export default OurStorySection;
