import classNames from "classnames";
import s from "./page.module.scss";
import Image from "next/image";

const BlogArticle = () => {
  return <div className={classNames(s.container, s.article)}><GetBlogsComponent /></div>;
};

const reqUrl = "https://softlion.blog/wp-json/wp/v2/blogs?acf_format=standard&_fields=title,acf"

export interface Blog {
  title: Title;
  acf: Acf;
}
export interface Title {
  rendered: string;
}
export interface Acf {
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

const GetBlogsComponent = async () => {
  const req = await fetch(reqUrl, { cache: "no-cache" });
  const blogs: Blog[] = await req.json();
  console.log(blogs)

  return (
    <div className={s.article__wrapper}>
      <h1 className={classNames(s.h1Default, s.article__title)}>{blogs[0].title.rendered}</h1>
      <p>{blogs[0].acf.date}</p>
      <Image src={blogs[0].acf.mainimage} alt={blogs[0].title.rendered} width={400} height={300}/>
      <p>{blogs[0].acf.text1}</p>
      <h2>{blogs[0].acf.subheading1}</h2>
      <p>{blogs[0].acf.text2}</p>
      <h3>{blogs[0].acf.quote}</h3>
      <Image src={blogs[0].acf.secondimage} alt={blogs[0].title.rendered} width={400} height={300}/>
      <h2>{blogs[0].acf.subheading2}</h2>
      <p>{blogs[0].acf.text3}</p>
    </div>
  );
};

export default BlogArticle;
