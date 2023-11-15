import s from "./OurStorySection.module.scss";
import MainTitleComponent from "@/components/MainTitleComponent";
import ThreeCardsComponent from "@/components/ThreeCardsComponent";
import OurStoryComponent from "@/components/about_us/OurStoryComponent";

const OurStorySection = () => {
  return (
    <section className={s.container}>
      <MainTitleComponent title="Our Story" className={s.story__title} />
      <ThreeCardsComponent
        imagePosition={3}
        imageSrc="ourStory"
        smallText={"We are CL Broker, your indispensable assistant in the agricultural trade, specializing in grains and oilseeds. Our mission is not just about connecting producers with end buyers but to make this process as efficient and comfortable for both parties as possible. For over eight years, we have been deeply involved in consultancy, helping even novice farmers understand the intricacies of international exports."}
          bigText={
            "Our mission is not just about connecting producers with end buyers but to make this process as efficient and comfortable for both parties as possible."
          }
        />
    </section>
  );
};

export default OurStorySection;
