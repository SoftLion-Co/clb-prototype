"use client";
import classNames from "classnames";
import s from "./PageTitleComponent.module.scss";
import React, { FC } from "react";
import { motion } from "framer-motion";

interface MainTitleProps {
  title: string;
  text?: string;
  className?: string;
}

const PageTitleComponent: FC<MainTitleProps> = ({ title, text, className }) => {
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
      className={classNames(className)}
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ margin: "20% 0% -20% 0%" }}
    >
      <div className={classNames(s.page)}>
        <motion.h1
          className={s.page__title}
          variants={textAnimation}
          custom={0.2}
        >
          {title}
        </motion.h1>
        {text && (
          <motion.p
            className={s.page__text}
            variants={textAnimation}
            custom={1}
          >
            {text}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

export default PageTitleComponent;
