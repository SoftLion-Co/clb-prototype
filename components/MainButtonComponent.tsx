import React, { FC, useState, useEffect } from "react";
import Image from "next/image";
import classNames from "classnames";
import s from "./MainButtonComponent.module.scss";
import Arrow from "@/images/vectors/arrow.svg";
import ArrowWhite from "@/images/vectors/arrow-white.svg";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Url } from "next/dist/shared/lib/router/router";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

interface MainButtonProps {
  text: string;
  href?: Url;
  className?: string;
  typeButton?:
    | "MainButton"
    | "MainArrowButton"
    | "MainUsualButton"
    | "MainContactUsButton";
  defaultTo?: string;
  onClick?: () => void;
}

const MainButtonComponent: FC<MainButtonProps> = ({
  text,
  href,
  className,
  typeButton = "MainButton",
  defaultTo = "",
  onClick,
}) => {
  const t = useTranslations("header");
  const linkProps = { href: href || "" };

  const [isHovered, setIsHovered] = useState(false);
  const [textWidth, setTextWidth] = useState(0);
  const [buttonPadding, setButtonPadding] = useState("8px 16px");

  useEffect(() => {
    const textElement = document.querySelector(`.${s.main__text}`);
    if (textElement) {
      setTextWidth(textElement.clientWidth);
    }

    const updatePadding = () => {
      if (window.innerWidth <= 1280) {
        setButtonPadding("6px 12px");
      } else {
        setButtonPadding("8px 16px");
      }
    };
    updatePadding();
    window.addEventListener("resize", updatePadding);
    return () => {
      window.removeEventListener("resize", updatePadding);
    };
  }, []);

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
      <p
        className={classNames(s.main__container, s.main__text)}
        style={{ padding: buttonPadding }}
      >
        {text}
      </p>
    );
  }

  if (typeButton === "MainContactUsButton") {
    return (
      <div className={classNames(s.main__button, className)} onClick={onClick}>
        {buttonContent}
      </div>
    );
  } else {
    return (
      <ScrollLink
        to={defaultTo}
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        className={classNames(s.main__link, className)}
      >
        {buttonContent}
      </ScrollLink>
    );
  }
};

export default MainButtonComponent;
