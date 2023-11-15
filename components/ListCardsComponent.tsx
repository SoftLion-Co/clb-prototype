import React, { FC } from "react";
import s from "./ListCardsComponent.module.scss";

interface ListCardsProps {
    data: { [key: string]: string[] };
  }
  
  const ListCardsComponent: FC<ListCardsProps> = ({ data }) => {
    return (
    <div className={s.cards}>
      {Object.entries(data).map(([title, items]) => (
        <div key={title} className={s.card}>
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
