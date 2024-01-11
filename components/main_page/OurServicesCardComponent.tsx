import classNames from "classnames";
import s from "./OurServicesCardComponent.module.scss";
import ReadMoreComponent from "@/components/ReadMoreComponent";
import { useTranslations } from "next-intl";

import Image from "next/image";

interface OurServicesCardProps {
  title: string;
  text: string;
  image: string | undefined;
  className?: string;
}

const OurServicesCardComponent: React.FC<OurServicesCardProps> = ({
  title,
  text,
  image,
  className,
}) => {
  const t = useTranslations("homePage");

  return (
    <div className={classNames(s.card__container, className)}>
      <Image className={s.card__image} src={image!} alt="Image" />
      <h3 className={s.card__title}>{title}</h3>
      <div className={s.card__content}>
        <p className={s.card__text}>{text}</p>
        <ReadMoreComponent href="/" />
      </div>
    </div>
  );
};

export default OurServicesCardComponent;
