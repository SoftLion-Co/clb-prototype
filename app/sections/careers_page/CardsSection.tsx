import s from "./CardsSection.module.scss";
import ImageAndTextCardsComponent from "@/components/ImageAndTextCardsComponent";
import Image from "@/images/home-hero-test.png";
import { useTranslations } from "next-intl";

const CardsSection = () => {
  const t = useTranslations("careers");

  return (
    <section className={s.cards}>
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
      />
    </section>
  );
};

export default CardsSection;
