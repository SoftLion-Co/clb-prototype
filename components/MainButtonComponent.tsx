import React from "react";
import Link from "next/link";
import Image from "next/image";
import s from "./MainButtonComponent.module.scss";
import classNames from "classnames";

interface MainButtonProps {
  text: string;
  className?: string;
  arrowSrc?: string;
}

const MainButtonComponent: React.FC<MainButtonProps> = ({
  text,
  className,
  arrowSrc,
}) => {
  return (
    <div className={classNames(s.main__button, className)}>
      <Link href="">
        {text}
        {arrowSrc && (
          <Image className={s.main__arrow} src={arrowSrc} alt="arrow" />
        )}
      </Link>
    </div>
  );
};

export default MainButtonComponent;
