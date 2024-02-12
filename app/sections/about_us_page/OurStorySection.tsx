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
          <ThreeCardsComponent path="our-story" />
        </MotionWrapper>
      </div>
    </section>
  );
};

export default OurStorySection;
