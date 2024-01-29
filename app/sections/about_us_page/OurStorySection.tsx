"use client";
import s from "./OurStorySection.module.scss";
import { MMainTitleComponent } from "@/components/MainTitleComponent";
import ThreeCardsComponent from "@/components/ThreeCardsComponent";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import useFramerAnimations from "@/hooks/useFramerAnimations";

const OurStorySection = () => {
  const t = useTranslations("aboutUs.ourStory");
  const defaultAnimation = useFramerAnimations();

  return (
    <section className={s.box}>
      <div className={s.background}>
        <motion.div
          className={s.container}
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ margin: "20% 0% -20% 0%" }}
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
        </motion.div>
      </div>
    </section>
  );
};

export default OurStorySection;
