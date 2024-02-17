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
      tag="h2"
      initial
      viewport
      variants
      custom={1}
      className={classNames(s.main, s.main__title, className, {
        [s.left]: left,
        [s.mobileLeft]: mobileLeft,
      })}
      style={{ color: titleColor }}
    >
      {title}
      <Image
        className={s.main__image}
        src={image}
        alt="Title"
        width={44}
        height={67}
      />
    </MotionWrapper>
  );
};

export default MainTitleComponent;
