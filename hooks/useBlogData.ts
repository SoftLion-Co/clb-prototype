import { useState, useEffect } from "react";

interface Blog {
  id: number;
  title: Title;
  acf: Acf;
}

interface Title {
  rendered: string;
}

interface Acf {
  heading_en: string;
  date: string;
  mainimage: string;
  text1_en: string;
  subheading1_en: string;
  text2_en: string;
  quote_en: string;
  secondimage: string;
  subheading2_en: string;
  text3_en: string;
  heading_es: string;
  subheading1_es: string;
  text1_es: string;
  text2_es: string;
  quote_es: string;
  subheading2_es: string;
  text3_es: string;
  heading_de: string;
  subheading1_de: string;
  text1_de: string;
  text2_de: string;
  quote_de: string;
  subheading2_de: string;
  text3_de: string;
  heading_ua: string;
  subheading1_ua: string;
  text1_ua: string;
  text2_ua: string;
  quote_ua: string;
  subheading2_ua: string;
  text3_ua: string;
}

const useBlogData = (name: string) => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log(name)

  const fetchBlog = async () => {
    try {
      setLoading(true);
      const reqUrlWithId = `https://softlion.blog/wp-json/wp/v2/blogs?acf_format=standard&_fields=acf,id`;
      const req = await fetch(reqUrlWithId, { cache: "no-cache" });
      const fetchedBlogs: Blog[] = await req.json();
      const foundBlog = fetchedBlogs.find(
        (blog) => blog.acf.heading_en.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '-') === name
      );
      if (foundBlog) {
        setBlog(foundBlog);
      } else {
        setError(null);
      }
      setLoading(false);
    } catch (error: any) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [name]);

  return { blog, loading, error };
};

export default useBlogData;
