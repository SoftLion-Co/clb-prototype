"use client";
import s from "./BlogCardSection.module.scss";
import classNames from "classnames";
import Arrow from "@/images/vectors/arrow.svg";

import MainTitleComponent from "@/components/MainTitleComponent";
import SmallCardBlogComponent from "@/components/blog/SmallCardBlogComponent";
import MainButtonComponent from "@/components/MainButtonComponent";
import useBlogsData from "@/hooks/useBlogsData";

const BlogCardsSection = () => {
  const { latestBlogs } = useBlogsData();

  return (
    <section className={classNames(s.container, s.blog)}>
      <MainTitleComponent className={s.blog__title} title="Our Blog" />

      <div className={s.blog__cards}>
        {latestBlogs.map((blog, index) => (
          <div className={classNames(s.blog__cards)} key={index}>
            <SmallCardBlogComponent info={blog} />
          </div>
        ))}
      </div>

      <MainButtonComponent
        text="More in Blog"
        arrowSrc={Arrow}
        href={"/blog"}
      />
    </section>
  );
};

export default BlogCardsSection;
