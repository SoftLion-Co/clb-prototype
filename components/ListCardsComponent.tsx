"use client";
import React, { FC } from "react";
import Image from "next/image";
import s from "./ListCardsComponent.module.scss";
import classNames from "classnames";
import { motion } from "framer-motion";
import useFramerAnimations from "@/hooks/useFramerAnimations";

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
  const defaultAnimation = useFramerAnimations()

  const cardsClass = classNames(s.cards, { [s.container]: container });

  return (
    <motion.div
      className={cardsClass}
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ margin: "20% 0% -20% 0%" }}
    >
      {data?.map((item: Portfolio, index: number) => (
        <motion.div
          key={index}
          className={s.card}
          initial={"hidden"}
          whileInView={"visible"}
          variants={defaultAnimation}
          custom={index}
          viewport={{ margin: "20% 0% -20% 0%" }}
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
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ListCardsComponent;
