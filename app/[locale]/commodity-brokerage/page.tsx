import s from "./page.module.scss";
import ContactUsSection from "../../sections/main_page/ContactUsSection";
import PageTitleComponent from "@/components/PageTitleComponent";
import ProductPortfolioSection from "../../sections/commodity_brokerage_page/ProductPortfolioSection";
import OurCoreServices from "../../sections/export_consulting/OurCoreServices";
import HeroSection from "../../sections/commodity_brokerage_page/HeroSection";

const Commodity = () => {
  return (
    <div className={s.commodity}>
      <div className={s.container}>
        <PageTitleComponent
          title={"Commodity Brokerage"}
          text={"Your link between buyer and seller"}
          className={s.commodity__title}
        />
        <HeroSection />
        <ProductPortfolioSection />
        <OurCoreServices />
      </div>
      <ContactUsSection />
    </div>
  );
};

export default Commodity;
