import React, { FC } from "react";
import s from "./MainTitleComponent.module.scss";
import classNames from "classnames";
import image from "@/images/vectors/graph.svg";
import Image from "next/image";
import { motion } from "framer-motion";

interface MainTitleProps {
  title: string;
  className?: string;
  color?: "black" | "blue" | "green";
  left?: boolean;
  mobileLeft?: boolean;
}

const MainTitleComponent: FC<MainTitleProps> = ({
  title,
  className,
  color = "green",
  left = false,
  mobileLeft = false,
}) => {
  const titleColor = {
    black: "#171717",
    blue: "#2A4563",
    green: "#565F51",
  }[color];

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

  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      variants={textAnimation}
      className={classNames(s.main, className, {
        [s.left]: left,
        [s.mobileLeft]: mobileLeft,
      })}
    >
      <Image
        className={s.main__image}
        src={image}
        alt="Title"
        width={44}
        height={67}
      />
      <h2 className={s.main__title} style={{ color: titleColor }}>
        {title}
      </h2>
    </motion.div>
  );
};

export default MainTitleComponent;
