import React from "react";
import s from "./MainTitleComponent.module.scss";
import classNames from "classnames";

interface MainTitleProps {
  title: string;
  className?: string;
}

const MainTitleComponent: React.FC<MainTitleProps> = ({ title, className }) => {
  return (
    <div className={classNames(s.main, className)}>
      <h2 className={s.main__title}>{title}</h2>
    </div>
  );
};

export default MainTitleComponent;
