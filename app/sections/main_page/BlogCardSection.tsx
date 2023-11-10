import s from "./BlogCardSection.module.scss";
import MainTitleComponent from "@/components/MainTitleComponent";
import SmallCardBlogComponent from "@/components/blog/SmallCardBlogComponent";
import BigCardBlogComponent from "@/components/blog/BigCardBlogComponent";
import MainButtonComponent from "@/components/MainButtonComponent";
import classNames from "classnames";
import Arrow from "@/images/vectors/arrow.svg";

const BlogCardSection = () => {
  const cardData = [
    {
      title: "Article title 1",
      text: "Lorem ipsum dolor sit amet consectetur. Nibh leo non luctus diam sed quam. Vitae donec enim rhoncus iaculis amet non semper. Ut enim vulputate proin laoreet rhoncus enim. Dictum mollis eu aliquam massa.",
    },
    {
      title: "Article title 2",
      text: "Lorem ipsum dolor sit amet consectetur. Nibh leo non luctus diam sed quam. Vitae donec enim rhoncus iaculis amet non semper. Ut enim vulputate proin laoreet rhoncus enim. Dictum mollis eu aliquam massa.",
    },
    {
      title: "Article title 3",
      text: "Lorem ipsum dolor sit amet consectetur. Nibh leo non luctus diam sed quam. Vitae donec enim rhoncus iaculis amet non semper. Ut enim vulputate proin laoreet rhoncus enim. Dictum mollis eu aliquam massa.",
    },
  ];

  return (
    <section className={classNames(s.container, s.blog)}>
      <MainTitleComponent className={s.blog__title} title="Our Blog" />

      <div className={s.blog__cards}>
        {cardData.map((data, index) => (
          <div className={classNames(s.blog__cardsі)} key={index}>
            <SmallCardBlogComponent data={data} />
          </div>
        ))}
      </div>

      <MainButtonComponent text="More in Blog" arrowSrc={Arrow} />
    </section>
  );
};

export default BlogCardSection;
