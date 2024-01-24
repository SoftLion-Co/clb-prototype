import classNames from "classnames";
import s from "./OurServicesCardComponent.module.scss";
import ReadMoreComponent from "@/components/ReadMoreComponent";
import { useTranslations } from "next-intl";
import React, { FC, ForwardedRef, forwardRef } from "react";

import Image from "next/image";
import { motion } from "framer-motion";

interface OurServicesCardProps {
  title: string;
  text: string;
  image: string | undefined;
  className?: string;
}

const OurServicesCardComponent: FC<OurServicesCardProps> = forwardRef(({
  title,
  text,
  image,
  className,
}, ref: ForwardedRef<HTMLDivElement> | undefined) => {
  const t = useTranslations("homePage");

  return (
    <div className={classNames(s.card__container, className)} ref={ref}>
      <Image className={s.card__image} src={image!} alt="Image" />
      <h3 className={s.card__title}>{title}</h3>
      <div className={s.card__content}>
        <p className={s.card__text}>{text}</p>
        <ReadMoreComponent href="/" />
      </div>
    </div>
  );
});

export const MOurServicesCardComponent = motion(OurServicesCardComponent)

export default OurServicesCardComponent;
