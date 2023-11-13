import s from "./SmallCardBlogComponent.module.scss";
import Image from "next/image";
import classNames from "classnames";
import ReadMoreComponent from "@/components/ReadMoreComponent";

interface Info {
  info: Blog;
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
  heading: string;
  date: string;
  mainimage: string;
  text1: string;
  subheading1: string;
  text2: string;
  quote: string;
  secondimage: string;
  subheading2: string;
  text3: string;
}

const SmallCardBlogComponent = (data: Info) => {
  const articleLink = `/blog/${data.info.id}`;

  return (
    <div className={classNames(s.blog__container)}>
      <div className={s.blog}>
        <Image
          className={s.blog__picture}
          src={data.info.acf.mainimage}
          alt="Picture"
          width={416}
          height={250}
        />
        <div className={s.blog__content}>
          <h3 className={s.blog__title}>{data.info.title.rendered}</h3>
          <p className={s.blog__text}>{data.info.acf.subheading1}</p>

          <ReadMoreComponent href={articleLink} />
        </div>
      </div>
    </div>
  );
};

export default SmallCardBlogComponent;
