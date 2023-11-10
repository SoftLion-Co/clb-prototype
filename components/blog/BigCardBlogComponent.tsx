import React from "react";
import s from "./BigCardBlogComponent.module.scss";
import ReadMoreComponent from "@/components/ReadMoreComponent";
import Image from "next/image";
import classNames from "classnames";
import Picture from "@/images/home-hero-test.png";

interface SmallCardProps {
  className?: string;
  data: { title?: string; text?: string };
}

const BigCardBlogComponent: React.FC<SmallCardProps> = ({
  className,
  data = {},
}) => {
  const { title = "", text = "" } = data;

  return (
    <div className={classNames(className, s.blog__container)}>
      <div className={s.blog}>
        <div className={s.blog__content}>
          {title && <h3 className={s.blog__title}>{title}</h3>}
          {text && <p className={s.blog__text}>{text}</p>}
          <ReadMoreComponent />
        </div>
        <Image className={s.blog__picture} src={Picture} alt="Picture" />
      </div>
    </div>
  );
};

export default BigCardBlogComponent;
