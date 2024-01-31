import React, { FC } from "react";
import Image from "next/image";
import s from "./ListCardsComponent.module.scss";
import classNames from "classnames";
import MotionWrapper from "@/hooks/MotionWrapper";

interface ListCardsProps {
  data: Portfolio[] | null;
  loading?: boolean;
  container?: boolean;
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
  title: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  option5: string;
  option6: string;
  option7: string;
  option8: string;
  option9: string;
  option10: string;
}

const ListCardsComponent: FC<ListCardsProps> = ({
  data,
  loading,
  container,
}) => {

  const cardsClass = classNames(s.cards, { [s.container]: container });

  return (
    <MotionWrapper
      className={cardsClass}
      initial
      viewport
    >
      {data?.map((item: Portfolio, index: number) => (
        <MotionWrapper
          key={index}
          className={s.card}
          initial
          variants
          custom={index}
          viewport
        >
          {item.acf && item.acf.icon && (
            <Image
              src={item.acf.icon}
              alt={item.title.rendered}
              className={s.card__image}
              width={75}
              height={80}
            />
          )}
          <h3 className={s.card__title}>{item.acf?.title}</h3>
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
        </MotionWrapper>
      ))}
    </MotionWrapper>
  );
};

export default ListCardsComponent;
