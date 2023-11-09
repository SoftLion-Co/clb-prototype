import s from "./BlogCardSection.module.scss";
import MainTitleComponent from "@/components/MainTitleComponent";
import SmallCardBlogComponent from "@/components/blog/SmallCardBlogComponent";
import BigCardBlogComponent from "@/components/blog/BigCardBlogComponent";
import MainButtonComponent from "@/components/MainButtonComponent";
import classNames from "classnames";
import Arrow from "@/images/vectors/arrow.svg";

const BlogCardSection = () => {
  return (
    <section className={classNames(s.container, s.blog)}>
      <MainTitleComponent className={s.blog__title} title="Our Blog" />
      <SmallCardBlogComponent className={s.blog__card} />
      <MainButtonComponent text="More in Blog" arrowSrc={Arrow} />
      <BigCardBlogComponent />
    </section>
  );
};

export default BlogCardSection;
