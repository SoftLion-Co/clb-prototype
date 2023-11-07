import React from "react";
import s from "./HeroSection.module.scss";

function HeroSection() {
  return (
    <div className={s.hero}>
      <div className={s.hero_text}>
        <h1>Commodities & Logistics Brokers</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Commodo leo mauris enim massa. Netus purus fames vel nunc consectetur.</p>
      </div>
      <div className={s.hero_image}></div>
    </div>
  );
}
export default HeroSection;
