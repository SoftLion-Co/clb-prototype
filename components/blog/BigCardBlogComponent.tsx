import React from "react";
import s from "./BigCardBlogComponent.module.scss";
import ReadMoreComponent from "@/components/ReadMoreComponent";
import Image from "next/image";
import classNames from "classnames";

interface Info {
  info: Blog;
}

interface Blog {
  id: number;
  acf: Acf;
}

interface Acf {
  heading: string;
  date: string;
  mainimage: string;
  text1: string;
  subheading1: string;
  text2: string;
  quote: string;
  secondimage: string;
  subheading2: string;
  text3: string;
}

const BigCardBlogComponent = (data: Info) => {
  const articleLink = `/blog/${data.info.id}`;

  return (
    <div className={classNames(s.blog__container)}>
      <div className={s.blog}>
        <div className={s.blog__content}>
          <h3 className={s.blog__title}>{data.info.acf.heading}</h3>
          <p className={s.blog__text}>{data.info.acf.subheading1}</p>
          <ReadMoreComponent href={articleLink} />
        </div>

        <Image
          className={s.blog__picture}
          src={data.info.acf.mainimage}
          alt="Picture"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default BigCardBlogComponent;
