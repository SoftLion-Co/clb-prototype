import ContactUsSection from "@/app/sections/main_page/ContactUsSection";
import ProductPortfolioSection from "@/app/sections/commodity_brokerage_page/ProductPortfolioSection";
import HeroSection from "@/app/sections/commodity_brokerage_page/HeroSection";
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
