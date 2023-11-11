import s from "./SmallCardBlogComponent.module.scss";
import Image from "next/image";
import classNames from "classnames";
import Picture from "@/images/home-hero-test.png";
import ReadMoreComponent from "@/components/ReadMoreComponent";



const SmallCardBlogComponent = (data: any) => {
  
  return (
    <div className={classNames(s.blog__container)}>
      <div className={s.blog}>
        <Image
          className={s.blog__picture}
          src={data.data.acf.mainimage}
          alt="Picture"
          width={416}
          height={250}
        />
        <div className={s.blog__content}>
          <h3 className={s.blog__title}>{data.data.title.rendered}</h3>
          <p className={s.blog__text}>{data.data.acf.subheading1}</p>
          

          <ReadMoreComponent id={data.data.id}/>
        </div>
      </div>
    </div>
  );
};

export default SmallCardBlogComponent;
