"use client";
import s from "./BlogCardSection.module.scss";
import classNames from "classnames";

import MainTitleComponent from "@/components/MainTitleComponent";
import SmallCardBlogComponent from "@/components/blog/SmallCardBlogComponent";
import MainButtonComponent from "@/components/MainButtonComponent";
import useBlogsData from "@/hooks/useBlogsData";
import { useTranslations } from "next-intl";
import useLocale from "@/hooks/useLocale";

const BlogCardsSection = () => {
  const t = useTranslations("blog");
  const t1 = useTranslations("components");
  const { latestBlogs } = useBlogsData();
  const locale = useLocale();

  return (
    <section className={s.box}>
      <div className={s.background}>
        <div className={classNames(s.container, s.blog__container)}>
          <MainTitleComponent
            className={s.blog__title}
            title={t("blogTitle")}
            color="black"
            left
          />

          <div className={s.blog__cards}>
            {latestBlogs.map((blog, index) => (
              <div key={index}>
                <SmallCardBlogComponent info={blog} locale={locale} />
              </div>
            ))}
          </div>

          <MainButtonComponent
            text={t1("moreOurNews")}
            href={"/blog"}
            className={s.blog__button}
          />
        </div>
      </div>
    </section>
  );
};

export default BlogCardsSection;
