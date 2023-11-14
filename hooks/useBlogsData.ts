import { useState, useEffect } from "react";

const reqUrl =
  "https://softlion.blog/wp-json/wp/v2/blogs?acf_format=standard&_fields=acf,id";

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

const useBlogsData = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const req = await fetch(reqUrl, { cache: "no-cache" });
      const fetchedBlogs: Blog[] = await req.json();
      setBlogs(fetchedBlogs);
      setLoading(false);
    } catch (error: any) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const latestBlogs = blogs.slice(Math.max(blogs.length - 3, 0));

  return { blogs, loading, error, latestBlogs };
};

export default useBlogsData;
