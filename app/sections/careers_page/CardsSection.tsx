import s from "./CardsSection.module.scss";
import ImageAndTextCardsComponent from "@/components/ImageAndTextCardsComponent";
import Image from "@/images/home-hero-test.png";

const CardsSection = () => {
  return (
    <section className={s.cards}>
      <ImageAndTextCardsComponent
        text={
          "We are rapidly expanding and in search of new talents to broaden our team and spread our mission further."
        }
        image={Image.src}
        alt={"Image"}
      />
      <ImageAndTextCardsComponent
        rotate={true}
        text={
          "While we frequently post specific job listings, if you believe you have a unique skill set and are poised to make a contribution, we eagerly await your application. We are on the lookout for brokers with exemplary experience in trading, particularly within the realms of cereals, oilseeds, and mineral fertilizers. Our execution managers possess an in-depth understanding of international economic contracts. We seek candidates with fluent English proficiency, as well as knowledge of other foreign languages. Join us and become a part of the Commodities Logistics  Brokers team — leaders in our field!"
        }
        image={Image.src}
        alt={"Image"}
      />
    </section>
  );
};

export default CardsSection;
