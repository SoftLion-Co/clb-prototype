import React from "react";
import s from "./MainButtonComponent.module.scss";

interface MainButtonProps {
  text: string;
}

const MainButtonComponent: React.FC<MainButtonProps> = ({ text }) => {
  return (
    <div className={s.main_button}>
      <a>{text}</a>
    </div>
  );
};

export default MainButtonComponent;
