"use client";
import React, { FC, ForwardedRef, forwardRef } from "react";
import classNames from "classnames";
import s from "./OurServicesCardComponent.module.scss";
import ReadMoreComponent from "@/components/ReadMoreComponent";
import { useLocale } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";

interface OurServicesCardProps {
  title: string;
  text: string;
  image: string | undefined;
  className?: string;
  href: string;
}

const OurServicesCardComponent: FC<OurServicesCardProps> = forwardRef(({
  title,
  text,
  image,
  className,
  href
}, ref: ForwardedRef<HTMLDivElement> | undefined) => {
  const local = useLocale();

  return (
    <div className={classNames(s.card__container, className)} ref={ref}>
      <div className={s.card__info}>
        <Image className={s.card__image} src={image!} alt="Image" />
        <h3 className={s.card__title}>{title}</h3>
      </div>

      <div className={s.card__content}>
        <p className={s.card__text}>{text}</p>

        <ReadMoreComponent href={`/${local}/${href}`} />
      </div>
    </div>
  );
});

export const MOurServicesCardComponent = motion(OurServicesCardComponent)

export default OurServicesCardComponent;
