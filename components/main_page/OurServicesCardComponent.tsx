import s from "./OurServicesCardComponent.module.scss";
import Image from "next/image";
import Arrow from "@/images/vectors/arrow.svg";
import ReadMoreComponent from "@/components/ReadMoreComponent";

const OurServicesCardComponent = () => {
  // В serviceData потрібно буде додати ще один параметр, Read more повинен вести нас на сторінку відповідної карточки
  const serviceData = [
    {
      title: "Commodity brokerage",
      text: "Lorem ipsum dolor sit amet consectetur. In ac vitae dignissim placerat. Feugiat sed amet ac massa arcu tristique adipiscing pellentesque elementum.",
    },
    {
      title: "Freight brokerage",
      text: "Lorem ipsum dolor sit amet consectetur. In ac vitae dignissim placerat. Feugiat sed amet ac massa arcu tristique adipiscing pellentesque elementum.",
    },
    {
      title: "Execution",
      text: "Lorem ipsum dolor sit amet consectetur. In ac vitae dignissim placerat. Feugiat sed amet ac massa arcu tristique adipiscing pellentesque elementum.",
    },
    {
      title: "Export consulting",
      text: "Lorem ipsum dolor sit amet consectetur. In ac vitae dignissim placerat. Feugiat sed amet ac massa arcu tristique adipiscing pellentesque elementum.",
    },
  ];

  return (
    <div className={s.card}>
      {serviceData.map((testObject, index) => (
        <div className={s.card__container} key={index}>
          <h3 className={s.card__title}>{testObject.title}</h3>
          <div className={s.card__content}>
            <p className={s.card__text}>{testObject.text}</p>
            <div className={s.card__box}>
              <ReadMoreComponent href="/" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurServicesCardComponent;
