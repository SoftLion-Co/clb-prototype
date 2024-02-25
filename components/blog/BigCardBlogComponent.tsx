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
  const blogUrl = data.info.acf.heading_en
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+/g, "-");
  const blogId = data.info.id;

  const articleLink = `blog/${blogUrl}-${blogId}`;

  function stripHtmlTags(html: string): string {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  }
  const cardHeading = data.info.acf[`heading_${data.locale}` as keyof Acf]
  const cardText = stripHtmlTags(data.info.acf[`text1_${data.locale}` as keyof Acf]);

  return (
    <div className={classNames(s.blog__card)}>
      <div className={s.blog}>
        <div className={s.blog__content}>
          <div>
            <h3 className={s.blog__title}>
              {cardHeading}
            </h3>
          </div>
          <div className={s.blog__container}>
            <p className={s.blog__text}>
              {cardText}
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
