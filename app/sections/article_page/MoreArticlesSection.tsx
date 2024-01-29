import React, { useCallback, useEffect, useState, FC } from "react";
import s from "./MoreArticlesSection.module.scss";
import SmallCardBlogComponent from "@/components/blog/SmallCardBlogComponent";
import useBlogsData from "@/hooks/useBlogsData";
import Image from "next/image";
import Arrow from "@/images/vectors/arrow.svg";
import useLocale from "@/hooks/useLocale";
import {
  MMainTitleComponent,
} from "@/components/MainTitleComponent";
import { useTranslations } from "next-intl";
import classNames from "classnames";
import { Carousel, Embla } from "@mantine/carousel";
import { motion } from "framer-motion";
import useFramerAnimations from "@/hooks/useFramerAnimations";

interface MoreArticlesSectionProps {
  blogId: string;
}

interface ArrowProps {
  className: string;
}

const MoreArticlesSection: FC<MoreArticlesSectionProps> = ({ blogId }) => {
  const locale = useLocale();
  const defaultAnimation = useFramerAnimations();
  const { blogs, loading, error } = useBlogsData();
  const t = useTranslations("components");

  const [embla] = useState<Embla | null>(null);

  const handleScroll = useCallback(() => {
    if (!embla) return;
  }, [embla]);

  useEffect(() => {
    if (embla) {
      embla.on("scroll", handleScroll);
      handleScroll();
    }
  }, [embla]);

  const NextArrow: FC<ArrowProps> = ({ className }) => {
    return (
      <div className={className}>
        <Image
          style={{ transform: "rotate(180deg)" }}
          src={Arrow}
          alt="Next slide"
          width={28}
        />
      </div>
    );
  };

  const PrevArrow: FC<ArrowProps> = ({ className }) => {
    return (
      <div className={className}>
        <Image src={Arrow} alt="Previous slide" width={28} />
      </div>
    );
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  const filteredBlogs = blogs.filter(
    (blog) => blog.id !== parseInt(blogId, 10)
  );

  return (
    <section className={s.box}>
      <div className={s.background}>
        <motion.div
          className={classNames(s.container, s.articles)}
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ margin: "20% 0% -20% 0%" }}
        >
          <MMainTitleComponent
            title={t("moreArticles")}
            left
            color="green"
            variants={defaultAnimation}
          />
          <div className={s.carousel}>
            <Carousel
              classNames={{
                control: s.control,
                controls: s.controls,
              }}
              height="100%"
              slideSize="25%"
              slideGap="md"
              loop
              align="start"
              slidesToScroll={1}
              previousControlIcon={<NextArrow className={s.arrow} />}
              nextControlIcon={<PrevArrow className={s.arrow} />}
              breakpoints={[
                {
                  maxWidth: 767.98,
                  slideSize: "100%",
                },
                {
                  minWidth: 768,
                  maxWidth: 998,
                  slideSize: "50%",
                },
                {
                  minWidth: 998,
                  maxWidth: 1280,
                  slideSize: "33.333333%",
                },
                {
                  minWidth: 1280,
                  slideSize: "33.333333%",
                },
              ]}
            >
              {filteredBlogs.map((blog, index) => (
                <Carousel.Slide key={index}>
                  <motion.div
                    key={index}
                    variants={defaultAnimation}
                    custom={index}
                    initial={"hidden"}
                    whileInView={"visible"}
                    viewport={{ margin: "20% 0% -20% 0%" }}
                  >
                    <SmallCardBlogComponent info={blog} locale={locale} />
                  </motion.div>
                </Carousel.Slide>
              ))}
            </Carousel>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MoreArticlesSection;
