import classNames from "classnames";
import s from "./PageTitleComponent.module.scss";
import React, { FC } from "react";

interface MainTitleProps {
  title: string;
  text?: string;
  className?: string;
}

const PageTitleComponent: FC<MainTitleProps> = ({ title, text, className }) => {
  return (
    <div className={classNames(className)}>
      <div className={classNames(s.page)}>
        <h1 className={s.page__title}>{title}</h1>
        {text && <p className={s.page__text}>{text}</p>}
      </div>
    </div>
  );
};

export default PageTitleComponent;
