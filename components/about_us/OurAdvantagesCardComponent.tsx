import React from "react";
import s from "./OurAdvantagesCardComponent.module.scss";

type OurAdvantagesComponentProps = {
  advantages: {
    text: string;
  };
  backgroundColor: "blue" | "white" | string;
  imageSrc?: string;
};

const OurAdvantagesCardComponent: React.FC<OurAdvantagesComponentProps> = ({
  advantages,
  backgroundColor,
  imageSrc,
}) => {
  const cardStyles = {
    backgroundColor,
  };

  return (
    <div className={s.advantages__content} style={cardStyles}>
      {imageSrc && (
        <img src={imageSrc} alt="Advantage" className={s.advantages__image} />
      )}
      <p className={s.advantages__text}>{advantages.text}</p>
    </div>
  );
};

export default OurAdvantagesCardComponent;
