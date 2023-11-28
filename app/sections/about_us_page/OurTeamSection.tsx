"use client";
import React, { useState } from "react";
import classNames from "classnames";
import s from "./OurTeamSection.module.scss";
import pagination from "@/components/PaginationComponent.module.scss";

import ReactPaginate from "react-paginate";
import Image from "next/image";
import MainTitleComponent from "@/components/MainTitleComponent";
import OurTeamComponent from "@/components/about_us/OurTeamComponent";
import Arrow from "@/images/vectors/arrow.svg";
import { useTranslations } from "next-intl";
import useOurTeamData from "@/hooks/useOurTeamData";

const OurTeamSection = () => {  
  const t = useTranslations("aboutUs.ourTeam");

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const { team, loading, error } = useOurTeamData();

  const reversedTeam = [...team].reverse();

  const pageCount = Math.ceil(reversedTeam.length / itemsPerPage);

  const handlePageChange = ({ selected }: { selected: number }) => {
    console.log("Selected Page:", selected);
    if (selected === 0) {
      setCurrentPage(pageCount - 1);
    } else if (selected === pageCount - 1) {
      setCurrentPage(0);
    } else {
      setCurrentPage(selected);
    }
  };

  const displayedData = reversedTeam.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePrevPage = () => {
    console.log("Previous Page");
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : pageCount - 1));
  };

  const handleNextPage = () => {
    console.log("Next Page");
    setCurrentPage((prev) => (prev + 1) % pageCount);
  };

  return (
    <section className={classNames(s.container, s.team)}>
      <MainTitleComponent className={s.team__title} title={t("heading")} />
      <OurTeamComponent teamMembers={displayedData} />

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
        breakLabel={"..."}
        breakClassName={pagination.pagination__break}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={(selected) => setCurrentPage(selected.selected)}
        containerClassName={pagination.pagination}
        pageClassName={pagination.pagination__pages}
        activeClassName={pagination.pagination__active}
        pageLinkClassName={pagination.hidden}
        forcePage={currentPage}
      />
    </section>
  );
};

export default OurTeamSection;
