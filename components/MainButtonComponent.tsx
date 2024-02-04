"use client";
import React, {
  FC,
  useState,
  useEffect,
  forwardRef,
  ForwardedRef,
} from "react";
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

const MainButtonComponent: FC<MainButtonProps> = forwardRef(
  (
    {
      text,
      href,
      className,
      typeButton = "MainButton",
      defaultTo = "",
      onClick,
    },
    ref: ForwardedRef<HTMLDivElement> | undefined
  ) => {
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

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (onClick) {
        e.preventDefault();
        onClick();
      }
    };

    const animateBackgroundColor = isHovered
      ? "#desiredColorOnHover"
      : "#initialColor";
    const animateX = isHovered ? 40 : 0;
    const animateRotate = isHovered ? 360 : 180;

    const buttonProps = {
      type: "submit" as "button" | "submit" | "reset",
      className: s.main__container,
      onHoverStart: () => setIsHovered(true),
      onHoverEnd: () => setIsHovered(false),
      animate: { backgroundColor: animateBackgroundColor },
      transition: { duration: 0.3, ease: "easeInOut" },
    };

    if (typeButton === "MainButton") {
      buttonContent = (
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
              animate={{ x: animateX }}
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
                animate={{ rotate: animateRotate }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Image src={Arrow} alt="arrow" />
              </motion.div>
            </motion.div>
          </motion.button>
        </ScrollLink>
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
    } else if (typeButton === "MainContactUsButton") {
      buttonContent = (
        <motion.button {...buttonProps} onClick={onClick}>
          <motion.p
            className={s.main__text}
            animate={{ x: animateX }}
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
              animate={{ rotate: animateRotate }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Image src={Arrow} alt="arrow" />
            </motion.div>
          </motion.div>
        </motion.button>
      );
    }

    return (
      <div
        ref={ref}
        className={classNames(s.main__link, className)}
        onClick={onClick}
      >
        {buttonContent}
      </div>
    );
  }
);

export const MMainButtonComponent = motion(MainButtonComponent);

export default MainButtonComponent;
