import React from "react";
import Link from "next/link";
import Image from "next/image";
import s from "./MainButtonComponent.module.scss";
import classNames from "classnames";
import { Url } from "next/dist/shared/lib/router/router";
import Arrow from "@/images/vectors/arrow.svg";
import ArrowWhite from "@/images/vectors/arrowWhite.svg";

interface MainButtonProps {
  text: string;
  rotatedArrow?: boolean;
  href?: Url;
  padding?: string;
  customGap?: string;
  className?: string;
}

const MainButtonComponent: React.FC<MainButtonProps> = ({
  text,
  rotatedArrow,
  href,
  padding,
  customGap,
  className,
}) => {
  const linkProps = {
    href: href || "",
  };

  const buttonStyle = {
    padding: padding || "8px 16px",
  };

  const imageStyle = {
    marginRight: "0",
  };

  return (
    <div className={classNames(s.main__button, className)} style={buttonStyle}>
      <Link className={s.main__link} {...linkProps}>
        <p className={s.main__text}>{text}</p>

        {rotatedArrow && (
          <div className={s.main__background}>
            <Image src={Arrow} alt="arrow" className={s.main__arrow} />
          </div>
        )}
        {!rotatedArrow && rotatedArrow !== undefined && (
          <Image
            className={s.main__arrow}
            src={ArrowWhite}
            alt="arrow"
            style={imageStyle}
          />
        )}
      </Link>
    </div>
  );
};

export default MainButtonComponent;
