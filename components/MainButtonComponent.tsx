import React from "react";
import s from "./MainButtonComponent.module.scss";

interface MainButtonProps {
  text: string;
}

const MainButtonComponent: React.FC<MainButtonProps> = ({ text }) => {
  return (
    <div>
      <a className={s.main_button}>{text}</a>
    </div>
  );
};

export default MainButtonComponent;
