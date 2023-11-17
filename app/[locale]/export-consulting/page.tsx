import s from "./page.module.scss";
import ContactUsSection from "../../sections/main_page/ContactUsSection";
import PageTitleComponent from "@/components/PageTitleComponent";
import ThreeCardsComponent from "@/components/ThreeCardsComponent";
import ProductPortfolioSection from "../../sections/export_consulting/ProductPortfolioSection";
import OurCoreServices from "../../sections/export_consulting/OurCoreServices";

const Export = () => {
  return (
    <div className={s.export}>
      <div className={s.container}>
        <PageTitleComponent
          title={"Export Сonsulting"}
          text={"Lorem ipsum dolor sit amet consectetur."}
          className={s.export__title}
        />
        <ThreeCardsComponent
          imagePosition={2}
          smallText={
            "Experienced in various contract terms like EXW, FCA, CPT, DAP, FOB, CNF, and CIF, we ensure seamless execution and adherence to all stipulations at every stage of the contractual process. Recognizing the pivotal role of legal expertise in contract management, we have an outsourced team of seasoned attorneys ready to assist when needed. This legal squad, armed with a deep understanding of international trade laws, guarantees the protection of our clients' rights and obligations fulfillment."
          }
          bigText={
            "With professional insights into GAFTA and FOSFA regulations, our experts regularly undergo training to stay abreast of the latest recommendations and shifts in the global trade landscape."
          }
          imageSrc="exportConsulting"
        />
        <ProductPortfolioSection />
        <OurCoreServices />
      </div>
      <ContactUsSection />
    </div>
  );
};

export default Export;
