import React from "react";
import s from "./BigCardBlogComponent.module.scss";
import ReadMoreComponent from "@/components/ReadMoreComponent";
import Image from "next/image";
import classNames from "classnames";

interface Info {
  info: Blog;
  locale: string;
}

interface Blog {
  id: number;
  acf: Acf;
}

interface Acf {
  date: string;
  heading_en: string;
  mainimage: string;
  subheading1_en: string;
  heading_es: string;
  subheading1_es: string;
  heading_de: string;
  subheading1_de: string;
  heading_ua: string;
  subheading1_ua: string;
}

const BigCardBlogComponent = (data: Info) => {
  const articleLink = `blog/${data.info.id}`;

  return (
    <div className={classNames(s.blog__card)}>
      <div className={s.blog}>
        <div className={s.blog__content}>
          <div>
            <h3 className={s.blog__title}>
              {data.info.acf[`heading_${data.locale}` as keyof Acf]}
            </h3>
          </div>
          <div className={s.blog__container}>
            <p className={s.blog__text}>
              {data.info.acf[`subheading1_${data.locale}` as keyof Acf]}
            </p>
            <div className={s.blog__box}>
              <ReadMoreComponent href={articleLink} />
              <p className={s.blog__data}>{data.info.acf.date}</p>
            </div>
          </div>
        </div>

        <Image
          className={s.blog__picture}
          src={data.info.acf.mainimage}
          alt="Picture"
          width={452}
          height={551}
        />
      </div>
    </div>
  );
};

export default BigCardBlogComponent;
