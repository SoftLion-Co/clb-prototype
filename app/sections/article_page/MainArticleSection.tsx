"use client";
import classNames from "classnames";
import s from "./MainArticleSection.module.scss";
import Image from "next/image";
import ImageAndTextCardsComponent from "@/components/ImageAndTextCardsComponent";

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

const MainArticleSection = (data: Data) => {
  return (
    <section className={s.article}>
      <h1 className={classNames(s.h1Default, s.article__title)}>
        {data.data.acf.heading}
      </h1>
      <p className={classNames(s.pDefault, s.article__date)}>
        {data.data.acf.date}
      </p>
      <div className={s.article__content}>
        <div className={s.image__container}>
          <Image
            src={data.data.acf.mainimage}
            alt={data.data.acf.heading}
            className={s.image}
            width={1440}
            height={649}
          />
        </div>
        <p className={s.article__text}>{data.data.acf.text1}</p>
        <h2 className={s.article__subheading}>{data.data.acf.subheading1}</h2>
        <p className={s.article__text}>{data.data.acf.text2}</p>
        <ImageAndTextCardsComponent
          text={data.data.acf.quote}
          image={data.data.acf.secondimage}
          alt={data.data.acf.heading}
        />
        <h2 className={s.article__subheading}>{data.data.acf.subheading2}</h2>
        <p className={s.article__text}>{data.data.acf.text3}</p>
      </div>
    </section>
  );
};

export default MainArticleSection;
