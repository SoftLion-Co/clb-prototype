
import React from "react";
import s from "./OurAdvantagesCardComponent.module.scss";

type OurAdvantagesComponentProps = {
  advantages: { text: string };
};

const OurAdvantagesCardComponent: React.FC<OurAdvantagesComponentProps> = ({
  advantages,
}) => {
  return (
    <div className={s.advantages__content}>
      <p className={s.advantages__text}>{advantages.text}</p>
    </div>
  );
};

export default OurAdvantagesCardComponent;
