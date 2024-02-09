import s from "./CardsSection.module.scss";
import Image from "next/image";
import PageTitleComponent from "@/components/PageTitleComponent";
import ImageAndTextCardsComponent from "@/components/ImageAndTextCardsComponent";
import image1 from "@/images/careers/1.png";
import image2 from "@/images/careers/2.png";
import BrandElement from "@/images/vectors/brand-element-5.svg";
import classNames from "classnames";
import { useTranslations } from "next-intl";
import GetHeroComponent from "@/hooks/GetHeroComponent";

const CardsSection = () => {
  const t = useTranslations("careers");

  return (
    <section className={classNames(s.box, s.cards)}>
      <div className={s.background}>
        <div className={s.cards__title}>
          <GetHeroComponent path="careers-hero" className={s.careers__title} />
        </div>
        <div className={classNames(s.container, s.cards__container)}>
          <ImageAndTextCardsComponent
            text={t("cardsBigText")}
            image={image1.src}
            alt={"Image"}
            mobileTextCenter
          />
          <ImageAndTextCardsComponent
            rotate
            text={t("cardsSmallText")}
            image={image2.src}
            alt={"Image"}
            color="white"
            border
            smallFont
          />
        </div>
        <Image
          className={s.brand__element}
          src={BrandElement}
          alt="brand element"
        />
      </div>
    </section>
  );
};

export default CardsSection;
