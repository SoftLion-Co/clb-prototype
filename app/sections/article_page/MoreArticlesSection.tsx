import React, { useCallback, useEffect, useState, FC } from "react";
import s from "./MoreArticlesSection.module.scss";
import SmallCardBlogComponent from "@/components/blog/SmallCardBlogComponent";
import useBlogsData from "@/hooks/useBlogsData";
import Image from "next/image";
import Arrow from "@/images/vectors/arrow.svg";
import useLocale from "@/hooks/useLocale";
import MainTitleComponent from "@/components/MainTitleComponent";
import { useTranslations } from "next-intl";
import classNames from "classnames";
import { Carousel, Embla } from "@mantine/carousel";
import MotionWrapper from "@/hooks/MotionWrapper";

interface MoreArticlesSectionProps {
  blogName: string;
}

interface ArrowProps {
  className: string;
}

const MoreArticlesSection: FC<MoreArticlesSectionProps> = ({ blogName }) => {
  const locale = useLocale();
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

  const filteredBlogs = blogs.filter((blog) => {
    const formattedHeading = blog.acf.heading_en
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+/g, "-");
    return formattedHeading !== blogName;
  });

  return (
    <section className={s.box}>
      <div className={s.background}>
        <MotionWrapper
          className={classNames(s.container, s.articles)}
          initial
          viewport
        >
          <MainTitleComponent title={t("moreArticles")} left color="green" />

          <MotionWrapper className={s.carousel} initial viewport variants>
            <Carousel
              classNames={{
                control: s.control,
                controls: s.controls,
              }}
              height="100%"
              slideSize="25%"
              slideGap="md"
              containScroll="trimSnaps"
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
                  slideSize: "33.3%",
                },
                {
                  minWidth: 1280,
                  slideSize: "33.3%",
                },
              ]}
            >
              {filteredBlogs.map((blog, index) => (
                <Carousel.Slide key={index}>
                  <div key={index} style={{ height: "100%" }}>
                    <SmallCardBlogComponent info={blog} locale={locale} />
                  </div>
                </Carousel.Slide>
              ))}
            </Carousel>
          </MotionWrapper>
        </MotionWrapper>
      </div>
    </section>
  );
};

export default MoreArticlesSection;
