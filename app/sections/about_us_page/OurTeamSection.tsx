
"use client";
import React, { useState } from "react";
import classNames from "classnames";
import s from "./OurTeamSection.module.scss";
import pagination from "@/components/PaginationComponent.module.scss";
import { Carousel } from "@mantine/carousel";

import ReactPaginate from "react-paginate";
import Image from "next/image";
import MainTitleComponent from "@/components/MainTitleComponent";
import OurTeamComponent from "@/components/about_us/OurTeamComponent";
import Arrow from "@/images/vectors/arrow.svg";
import SectionVector from "@/images/vectors/section-vector.svg";
import { useTranslations } from "next-intl";
import useOurTeamData from "@/hooks/useOurTeamData";

const OurTeamSection = () => {
  const t = useTranslations("aboutUs.ourTeam");

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 1;
  const { team, loading, error } = useOurTeamData();

  const reversedTeam = [...team].reverse();

  const pageCount = Math.ceil(reversedTeam.length / itemsPerPage);

  const displayedData = reversedTeam.slice(
    currentPage * itemsPerPage,
    (currentPage + 4) * itemsPerPage
  );

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : pageCount - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pageCount);
  };

  return (
    <section className={s.box}>
      <div className={classNames(s.team)}>
        <div className={s.container}>
          <MainTitleComponent className={s.team__title} title="our team" />

          <OurTeamComponent
            className={s.team__cards}
            teamMembers={displayedData}
          />

          <ReactPaginate
            previousLabel={
              <div
                className={pagination.pagination__arrow_previous}
                onClick={handlePrevPage}
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
                onClick={handleNextPage}
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
