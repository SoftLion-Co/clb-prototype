import s from "./BlogCardSection.module.scss";
import classNames from "classnames";
import Arrow from "@/images/vectors/arrow.svg";
import Picture from "@/images/home-hero-test.png";

import MainTitleComponent from "@/components/MainTitleComponent";
import SmallCardBlogComponent from "@/components/blog/SmallCardBlogComponent";
import MainButtonComponent from "@/components/MainButtonComponent";

const BlogCardSection = () => {
  const cardData = [
    {
      imageSrc: Picture.src,
      title: "Article title 1",
      text: "Lorem ipsum dolor sit amet consectetur. Nibh leo non luctus diam sed quam. Vitae donec enim rhoncus iaculis amet non semper. Ut enim vulputate proin laoreet rhoncus enim. Dictum mollis eu aliquam massa.",
    },
    {
      imageSrc: Picture.src,
      title: "Article title 2",
      text: "Lorem ipsum dolor sit amet consectetur. Nibh leo non luctus diam sed quam. Vitae donec enim rhoncus iaculis amet non semper. Ut enim vulputate proin laoreet rhoncus enim. Dictum mollis eu aliquam massa.",
    },
    {
      imageSrc: Picture.src,
      title: "Article title 3",
      text: "Lorem ipsum dolor sit amet consectetur. Nibh leo non luctus diam sed quam. Vitae donec enim rhoncus iaculis amet non semper. Ut enim vulputate proin laoreet rhoncus enim. Dictum mollis eu aliquam massa.",
    },
  ].reverse();

  return (
    <section className={classNames(s.container, s.blog)}>
      <MainTitleComponent className={s.blog__title} title="Our Blog" />

      <div className={s.blog__cards}>
        {cardData.map((data, index) => (
          <div className={classNames(s.blog__cards)} key={index}>
            <SmallCardBlogComponent data={data} />
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

export default BlogCardSection;
