import React from "react";
import s from "./MainButtonComponent.module.scss";
import classNames from "classnames";

interface MainButtonProps {
  text: string;
  className?: string;
}

const MainButtonComponent: React.FC<MainButtonProps> = ({
  text,
  className,
}) => {
  return (
    <div className={classNames(s.main_button, className)}>
      <a>{text}</a>
    </div>
  );
};

export default MainButtonComponent;
