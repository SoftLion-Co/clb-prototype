import React from "react";
import s from "./MainTitleComponent.module.scss";
import classNames from "classnames";
import image from "@/images/vectors/graph.svg";
import Image from "next/image";

interface MainTitleProps {
  title: string;
  className?: string;
  color?: "black" | "blue" | "green";
  left?: boolean;
  mobileLeft?: boolean;
}

const MainTitleComponent: React.FC<MainTitleProps> = ({
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
    <div className={classNames(s.main, className, { [s.left]: left, [s.mobileLeft]: mobileLeft })}>
      <Image className={s.main__image} src={image} alt="Title" width={44} height={67} />
      <h2 className={s.main__title} style={{ color: titleColor }}>
        {title}
      </h2>
    </div>
  );
};

export default MainTitleComponent;
