import s from "./CardsSection.module.scss";
import PageTitleComponent from "@/components/PageTitleComponent";
import ImageAndTextCardsComponent from "@/components/ImageAndTextCardsComponent";
import Image from "@/images/home-hero-test.png";
import classNames from "classnames";
import { useTranslations } from "next-intl";

const CardsSection = () => {
  const t = useTranslations("careers");

  return (
    <section className={classNames(s.box, s.cards)}>
      <div className={s.background}>
        <div className={classNames(s.container, s.cards__container)}>
          <PageTitleComponent
            title={t("careersTitle")}
            text={t("careersSubtitle")}
            className={s.careers__title}
          />
          <ImageAndTextCardsComponent
            text={t("cardsBigText")}
            image={Image.src}
            alt={"Image"}
          />
          <ImageAndTextCardsComponent
            rotate={true}
            text={t("cardsSmallText")}
            image={Image.src}
            alt={"Image"}
            color="white"
            border
            fontSize={18}
            fontWeight={400}
          />
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
