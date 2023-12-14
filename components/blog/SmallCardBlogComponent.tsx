import s from "./SmallCardBlogComponent.module.scss";
import Image from "next/image";
import classNames from "classnames";
import ReadMoreComponent from "@/components/ReadMoreComponent";

interface Info {
  info: Blog;
  locale: string;
}

interface Blog {
  id: number;
  acf: Acf;
}

interface Acf {
  heading_en: string;
  mainimage: string;
  subheading1_en: string;
  heading_es: string;
  subheading1_es: string;
  heading_de: string;
  subheading1_de: string;
  heading_ua: string;
  subheading1_ua: string;
}

const SmallCardBlogComponent = (data: Info) => {

  // Отримуємо частину URL, що вказує на сторінку блогу
  const blogPagePath = window.location.pathname.includes('blog/') ? '' : 'blog/';

  const articleLink = `${blogPagePath}${data.info.id}`;

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
          <h3 className={s.blog__title}>
            {data.info.acf[`heading_${data.locale}` as keyof Acf]}
          </h3>
          <p className={s.blog__text}>
            {data.info.acf[`subheading1_${data.locale}` as keyof Acf]}
          </p>
          <ReadMoreComponent href={articleLink} />
        </div>
      </div>
    </div>
  );
};

export default SmallCardBlogComponent;
