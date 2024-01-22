import React, { FC, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import s from "./MainButtonComponent.module.scss";
import Arrow from "@/images/vectors/arrow.svg";
import ArrowWhite from "@/images/vectors/arrow-white.svg";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Url } from "next/dist/shared/lib/router/router";

interface MainButtonProps {
  text: string;
  href?: Url;
  className?: string;
  typeButton?:
    | "MainButton"
    | "MainArrowButton"
    | "MainUsualButton"
    | "MainContactUsButton";
  onClick?: () => void;
}

const MainButtonComponent: FC<MainButtonProps> = ({
  text,
  href,
  className,
  typeButton = "MainButton",
  onClick,
}) => {
  const t = useTranslations("header");
  const linkProps = { href: href || "" };

  const [isHovered, setIsHovered] = useState(false);
  const [textWidth, setTextWidth] = useState(0);

  useEffect(() => {
    const textElement = document.querySelector(`.${s.main__text}`);
    if (textElement) {
      setTextWidth(textElement.clientWidth);
    }
  });

  let buttonPadding = "";
  if (typeButton === "MainButton" || typeButton === "MainContactUsButton") {
    buttonPadding = "0";
  } else if (
    typeButton === "MainArrowButton" ||
    typeButton === "MainUsualButton"
  ) {
    buttonPadding = "8px 16px";
  }

  let buttonContent;

  if (typeButton === "MainButton" || typeButton === "MainContactUsButton") {
    buttonContent = (
      <motion.button
        type="submit"
        className={s.main__container}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.p
          className={s.main__text}
          animate={{ x: isHovered ? 40 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {t("getInTouch")}
        </motion.p>
        <motion.div
          className={s.main__background}
          animate={{ x: isHovered ? -textWidth - 25 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <motion.div
            className={s.main__arrow}
            initial={{ rotate: 180 }}
            animate={{ rotate: isHovered ? 360 : 180 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Image src={Arrow} alt="arrow" />
          </motion.div>
        </motion.div>
      </motion.button>
    );
  } else if (typeButton === "MainArrowButton") {
    buttonContent = (
      <div className={s.main__container} style={{ padding: buttonPadding }}>
        <p className={s.main__text}>{text}</p>
        <Image src={ArrowWhite} alt="arrow" />
      </div>
    );
  } else if (typeButton === "MainUsualButton") {
    buttonContent = (
      <div className={s.main__container} style={{ padding: buttonPadding }}>
        <p className={s.main__text}>{text}</p>
      </div>
    );
  }

  if (typeButton === "MainContactUsButton") {
    return (
      <div className={classNames(s.main__button, className)}>
        {buttonContent}
      </div>
    );
  } else {
    return (
      <div className={classNames(s.main__button, className)}>
        <Link className={s.main__link} {...linkProps}>
          {buttonContent}
        </Link>
      </div>
    );
  }
};

export default MainButtonComponent;
