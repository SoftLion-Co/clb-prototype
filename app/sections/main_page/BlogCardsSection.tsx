"use client";
import s from "./BlogCardSection.module.scss";
import classNames from "classnames";
import Arrow from "@/images/vectors/arrow.svg";

import MainTitleComponent from "@/components/MainTitleComponent";
import SmallCardBlogComponent from "@/components/blog/SmallCardBlogComponent";
import MainButtonComponent from "@/components/MainButtonComponent";
import useBlogsData from "@/hooks/useBlogsData";
import { useTranslations } from "next-intl";
import useLocale from "@/hooks/useLocale";

const BlogCardsSection = () => {
  const t = useTranslations("homePage")
  const t1 = useTranslations("components")
  const { latestBlogs } = useBlogsData();
  const locale = useLocale();

  return (
    <section className={classNames(s.container, s.blog)}>
      <MainTitleComponent className={s.blog__title} title={t("blogHeading")} />

      <div className={s.blog__cards}>
        {latestBlogs.map((blog, index) => (
          <div className={classNames(s.blog__cards)} key={index}>
            <SmallCardBlogComponent info={blog} locale={locale}/>
          </div>
        ))}
      </div>

      <MainButtonComponent
        text={t1("moreInBlog")}
        arrowSrc={Arrow}
        href={"/blog"}
      />
    </section>
  );
};

export default BlogCardsSection;
