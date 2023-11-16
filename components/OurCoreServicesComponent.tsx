import React from "react";
import s from "./OurCoreServicesComponent.module.scss";
import image from "@/images/home-hero-test.png";
import Image from "next/image";

const data = {
  "Market Analysis":
    "Our team of professionals studies current trends to provide you with the most relevant information and recommendations",
  "Personalized Approach":
    "We consider the needs and expectations of both parties to establish the best collaboration conditions",
  "Contract Execution Support":
    "At every step, we stand by your side, offering advice and active participation in negotiations to achieve the best deal terms",
  "Partnership Geography":
    "We propose diverse options of potential partners from various regions, based on your business strategy",
  "Price Policy Optimization":
    "Our goal is to provide you with the best prices and terms, ensuring your collaboration is not only profitable but also stable",
};

function OurCoreServicesComponent() {
  const serviceCards = Object.entries(data).map(([title, text]) => (
    <div className={s.card} key={title}>
      <h3 className={s.card__title}>{title}</h3>
      <p className={s.card__text}>{text}</p>
    </div>
  ));

  const mainCards = serviceCards.slice(0, -1);
  const lastServiceCard = serviceCards.slice(-1)[0];

  return (
    <div className={s.services}>
      {mainCards}
      <div>
        <Image
          src={image}
          alt="Hero"
          className={s.card__image}
          width={800}
          height={800}
        />
      </div>
      {lastServiceCard}
    </div>
  );
}

export default OurCoreServicesComponent;
