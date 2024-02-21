"use client";
import classNames from "classnames";
import s from "./MainArticleSection.module.scss";
import Image from "next/image";
import BrandElement from "@/images/vectors/brand-element-2.svg";

import ImageAndTextCardsComponent from "@/components/ImageAndTextCardsComponent";
import SocialLinksSection from "@/app/sections/article_page/SocialLinksSection";
import useLocale from "@/hooks/useLocale";
import useDateFormat from "@/hooks/useDateFormat";
import MotionWrapper from "@/hooks/MotionWrapper";
import parse from "html-react-parser";
import React from "react";

interface Data {
  data: Blog;
}

interface Blog {
  id: number;
  title: Title;
  acf: Acf;
}

interface Title {
  rendered: string;
}

interface Acf {
  heading_en: string;
  date: string;
  mainimage: string;
  text1_en: string;
  subheading1_en: string;
  text2_en: string;
  quote_en: string;
  secondimage: string;
  subheading2_en: string;
  text3_en: string;
  heading_es: string;
  subheading1_es: string;
  text1_es: string;
  text2_es: string;
  quote_es: string;
  subheading2_es: string;
  text3_es: string;
  heading_de: string;
  subheading1_de: string;
  text1_de: string;
  text2_de: string;
  quote_de: string;
  subheading2_de: string;
  text3_de: string;
  heading_ua: string;
  subheading1_ua: string;
  text1_ua: string;
  text2_ua: string;
  quote_ua: string;
  subheading2_ua: string;
  text3_ua: string;
}

const MainArticleSection = (data: Data) => {
  const locale = useLocale();
  const formattedDate = useDateFormat(data.data.acf.date, locale);

  return (
    <section className={s.box}>
      <div className={s.background}>
        <div className={classNames(s.container, s.article)}>
          <h1 className={s.article__title}>
            {data.data.acf[`heading_${locale}` as keyof Acf]}
          </h1>

          <p className={classNames(s.article__date)}>{formattedDate}</p>
          <div className={s.article__content}>
            <Image
              src={data.data.acf.mainimage}
              alt={"Article Image"}
              className={s.image}
              width={1440}
              height={649}
            />
            <div>
              {parse(`${data.data.acf[`text1_${locale}` as keyof Acf]}`)}
            </div>
            <h2 className={s.article__subheading}>
              {data.data.acf[`subheading1_${locale}` as keyof Acf]}
            </h2>
            <div>
              {parse(`${data.data.acf[`text2_${locale}` as keyof Acf]}`)}
            </div>
            <ImageAndTextCardsComponent
              text={data.data.acf[`quote_${locale}` as keyof Acf]}
              image={data.data.acf.secondimage}
              alt={data.data.acf[`heading_${locale}` as keyof Acf]}
              color="blue"
              articlePadding
            />
            <h2 className={s.article__subheading}>
              {data.data.acf[`subheading2_${locale}` as keyof Acf]}
            </h2>
            <div>
              {parse(`${data.data.acf[`text3_${locale}` as keyof Acf]}`)}
            </div>
          </div>
          <SocialLinksSection />
        </div>
        <Image
          className={s.brand__element}
          src={BrandElement}
          alt="brand element"
        />
      </div>
    </section>
  );
};

export default MainArticleSection;
