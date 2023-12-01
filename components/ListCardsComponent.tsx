import React, { FC } from "react";
import s from "./ListCardsComponent.module.scss";
import Image from "next/image";

import GrainsImage from "@/images/icons/Grains.svg";
import FertilizersImage from "@/images/icons/Fertilizers.svg";
import OilsImage from "@/images/icons/Oils.svg";
import ProcessedProductsImage from "@/images/icons/ProcessedProducts.svg";

interface ListCardsProps {
  data: { [key: string]: string[] };
}

const imageMap: { [key: string]: any } = {
  Grains: GrainsImage,
  Fertilizers: FertilizersImage,
  Oils: OilsImage,
  ProcessedProducts: ProcessedProductsImage,
};

const ListCardsComponent: FC<ListCardsProps> = ({ data }) => {
  return (
    <div className={s.cards}>
      {Object.entries(data).map(([title, items]) => (
        <div key={title} className={s.card}>
          {title && <Image src={imageMap[title]} alt={title} className={s.card__image} width={75} height={80} />}
          <h3 className={s.card__title}>{title}</h3>
          <ul className={s.card__list}>
            {items.map((item, index) => (
              <li key={index} className={s.card__item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ListCardsComponent;
