import React from "react";
import s from "./PartnersSection.module.scss";
import MainTitleComponent from "@/components/MainTitleComponent";
import GetPartnersComponent from "@/components/partners/GetPartnersComponent";
import classNames from "classnames";

const PartnersSection = () => {
  return (
    <section className={classNames(s.container, s.partners)}>
      <MainTitleComponent title="Partners" className={s.partners__title} />

      <GetPartnersComponent />
    </section>
  );
};

export default PartnersSection;
