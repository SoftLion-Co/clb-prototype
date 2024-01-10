import React from "react";
import s from "./OurAdvantagesCardComponent.module.scss";

type OurAdvantagesComponentProps = {
  advantages: {
    text: string;
  };

  colorVariant: "blue" | "white";
  imageSrc?: string;
};

const colorVariants = {
  blue: "#ECF1F6",
  white: "#FFFFFF",
};

const OurAdvantagesCardComponent: React.FC<OurAdvantagesComponentProps> = ({
  advantages,
  colorVariant,
  imageSrc,
}) => {
  const cardStyles = {
    backgroundColor: colorVariants[colorVariant],
    border: colorVariant === "white" ? "2px solid #2A4563" : "none",
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
