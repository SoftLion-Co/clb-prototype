import React from "react";
import s from "./HeroSection.module.scss";
import MainButtonComponent from "@/components/MainButtonComponent";
import Image from "next/image";
import HeroTestImage from "@/images/home-hero-test.png"

function HeroSection() {
  return (
    <div className={s.hero}>
      <div className={s.hero_text}>
        <h1>Commodities & Logistics Brokers</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Commodo leo mauris enim massa. Netus purus fames vel nunc consectetur.</p>
        <MainButtonComponent text="Our Services"/>
      </div>
      <div className={s.hero_image}>
        <Image src={HeroTestImage} alt="Hero Image"/>
      </div>
    </div>
  );
}
export default HeroSection;
