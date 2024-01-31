import React from "react";
import s from "./KeyServicesComponent.module.scss";
import { useTranslations } from "next-intl";
import classNames from "classnames";
import { useTwoLinesTitle } from "@/hooks/useTwoLinesTitle";
import useFramerAnimations from "@/hooks/useFramerAnimations";
import MotionWrapper from "@/hooks/MotionWrapper";

function KeyServicesComponent() {
  const t = useTranslations("exportConsulting.services");

  const serviceCards = Array.from({ length: 6 }, (_, index) => {
    const title = t(`title${index + 1}`);
    const text = t(`text${index + 1}`);
    const text_1 = t(`text${index + 1}_1`);
    return { title, text, text_1 };
  });

  const cardsWithBorder = [0, 2, 4];
  const whiteCards = [4];

  return (
    <div className={s.services}>
      {serviceCards.map(({ title, text, text_1 }, index) => (
        <MotionWrapper
          initial
          viewport={{ margin: "20% 0% -10% 0%" }}
          variants
          custom={index}
          className={classNames(s.card, {
            [s.cardWithBorder]: cardsWithBorder.includes(index),
            [s.whiteCard]: whiteCards.includes(index),
          })}
          key={index}
        >
          <h3 className={s.card__title}>{useTwoLinesTitle(title)}</h3>
          <ul className={s.card__list}>
            <li className={s.card__item}>{text}</li>
            {text_1 && <li className={s.card__item}>{text_1}</li>}
          </ul>
        </MotionWrapper>
      ))}
    </div>
  );
}

export default KeyServicesComponent;
