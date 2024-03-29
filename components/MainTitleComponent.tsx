"use client";
import React, { FC } from "react";
import s from "./MainTitleComponent.module.scss";
import classNames from "classnames";
import image from "@/images/vectors/graph.svg";
import Image from "next/image";
import MotionWrapper from "@/hooks/MotionWrapper";

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

  return (
    <MotionWrapper
      className={classNames(s.main, className, {
        [s.left]: left,
        [s.mobileLeft]: mobileLeft,
      })}
      initial
      viewport
      variants
      custom={1}
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
    </MotionWrapper>
  );
};

export default MainTitleComponent;
