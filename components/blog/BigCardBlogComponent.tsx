import React from "react";
import s from "./BigCardBlogComponent.module.scss";
import ReadMoreComponent from "@/components/ReadMoreComponent";
import Image from "next/image";
import classNames from "classnames";


const BigCardBlogComponent = (data: any) => {
  console.log(data)

  return (
    <div className={classNames(s.blog__container)}>
      <div className={s.blog}>
        <div className={s.blog__content}>
          <h3 className={s.blog__title}>{data.data.title.rendered}</h3>
          <p className={s.blog__text}>{data.data.acf.subheading1}</p>
          <ReadMoreComponent />
        </div>
        
          <Image className={s.blog__picture} src={data.data.acf.mainimage} alt="Picture" width={500} height={500}/>
        
      </div>
    </div>
  );
};

export default BigCardBlogComponent;
