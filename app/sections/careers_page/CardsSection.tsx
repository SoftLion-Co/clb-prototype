import s from "./CardsSection.module.scss";
import PageTitleComponent from "@/components/PageTitleComponent";
import ImageAndTextCardsComponent from "@/components/ImageAndTextCardsComponent";
import image1 from "@/images/careers/1.png";
import image2 from "@/images/careers/2.png";
import classNames from "classnames";
import { useTranslations } from "next-intl";

const CardsSection = () => {
  const t = useTranslations("careers");

  return (
    <section className={classNames(s.box, s.cards)}>
      <div className={s.background}>
        <div className={s.cards__title}>
          <PageTitleComponent
            title={t("careersTitle")}
            text={t("careersSubtitle")}
            className={s.careers__title}
          />
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
      </div>
    </section>
  );
};

export default CardsSection;
