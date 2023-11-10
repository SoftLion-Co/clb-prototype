import React from "react";
import Link from "next/link";
import Image from "next/image";
import s from "./MainButtonComponent.module.scss";
import classNames from "classnames";
import { Url } from "next/dist/shared/lib/router/router";

interface MainButtonProps {
  text: string;
  className?: string;
  arrowSrc?: string;
  href?: Url;
}

const MainButtonComponent: React.FC<MainButtonProps> = ({
  text,
  className,
  arrowSrc,
  href,
}) => {
  return (
    <div className={classNames(s.main__button, className)}>
      {href ? (
        <Link href={href} >
          {text}
          {arrowSrc && (
            <Image className={s.main__arrow} src={arrowSrc} alt="arrow" />
          )}
        </Link>
      ) : (
        <Link href={""}>
          {text}
          {arrowSrc && (
            <Image className={s.main__arrow} src={arrowSrc} alt="arrow" />
          )}
        </Link>
      )}
    </div>
  );
};

export default MainButtonComponent;
