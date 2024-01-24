"use client";
import React from "react";
import type { StaticImageData } from "next/image";
import s from "./OurAdvantagesSection.module.scss";
import MainTitleComponent from "@/components/MainTitleComponent";
import OurAdvantagesCardComponent from "@/components/about_us/OurAdvantagesCardComponent";
import AdvantagesImage1 from "@/images/our_advantages_test/advantages-image-1.png";
import AdvantagesImage2 from "@/images/our_advantages_test/advantages-image-2.png";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import useFramerAnimations from "@/hooks/useFramerAnimations";

interface AdvantagesItem {
  text: string;
}

type AdvantagesContentItem = AdvantagesItem | StaticImageData;

const OurAdvantagesSection = () => {
  const t = useTranslations("aboutUs.ourAdvantages");
  const defaultAnimation = useFramerAnimations();

  const advantagesContent: AdvantagesContentItem[] = [
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
      text: "Foster long-term relationships with international buyers for sustained growth ",
    },
  ];

  const contentOrder: { type: string; data: AdvantagesContentItem }[] = [
    { type: "blue", data: advantagesContent[0] },
    { type: "image", data: AdvantagesImage1 },
    { type: "white", data: advantagesContent[1] },
    { type: "image", data: AdvantagesImage2 },
    { type: "white", data: advantagesContent[2] },
    { type: "blue", data: advantagesContent[3] },
  ];

  return (
    <section className={s.box}>
      <div className={s.background}>
        <div className={s.container}>
          <MainTitleComponent title={t("ourAdvantagesTitle")} color="blue" />
          <div className={s.advantages__cards}>
            {contentOrder.map((item, index) => (
              <motion.div
                key={index}
                initial={"hidden"}
                whileInView={"visible"}
                viewport={{ margin: "20% 0% -20% 0%" }}
                variants={defaultAnimation}
              >
                {item.type === "blue" && (
                  <OurAdvantagesCardComponent
                    advantages={item.data as AdvantagesItem}
                    colorVariant="blue"
                  />
                )}
                {item.type === "white" && (
                  <OurAdvantagesCardComponent
                    advantages={item.data as AdvantagesItem}
                    colorVariant="white"
                  />
                )}
                {item.type === "image" && (
                  <Image
                    src={(item.data as StaticImageData).src}
                    alt={`Advantages Image ${index}`}
                    className={s.advantages__image}
                    width={1000}
                    height={1000}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurAdvantagesSection;
