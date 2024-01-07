"use client";
import React, { useCallback, useEffect, useState } from "react";
import classNames from "classnames";
import s from "./OurTeamSection.module.scss";
import pagination from "@/components/PaginationComponent.module.scss";
import { Carousel, Embla } from "@mantine/carousel";
import { Progress } from "@mantine/core";

import ReactPaginate from "react-paginate";
import Image from "next/image";
import MainTitleComponent from "@/components/MainTitleComponent";
import OurTeamCardComponent from "@/components/about_us/OurTeamCardComponent";
import Arrow from "@/images/vectors/arrow.svg";
import SectionVector from "@/images/vectors/section-vector.svg";
import { useTranslations } from "next-intl";
import useOurTeamData from "@/hooks/useOurTeamData";

interface TeamMember {
  id: number;
  acf: TeamMemberAcf;
}

interface TeamMemberAcf {
  fullname_en: string;
  jobtitle_en: string;
  image: string;
  fullname_de: string;
  jobtitle_de: string;
  fullname_es: string;
  jobtitle_es: string;
  fullname_ua: string;
  jobtitle_ua: string;
}

interface OurTeamSectionProps {
  teamMembers: TeamMember[]; // Assuming TeamMember is defined somewhere
}

const OurTeamSection: React.FC<OurTeamSectionProps> = ({ teamMembers }) => {
  const t = useTranslations("aboutUs.ourTeam");

  const [currentPage, setCurrentPage] = useState(0);
  // const itemsPerPage = 4;
  const { team, loading, error } = useOurTeamData();

  const reversedTeam = [...team].reverse();

  // const pageCount = Math.ceil(reversedTeam.length / itemsPerPage);

  // const displayedData = reversedTeam.slice(
  //   currentPage * itemsPerPage,
  //   (currentPage + 4) * itemsPerPage
  // );

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : pageCount - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pageCount);
  };

  const [scrollProgress, setScrollProgress] = useState(0);
  const [embla, setEmbla] = useState<Embla | null>(null);

  const handleScroll = useCallback(() => {
    if (!embla) return;
    const progress = Math.max(1, Math.min(1, embla.scrollProgress()));
    // setScrollProgress(progress * 100);
  }, [embla, setScrollProgress]);

  useEffect(() => {
    if (embla) {
      embla.on("scroll", handleScroll);
      handleScroll();
    }
  }, [embla]);

  return (
    <section className={s.box}>
      <div className={classNames(s.background, s.team)}>
        <div className={s.container}>
          <MainTitleComponent className={s.team__title} title="our team" />

          <Carousel
            dragFree
            slideSize="25%"
            slideGap="md"
            height={400}
            getEmblaApi={setEmbla}
            initialSlide={2}
          >
            {/* <div className={s.team__cards}> */}
            {reversedTeam.map((teamMember) => (
              <Carousel.Slide>
                <OurTeamCardComponent
                  key={teamMember.id}
                  teamMember={teamMember}
                  className={s.team__cards}
                />
              </Carousel.Slide>
            ))}
            {/* </div> */}
          </Carousel>

          <ReactPaginate
            previousLabel={
              <div
                className={pagination.pagination__arrow_previous}
                // onClick={handlePrevPage}
              >
                <Image
                  className={pagination.pagination__arrow_image}
                  src={Arrow}
                  alt="arrow"
                />
              </div>
            }
            nextLabel={
              <div
                className={pagination.pagination__arrow_next}
                // onClick={handleNextPage}
              >
                <Image
                  className={pagination.pagination__arrow_image}
                  src={Arrow}
                  alt="arrow"
                />
              </div>
            }
            breakClassName={pagination.pagination__break}
            onPageChange={(selected) => setCurrentPage(selected.selected)}
            containerClassName={pagination.pagination}
            pageClassName={pagination.pagination__pages}
            activeClassName={pagination.pagination__active}
            pageLinkClassName={pagination.hidden}
            forcePage={currentPage}
            pageCount={0}
          />
        </div>
        <Image className={s.team__vector} src={SectionVector} alt="vector" />
      </div>
    </section>
  );
};

export default OurTeamSection;
