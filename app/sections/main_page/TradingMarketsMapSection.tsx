import s from "./TradingMarketsMapSection.module.scss";
import TradingMarketsMapComponent from "@/components/main_page/TradingMarketsMapComponent";

const TradingMarketsMapSection = () => {
  return (
    <section className={s.container}>
      <TradingMarketsMapComponent />
    </section>
  );
};

export default TradingMarketsMapSection;
