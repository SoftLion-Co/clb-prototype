import s from "./SmallCardBlogComponent.module.scss";
import Image from "next/image";
import classNames from "classnames";
import Picture from "@/images/home-hero-test.png";
import ReadMoreComponent from "@/components/ReadMoreComponent";

interface SmallCardProps {
  className?: string;
  data: { title: string; text: string };
}

const SmallCardBlogComponent: React.FC<SmallCardProps> = ({
  className,
  data,
}) => {
  return (
    <div className={classNames(className, s.blog__container)}>
      <div className={s.blog}>
        <Image className={s.blog__picture} src={Picture} alt="Picture" />

        <div className={s.blog__content}>
          <h3 className={s.blog__title}>{data.title}</h3>
          <p className={s.blog__text}>{data.text}</p>

          <ReadMoreComponent />
        </div>
      </div>
    </div>
  );
};

export default SmallCardBlogComponent;
