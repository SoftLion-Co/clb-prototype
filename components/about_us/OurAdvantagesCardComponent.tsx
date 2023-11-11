import React from "react";
import s from "./OurAdvantagesCardComponent.module.scss";

type OurAdvantagesComponentProps = {
  advantages: { text: string }[];
};

const OurAdvantagesCardComponent: React.FC<OurAdvantagesComponentProps> = ({
  advantages,
}) => {
  return (
    <div className={s.advantages}>
      {advantages.map((advantage, index) => (
        <div className={s.advantages__content}>
          <p key={index} className={s.advantages__text}>
            {advantage.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default OurAdvantagesCardComponent;
