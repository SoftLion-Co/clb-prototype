import React from "react";
import Link from "next/link";
import Image from "next/image";
import s from "./MainButtonComponent.module.scss";
import classNames from "classnames";
import { Url } from "next/dist/shared/lib/router/router";
import Arrow from "@/images/vectors/arrow.svg";
import ArrowWhite from "@/images/vectors/arrow-white.svg";

interface MainButtonProps {
  text: string;
  href?: Url;
  className?: string;
  type?: "MainButton" | "MainArrowButton" | "MainUsualButton";
}

const MainButtonComponent: React.FC<MainButtonProps> = ({
  text,
  href,
  className,
  type = "MainButton",
}) => {
  const linkProps = {
    href: href || "",
  };

  let buttonPadding = "";
  if (type === "MainButton") {
    buttonPadding = "0";
  } else if (type === "MainArrowButton" || type === "MainUsualButton") {
    buttonPadding = "8px 16px";
  }

  let buttonContent;

  if (type === "MainButton") {
    buttonContent = (
      <div className={s.main__container}>
        <p className={s.main__text}>{text}</p>
        <div className={s.main__background}>
          <Image className={s.main__arrow} src={Arrow} alt="arrow" />
        </div>
      </div>
    );
  } else if (type === "MainArrowButton") {
    buttonContent = (
      <div className={s.main__link} style={{ padding: buttonPadding }}>
        <p>{text}</p>
        <Image src={ArrowWhite} alt="arrow" />
      </div>
    );
  } else if (type === "MainUsualButton") {
    buttonContent = (
      <div style={{ padding: buttonPadding }}>
        <p>{text}</p>
      </div>
    );
  }

  return (
    <div className={classNames(s.main__button, className)}>
      <Link className={s.main__link} {...linkProps}>
        {buttonContent}
      </Link>
    </div>
  );
};

export default MainButtonComponent;
