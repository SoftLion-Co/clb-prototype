import classNames from "classnames";
import s from "./PageTitleComponent.module.scss";

interface MainTitleProps {
  title: string;
  text?: string;
  className?: string;
}

const PageTitleComponent: React.FC<MainTitleProps> = ({
  title,
  text,
  className,
}) => {
  return (
    <div className={classNames(s.page, className)}>
      <h1 className={s.page__title}>{title}</h1>
      <p className={s.page__text}>{text}</p>
    </div>
  );
};

export default PageTitleComponent;
