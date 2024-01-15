import React, { FC } from "react";
import s from "./ListCardsComponent.module.scss";
import Image from "next/image";
import { useTranslations } from "next-intl";

import GrainsImage from "@/images/icons/Grains.svg";
import FertilizersImage from "@/images/icons/Fertilizers.svg";
import OilsImage from "@/images/icons/Oils.svg";
import ProcessedProductsImage from "@/images/icons/ProcessedProducts.svg";
import ByCarImage from "@/images/icons/ByCar.svg";
import ByRailImage from "@/images/icons/ByRail.svg";
import ByRiverImage from "@/images/icons/ByRiver.svg";
import BySeaImage from "@/images/icons/BySea.svg";
import classNames from "classnames";

interface ListCardsProps {
  data: { [key: string]: { [key: string]: string } };
}

const ListCardsComponent: FC<ListCardsProps> = ({ data }) => {
  const t = useTranslations("commodityBrokerage");
  const t1 = useTranslations("freightBrokerage");

  const imageMap: { [key: string]: any } = {
    [t("grains")]: GrainsImage,
    [t("fertilizers")]: FertilizersImage,
    [t("oils")]: OilsImage,
    [t("processedProducts")]: ProcessedProductsImage,
    [t1("byCar")]: ByCarImage,
    [t1("byRail")]: ByRailImage,
    [t1("byRiver")]: ByRiverImage,
    [t1("bySea")]: BySeaImage,
  };

  return (
    <div className={s.cards}>
      {Object.entries(data).map(([title, items]) => (
        <div key={title} className={s.card}>
          {title && (
            <Image
              src={imageMap[title]}
              alt={title}
              className={s.card__image}
              width={75}
              height={80}
            />
          )}
          <h3 className={s.card__title}>{title}</h3>
          <ul className={s.card__list}>
            {Object.entries(items).map(([key, item]) => (
              <li key={key} className={s.card__item}>
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
