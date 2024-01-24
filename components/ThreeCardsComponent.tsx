"use client";
import React, { FC } from "react";
import s from "./ThreeCardsComponent.module.scss";
import Image from "next/image";

import executionImage from "@/images/home-hero-test.png";
import exportConsultingImage from "@/images/home-hero-test.png";
import freightBrokerageImage from "@/images/freight_brokerage/1.png";
import ourStoryImage from "@/images/home-hero-test.png";
import classNames from "classnames";
import { motion } from "framer-motion";

const images = {
  execution: executionImage,
  exportConsulting: exportConsultingImage,
  freightBrokerage: freightBrokerageImage,
  ourStory: ourStoryImage,
};

interface ThreeCardsProps {
  bigText: string;
  smallText: string;
  imageSrc?: "execution" | "exportConsulting" | "freightBrokerage" | "ourStory";
  imagePosition?: 1 | 2 | 3;
  color?: "blue" | "green";
  className?: string;
  container?: boolean;
}

const ThreeCardsComponent: FC<ThreeCardsProps> = ({
  bigText,
  smallText,
  imageSrc = "execution",
  imagePosition = 1,
  color = "green",
  className,
}) => {
  const selectedImage = images[imageSrc];

  const cardStyle = {
    backgroundColor: color === "blue" ? "#ECF1F6" : "#EBECE6",
    color: color === "blue" ? "#2A4563" : "#565F51",
  };

  const textAnimation = {
    hidden: {
      y: 100,
      opacity: 0,
      delay: 1,
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      delay: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  const image = (
    <motion.div
      className={s.cards__image}
      variants={textAnimation}
      custom={imagePosition}
    >
      <Image
        src={selectedImage}
        alt="Card Image"
        className={s.cards__image}
        width={1400}
        height={1400}
      />
    </motion.div>
  );

  return (
    <motion.div
      className={classNames(s.cards, className)}
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ margin: "20% 0% -20% 0%" }}
    >
      {imagePosition === 1 && image}
      <motion.div
        className={classNames(s.cards__card, {
          [s.tabletCard]: imagePosition === 2,
        })}
        style={cardStyle}
        variants={textAnimation}
        custom={imagePosition === 1 ? 2 : 1}
      >
        <h2 className={s.cards__large_text}>{bigText}</h2>
      </motion.div>
      {imagePosition === 2 && (
        <div className={classNames(s.cards__image, s.tabletImage)}>{image}</div>
      )}
      <motion.div
        className={classNames(s.cards__card, {
          [s.cards__small_card]: smallText,
        })}
        style={cardStyle}
        variants={textAnimation}
        custom={imagePosition === 2 ? 3 : imagePosition === 1 ? 3 : 2}
      >
        <p className={s.cards__small_text}>{smallText}</p>
      </motion.div>
      {imagePosition === 3 && image}
    </motion.div>
  );
};

export default ThreeCardsComponent;
