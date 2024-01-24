"use client";
import classNames from "classnames";
import s from "./MainArticleSection.module.scss";
import Image from "next/image";
import ImageAndTextCardsComponent from "@/components/ImageAndTextCardsComponent";
import SocialLinksSection from "@/app/sections/article_page/SocialLinksSection";
import useLocale from "@/hooks/useLocale";
import useDateFormat from "@/hooks/useDateFormat";
import { motion } from "framer-motion";
import useFramerAnimations from "@/hooks/useFramerAnimations";

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
  const defaultAnimation = useFramerAnimations("lowDelay")

  return (
    <section className={s.box}>
      <div className={s.background}>
        <motion.div
          className={classNames(s.container, s.article)}
        >
          <motion.h1
            className={classNames(s.h1Default, s.article__title)}
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ margin: "1000% 0% 10% 0%" }}
            variants={defaultAnimation}
            custom={1}
          >
            {data.data.acf[`heading_${locale}` as keyof Acf]}
          </motion.h1>
          <motion.p
            className={classNames(s.article__date)}
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ margin: "1000% 0% 10% 0%" }}
            variants={defaultAnimation}
            custom={2}
          >
            {formattedDate}
          </motion.p>
          <div className={s.article__content}>
            <motion.div
              className={s.image__container}
              initial={"hidden"}
              whileInView={"visible"}
              viewport={{ margin: "1000% 0% 10% 0%" }}
              variants={defaultAnimation}
              custom={3}
            >
              <Image
                src={data.data.acf.mainimage}
                alt={data.data.acf[`heading_${locale}` as keyof Acf]}
                className={s.image}
                width={1440}
                height={649}
              />
            </motion.div>
            <motion.p
              className={s.article__text}
              initial={"hidden"}
              whileInView={"visible"}
              viewport={{ margin: "1000% 0% 10% 0%" }}
              variants={defaultAnimation}
              custom={4}
            >
              {data.data.acf[`text1_${locale}` as keyof Acf]}
            </motion.p>
            <motion.h2
              className={s.article__subheading}
              initial={"hidden"}
              whileInView={"visible"}
              viewport={{ margin: "1000% 0% 10% 0%" }}
              variants={defaultAnimation}
              custom={5}
            >
              {data.data.acf[`subheading1_${locale}` as keyof Acf]}
            </motion.h2>
            <motion.p
              className={s.article__text}
              initial={"hidden"}
              whileInView={"visible"}
              viewport={{ margin: "1000% 0% 10% 0%" }}
              variants={defaultAnimation}
              custom={6}
            >
              {data.data.acf[`text2_${locale}` as keyof Acf]}
            </motion.p>
            <ImageAndTextCardsComponent
              text={data.data.acf[`quote_${locale}` as keyof Acf]}
              image={data.data.acf.secondimage}
              alt={data.data.acf[`heading_${locale}` as keyof Acf]}
              color="blue"
              articlePadding
            />
            <motion.h2
              className={s.article__subheading}
              initial={"hidden"}
              whileInView={"visible"}
              viewport={{ margin: "1000% 0% 10% 0%" }}
              variants={defaultAnimation}
              custom={7}
            >
              {data.data.acf[`subheading2_${locale}` as keyof Acf]}
            </motion.h2>
            <motion.p
              className={s.article__text}
              initial={"hidden"}
              whileInView={"visible"}
              viewport={{ margin: "1000% 0% 10% 0%" }}
              variants={defaultAnimation}
              custom={8}
            >
              {data.data.acf[`text3_${locale}` as keyof Acf]}
            </motion.p>
          </div>
          <SocialLinksSection />
        </motion.div>
      </div>
    </section>
  );
};

export default MainArticleSection;
