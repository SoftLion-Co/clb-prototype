import classNames from "classnames";
import Image from "next/image";
import s from "./OurStoryComponent.module.scss";
import Picture from "@/images/home-hero-test.png";

interface StoryProps {
  className?: string;
}

const OurStoryComponent: React.FC<StoryProps> = ({ className }) => {
  const storyData = [
    {
      text: "Our mission is not just about connecting producers with end buyers but to make this process as efficient and comfortable for both parties as possible.",
    },
    {
      text: "We are CL Broker, your indispensable assistant in the agricultural trade, specializing in grains and oilseeds. Our mission is not just about connecting producers with end buyers but to make this process as efficient and comfortable for both parties as possible. For over eight years, we have been deeply involved in consultancy, helping even novice farmers understand the intricacies of international exports.",
    },
  ];

  return (
    <div className={classNames(className, s.story)}>
      {storyData.map((data, index) => (
        <div className={s.story__card} key={index}>
          <p className={classNames(s.story__text, s.pDefault)}>{data.text}</p>
        </div>
      ))}

      <Image className={s.story__picture} src={Picture} alt="Picture" />
    </div>
  );
};

export default OurStoryComponent;
