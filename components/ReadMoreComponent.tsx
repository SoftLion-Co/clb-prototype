import s from "./ReadMoreComponent.module.scss";
import Link from "next/link";
import Image from "next/image";
import Arrow from "@/images/vectors/arrow.svg";
import { useTranslations } from "next-intl";

const ReadMoreComponent = (href: any) => {
  const  t  = useTranslations("components");

  return (
    <Link className={s.read__link} href={href.href}>
      {t("readMoreButton")}<Image className={s.read__arrow} src={Arrow} alt="Arrow" />
    </Link>
  );
};

export default ReadMoreComponent;
