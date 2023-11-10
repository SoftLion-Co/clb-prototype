import s from "./OurStorySection.module.scss";
import MainTitleComponent from "@/components/MainTitleComponent";
import OurStoryComponent from "@/components/about_us/OurStoryComponent";

const OurStorySection = () => {
  return (
    <section className={s.container}>
      <MainTitleComponent title="Our Story" className={s.story__title} />
      <OurStoryComponent />
    </section>
  );
};

export default OurStorySection;
