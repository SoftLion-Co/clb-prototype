import s from "./OurStorySection.module.scss";
import MainTitleComponent from "@/components/MainTitleComponent";
import ThreeCardsComponent from "@/components/ThreeCardsComponent";
import { useTranslations } from "next-intl";

const OurStorySection = () => {
  const t = useTranslations("aboutUs.ourStory");

  return (
    <section className={s.container}>
      <MainTitleComponent title={t("heading")} className={s.story__title} />
      <ThreeCardsComponent
        imagePosition={3}
        imageSrc="ourStory"
        smallText={t("smallCard")}
        bigText={t("bigCard")}
      />
    </section>
  );
};

export default OurStorySection;
