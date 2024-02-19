"use client";
import Image from "next/image";
import classNames from "classnames";
import s from "./OurTeamSection.module.scss";
import React, { useCallback, useEffect, useState, FC } from "react";
import { Carousel, Embla } from "@mantine/carousel";
import MainTitleComponent from "@/components/MainTitleComponent";
import OurTeamCardComponent from "@/components/about_us/OurTeamCardComponent";
import Arrow from "@/images/vectors/arrow.svg";
import SectionVector from "@/images/vectors/section-vector.svg";
import useOurTeamData from "@/hooks/useOurTeamData";
import MotionWrapper from "@/hooks/MotionWrapper";
import { useTranslations } from "next-intl";

interface TeamMember {
  id: number;
  acf: TeamMemberAcf;
}

interface OurTeamSectionProps {
  teamMembers?: TeamMember[];
}

interface ArrowProps {
  className: string;
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

const OurTeamSection: FC<OurTeamSectionProps> = ({ teamMembers }) => {
  const t = useTranslations("aboutUs.ourTeam");
  const { team, loading, error } = useOurTeamData();
  const reversedTeam = [...team].reverse();

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
          className={s.arrow}
          width={28}
        />
      </div>
    );
  };

  const PrevArrow: FC<ArrowProps> = ({ className }) => {
    return (
      <div className={className}>
        <Image
          src={Arrow}
          alt="Previous slide"
          className={s.arrow}
          width={28}
        />
      </div>
    );
  };

  return (
    <section className={s.box}>
      <div className={classNames(s.background, s.team)}>
        <MotionWrapper className={s.container} initial viewport>
          <MainTitleComponent
            className={s.team__title}
            title={t("heading")}
            color="black"
          />

          <MotionWrapper className={s.team__carousel} initial viewport variants>
            <Carousel
              classNames={{
                control: s.team__control,
                controls: s.team__controls,
              }}
              height="100%"
              slideSize="25%"
              slideGap="md"
              loop
              align="start"
              slidesToScroll={1}
              previousControlIcon={<NextArrow className={s.team__arrow} />}
              nextControlIcon={<PrevArrow className={s.team__arrow} />}
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
                  slideSize: "33.333%",
                },
                {
                  minWidth: 1280,
                  slideSize: "25%",
                },
              ]}
            >
              {reversedTeam.map((teamMember) => (
                <Carousel.Slide key={teamMember.id}>
                  <OurTeamCardComponent
                    teamMember={teamMember}
                    className={s.team__cards}
                  />
                </Carousel.Slide>
              ))}
            </Carousel>
          </MotionWrapper>
          <Image className={s.team__vector} src={SectionVector} alt="Vector" />
        </MotionWrapper>
      </div>
    </section>
  );
};

export default OurTeamSection;
