import { useState, useEffect } from 'react';

const reqUrl = "https://softlion.blog/wp-json/wp/v2/blogs?acf_format=standard&_fields=title,acf,id";

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

const useBlogsData = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const req = await fetch(reqUrl, { cache: "no-cache" });
      const fetchedBlogs: Blog[] = await req.json();
      console.log(fetchedBlogs);
      setBlogs(fetchedBlogs);
      setLoading(false);
    } catch (error: any) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    // Call fetchBlogs only when the component mounts
    fetchBlogs();
  }, []); // Empty dependency array ensures this effect runs only once, equivalent to componentDidMount

  return { blogs, loading, error, fetchBlogs };
};

export default useBlogsData;
