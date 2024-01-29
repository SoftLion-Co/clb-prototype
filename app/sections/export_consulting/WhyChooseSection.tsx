"use client";
import React from "react";
import s from "./WhyChooseSection.module.scss";
import ImageAndTextCardsComponent from "@/components/ImageAndTextCardsComponent";
import { MMainTitleComponent } from "@/components/MainTitleComponent";
import { useTranslations } from "next-intl";

import image1 from "@/images/export_consulting/1.png";
import image2 from "@/images/export_consulting/2.jpg";
import image3 from "@/images/export_consulting/3.png";
import useFramerAnimations from "@/hooks/useFramerAnimations";
import { motion } from "framer-motion";

interface WhyChooseProps {
  text1: string;
  text2: string;
  text3: string;
}

function WhyChoose({ text1, text2, text3 }: WhyChooseProps) {
  const t = useTranslations("exportConsulting.whyChoose");
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
            title={t("whyChooseTitle")}
            color="blue"
            variants={defaultAnimation}
          />
          <div className={s.choose}>
            <ImageAndTextCardsComponent
              text={text1}
              image={image1.src}
              alt="image"
              color="blue"
              border
              rotateMobile
            />
            <ImageAndTextCardsComponent
              text={text2}
              image={image2.src}
              alt="image"
              color="white"
              border
              rotate
              rotateMobile
            />
            <ImageAndTextCardsComponent
              text={text3}
              image={image3.src}
              alt="image"
              color="white"
              border
              rotateMobile
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChoose;
