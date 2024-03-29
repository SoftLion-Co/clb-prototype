import React from "react";
import Image from "next/image";
import s from "./page.module.scss";
import classNames from "classnames";
import SectionVector from "@/images/vectors/section-vector.svg";
import ContactUsSection from "@/app/sections/main_page/ContactUsSection";
import ThreeCardsComponent from "@/components/ThreeCardsComponent";

import Incoterms from "@/images/incoterms.svg";
import MotionWrapper from "@/hooks/MotionWrapper";
import GetHeroComponent from "@/hooks/GetHeroComponent";

const Execution = () => {
  return (
    <React.Fragment>
      <section className={s.box}>
        <div className={classNames(s.background, s.execution)}>
          <GetHeroComponent
            path="execution-hero"
            className={s.execution__title}
          />
          <ThreeCardsComponent
            className={classNames(s.container, s.execution__cards)}
            path="execution-cards"
          />
          <Image
            className={s.execution__vector}
            src={SectionVector}
            alt="brand element"
          />

          <MotionWrapper initial variants viewportLarge>
            <Image
              className={classNames(s.execution__incoterms, s.container)}
              src={Incoterms}
              alt="Incoterms"
              width={2000}
              height={2000}
            />
          </MotionWrapper>
        </div>
      </section>
      <ContactUsSection />
    </React.Fragment>
  );
};

export default Execution;
