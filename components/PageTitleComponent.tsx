import classNames from "classnames";
import s from "./PageTitleComponent.module.scss";
import React, { FC } from "react";
import MotionWrapper from "@/hooks/MotionWrapper";

interface MainTitleProps {
  title: string;
  text?: string;
  className?: string;
}

const PageTitleComponent: FC<MainTitleProps> = ({ title, text, className }) => {
  return (
    <MotionWrapper className={classNames(s.page, className)} initial viewport>
      <MotionWrapper tag="h1" className={s.page__title} variants custom={0.2}>
        {title}
      </MotionWrapper>
      {text && (
        <MotionWrapper tag="p" className={s.page__text} variants custom={1}>
          {text}
        </MotionWrapper>
      )}
    </MotionWrapper>
  );
};

export default PageTitleComponent;
