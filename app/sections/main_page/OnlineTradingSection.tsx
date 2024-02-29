import Image from "next/image";
import s from "./OnlineTradingSection.module.scss";
import OnlineTradingTest from "@/images/OnlineTradingTest.svg";
import MainTitleComponent from "@/components/MainTitleComponent";
import MotionWrapper from "@/hooks/MotionWrapper";
import { useTranslations } from "next-intl";

const OnlineTradingSection = () => {
  const t = useTranslations("homePage");
  return (
    <section className={s.box}>
      <div className={s.background}>
        <div className={s.container}>
          <MainTitleComponent title={t("partnersHeading")} color="black" />

          <MotionWrapper
            className={s.trading__container}
            initial
            viewport
            variants
            custom={1}
          >
            <Image
              className={s.trading__platform}
              src={OnlineTradingTest}
              alt="Online Trading Test"
            />
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
};

export default OnlineTradingSection;
