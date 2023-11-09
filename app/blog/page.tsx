import s from "./page.module.scss";
import PageTitleComponent from "@/components/PageTitleComponent";
import BigCardBlogComponent from "@/components/blog/BigCardBlogComponent";
import SmallCardBlogComponent from "@/components/blog/SmallCardBlogComponent";
import classNames from "classnames";

export default function Blog() {
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
    {
      title: "Article title 4",
      text: "Lorem ipsum dolor sit amet consectetur. Nibh leo non luctus diam sed quam. Vitae donec enim rhoncus iaculis amet non semper. Ut enim vulputate proin laoreet rhoncus enim. Dictum mollis eu aliquam massa.",
    },
    {
      title: "Article title 5",
      text: "Lorem ipsum dolor sit amet consectetur. Nibh leo non luctus diam sed quam. Vitae donec enim rhoncus iaculis amet non semper. Ut enim vulputate proin laoreet rhoncus enim. Dictum mollis eu aliquam massa.",
    },
  ];

  return (
    <section className={classNames(s.blog, s.container)}>
      <PageTitleComponent
        className={s.blog__title}
        title="Our News"
        text="Lorem ipsum dolor sit amet consectetur."
      />
      <div className={s.blog__cards}>
        <BigCardBlogComponent />

        {cardData.map((data, index) => (
          <SmallCardBlogComponent key={index} data={data} />
        ))}

        <BigCardBlogComponent />
      </div>
    </section>
  );
}
