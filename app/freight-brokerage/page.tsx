import s from "./page.module.scss";
import ContactUsSection from "../sections/main_page/ContactUsSection";
import PageTitleComponent from "@/components/PageTitleComponent";
import ThreeCardsComponent from "@/components/ThreeCardsComponent";
import ProductPortfolioSection from "../sections/freight_brokerage/ProductPortfolioSection";

const Freight = () => {
  return (
    <div className={s.freight}>
      <div className={s.container}>
        <PageTitleComponent
          title={"Freight Brokerage"}
          text={"Lorem ipsum dolor sit amet consectetur."}
          className={s.freight__title}
        />
        <ThreeCardsComponent
          imagePosition={1}
          smallText={
            "Lorem ipsum dolor sit amet consectetur. Facilisi consectetur a volutpat odio sit. A senectus ut eget molestie ac commodo feugiat. Lorem viverra nibh suspendisse egestas lacus semper vulputate tincidunt tempus. Id tincidunt faucibus et et pretium tristique habitant eget consequat. Consectetur arcu lectus semper euismod. Blandit quam nulla accumsan ac amet feugiat consectetur mauris. Est sed in donec enim vel condimentum netus cursus pharetra."
          }
          bigText={
            "Commodities & Logistics Brokers is your reliable partner in the world of freight transport. We're trusted because we offer time-tested solutions and a professional approach to each client"
          }
        />
        <ProductPortfolioSection />
      </div>
      <ContactUsSection />
    </div>
  );
};

export default Freight;
