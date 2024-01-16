import ContactUsSection from "../../sections/main_page/ContactUsSection";
import ProductPortfolioSection from "../../sections/commodity_brokerage_page/ProductPortfolioSection";
import HeroSection from "../../sections/commodity_brokerage_page/HeroSection";
import OurCoreServices from "@/app/sections/commodity_brokerage_page/OurCoreServices";
import { useTranslations } from "next-intl";

const Commodity = () => {
  const t = useTranslations("commodityBrokerage");

  return (
    <div>
      <HeroSection />
      <ProductPortfolioSection />
      <OurCoreServices />
      <ContactUsSection />
    </div>
  );
};

export default Commodity;
