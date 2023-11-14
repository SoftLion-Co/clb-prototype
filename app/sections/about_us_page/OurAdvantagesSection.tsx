import React from "react";
import s from "./OurAdvantagesSection.module.scss";
import classNames from "classnames";
import MainTitleComponent from "@/components/MainTitleComponent";
import OurAdvantagesCardComponent from "@/components/about_us/OurAdvantagesCardComponent";

const OurAdvantagesSection = () => {
  const advantagesProps = [
    {
      text: "A vast global network of brokers, allowing us to find the optimal conditions for a deal",
    },
    {
      text: "In-depth knowledge in logistics: be it rail transport, road transport, or sea shipment - we have the best solutions for you",
    },
    {
      text: "Strong partnerships with numerous international companies, keeping us updated with the latest market trends",
    },
    {
      text: "A vast global network of brokers, allowing us to find the optimal conditions for a deal",
    },
    {
      text: "In-depth knowledge in logistics: be it rail transport, road transport, or sea shipment - we have the best solutions for you",
    },
    {
      text: "Strong partnerships with numerous international companies, keeping us updated with the latest market trends",
    },
  ];

  return (
    <section className={classNames(s.container, s.advantages)}>
      <MainTitleComponent title="Our Advantages" />
      <OurAdvantagesCardComponent advantages={advantagesProps} />
    </section>
  );
};

export default OurAdvantagesSection;
