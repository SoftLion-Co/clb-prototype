import React from "react";
import s from "./BigCardBlogComponent.module.scss";
import ReadMoreComponent from "@/components/ReadMoreComponent";
import Image from "next/image";
import classNames from "classnames";

interface BigCardProps {
  className?: string;
  data: { title: string; text: string; imageSrc: string };
}

const BigCardBlogComponent: React.FC<BigCardProps> = ({
  className,
  data = {},
}) => {
  const { title = "", text = "", imageSrc } = data;

  return (
    <div className={classNames(className, s.blog__container)}>
      <div className={s.blog}>
        <div className={s.blog__content}>
          {title && <h3 className={s.blog__title}>{data.title}</h3>}
          {text && <p className={s.blog__text}>{data.text}</p>}
          <ReadMoreComponent />
        </div>
        {imageSrc && (
          <Image className={s.blog__picture} src={imageSrc} alt="Picture" />
        )}
      </div>
    </div>
  );
};

export default BigCardBlogComponent;
