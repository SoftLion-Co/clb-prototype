import React, { FC } from "react";
import Image from "next/image";
import s from "./ListCardsComponent.module.scss";

interface ListCardsProps {
  data: { portfolio: Portfolio[] | null };
}

interface Portfolio {
  title: Title;
  acf: Acf | null;
}

interface Title {
  rendered: string;
}

interface Acf {
  icon: string;
  title_en: string;
  option1_en: string;
  option2_en: string;
  option3_en: string;
  option4_en: string;
  option5_en: string;
  option6_en: string;
  option7_en: string;
  option8_en: string;
  option9_en: string;
  option10_en: string;
}

const ListCardsComponent: FC<ListCardsProps> = ({ data }) => {
  return (
    <div className={s.cards}>
      {data.portfolio &&
        data.portfolio
          .slice()
          .reverse() // Створюємо копію масиву та здійснюємо обернення портфоліо
          .map((item: Portfolio, index: number) => (
            <div key={index} className={s.card}>
              {item.acf && item.acf.icon && (
                <Image
                  src={item.acf.icon}
                  alt={item.title.rendered}
                  className={s.card__image}
                  width={75}
                  height={80}
                />
              )}
              <h3 className={s.card__title}>{item.title.rendered}</h3>
              <ul className={s.card__list}>
                {Object.entries(item.acf || {}).map(([key, value]) => {
                  if (key.startsWith("option") && value !== "") {
                    return (
                      <li key={key} className={s.card__item}>
                        {value}
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
            </div>
          ))}
    </div>
  );
};

export default ListCardsComponent;
