"use client";
import classNames from "classnames";
import s from "./PageTitleComponent.module.scss";
import React, { FC } from "react";
import { motion } from "framer-motion";
import useFramerAnimations from "@/hooks/useFramerAnimations";

interface MainTitleProps {
  title: string;
  text?: string;
  className?: string;
}

const PageTitleComponent: FC<MainTitleProps> = ({ title, text, className }) => {
  const defaultAnimation = useFramerAnimations()

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
          variants={defaultAnimation}
          custom={0.2}
        >
          {title}
        </motion.h1>
        {text && (
          <motion.p
            className={s.page__text}
            variants={defaultAnimation}
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
