import React from "react";
import s from "./HeroSection.module.scss";
import Image from "next/image";
import image from "@/images/home-hero-test.png"

function HeroSection() {
  return (
    <div className={s.hero}>
      <div className={s.hero__text}>
        In the world of agricultural trade, every detail matters. Commodities
        Logistics Brokers, as your commodity broker, does more than just connect
        buyers and sellers. We act as your strategic partner, offering in-depth
        market analysis and providing optimal conditions for both parties.
      </div>
      <Image className={s.hero__image} src={image} alt="Hero image" width={1000} height={1000}/>
    </div>
  );
}

export default HeroSection;
