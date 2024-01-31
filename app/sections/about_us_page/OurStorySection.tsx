"use client"
import s from "./OurStorySection.module.scss";
import { MMainTitleComponent } from "@/components/MainTitleComponent";
import ThreeCardsComponent from "@/components/ThreeCardsComponent";
import { useTranslations } from "next-intl";
import useFramerAnimations from "@/hooks/useFramerAnimations";
import MotionWrapper from "@/hooks/MotionWrapper";

const OurStorySection = () => {
  const t = useTranslations("aboutUs.ourStory");
  const defaultAnimation = useFramerAnimations();

  return (
    <section className={s.box}>
      <div className={s.background}>
        <MotionWrapper
          className={s.container}
          initial
          viewport
        >
          <MMainTitleComponent
            title={t("heading")}
            color="black"
            left
            mobileLeft
            variants={defaultAnimation}
          />
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
