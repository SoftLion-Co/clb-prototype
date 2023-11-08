import s from "./SmallCardBlogComponent.module.scss";
import Image from "next/image";
import classNames from "classnames";
import Picture from "@/images/home-hero-test.png";
import Arrow from "@/images/question.svg";

interface SmallCardProps {
  className?: string;
}

const cardData = [
  {
    title: "Article title 1",
    text: "Lorem ipsum dolor sit amet consectetur. Nibh gravida leo non luctus diam sed quam. Vitae donec enim rhoncus iaculis amet non semper. Ut enim vulputate proin laoreet rhoncus enim. Dictum mollis eu aliquam massa.",
  },
  {
    title: "Article title 2",
    text: "Lorem ipsum dolor sit amet consectetur. Nibh gravida leo non luctus diam sed quam. Vitae donec enim rhoncus iaculis amet non semper. Ut enim vulputate proin laoreet rhoncus enim. Dictum mollis eu aliquam massa.",
  },
  {
    title: "Article title 3",
    text: "Lorem ipsum dolor sit amet consectetur. Nibh gravida leo non luctus diam sed quam. Vitae donec enim rhoncus iaculis amet non semper. Ut enim vulputate proin laoreet rhoncus enim. Dictum mollis eu aliquam massa.",
  },
];

const SmallCardBlogComponent: React.FC<SmallCardProps> = ({ className }) => {
  return (
    <div className={classNames(className, s.blog__container)}>
      {cardData.map((data, index) => (
        <div className={classNames(s.blog)} key={index}>
          <Image className={s.blog__picture} src={Picture} alt="Picture" />

          <h3 className={s.blog__title}>{data.title}</h3>

          <p className={s.blog__text}>{data.text}</p>

          <div className={s.blog__box}>
            <a className={s.blog__link} href="">
              Read more
            </a>
            <Image className={s.blog__arrow} src={Arrow} alt="Arrow" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SmallCardBlogComponent;
