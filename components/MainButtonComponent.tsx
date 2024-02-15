"use client";
import React, { FC, useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import classNames from "classnames";
import s from "./MainButtonComponent.module.scss";
import Arrow from "@/images/vectors/arrow.svg";
import ArrowWhite from "@/images/vectors/arrow-white.svg";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Url } from "next/dist/shared/lib/router/router";
import { Link as ScrollLink } from "react-scroll";

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
  const linkProps = useMemo(() => ({ href: href || "" }), [href]);

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

  const updatePadding = useCallback(() => {
    if (window.innerWidth <= 1280) {
      return "6px 12px";
    } else {
      return "8px 16px";
    }
  }, []);

  useEffect(() => {
    setButtonPadding(updatePadding());
  }, [updatePadding]);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (onClick) {
        e.preventDefault();
        onClick();
      }
    },
    [onClick]
  );

  const buttonProps = useMemo(
    () => ({
      type: "submit" as "button" | "submit" | "reset",
      className: s.main__container,
      onHoverStart: () => setIsHovered(true),
      onHoverEnd: () => setIsHovered(false),
      animate: {
        backgroundColor: isHovered ? "#desiredColorOnHover" : "#initialColor",
      },
      transition: { duration: 0.3, ease: "easeInOut" },
    }),
    [isHovered]
  );

  const buttonContent = useMemo(() => {
    switch (typeButton) {
      case "MainButton":
        return (
          <ScrollLink
            to={defaultTo}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <motion.button {...buttonProps}>
              <motion.p
                className={s.main__text}
                animate={{ x: isHovered ? 40 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                onClick={onClick}
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
          </ScrollLink>
        );
      case "MainArrowButton":
        return (
          <div className={s.main__container} style={{ padding: buttonPadding }}>
            <p className={s.main__text}>{text}</p>
            <Image src={ArrowWhite} alt="arrow" />
          </div>
        );
      case "MainUsualButton":
        return (
          <ScrollLink
            to={defaultTo}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <p
              className={classNames(s.main__container, s.main__text)}
              style={{ padding: buttonPadding }}
            >
              {text}
            </p>
          </ScrollLink>
        );
      case "MainContactUsButton":
        return (
          <motion.button {...buttonProps} onClick={onClick}>
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
      default:
        return null;
    }
  }, [
    buttonProps,
    defaultTo,
    isHovered,
    onClick,
    text,
    t,
    textWidth,
    typeButton,
    buttonPadding,
  ]);

  return (
    <div className={classNames(s.main__link, className)} onClick={onClick}>
      {buttonContent}
    </div>
  );
};

export default MainButtonComponent;
