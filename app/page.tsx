import s from "./page.module.scss";
import HeroSection from "./sections/HeroSection";
import OurServicesSection from "./sections/main_page/OurServicesSection";
import ContactUsSection from "./sections/main_page/ContactUsSection";
import BlogCardSection from "./sections/main_page/BlogCardSection";
import PageTitleComponent from "@/components/PageTitleComponent";
export default function Home() {
  return (
    <div className={s.home}>
      <PageTitleComponent
        title="about us"
        text="commodities & Logistics Brokers is your reliable partner in the world of freight transport. We're trusted because we offer time-tested solutions and a professional approach to each client."
      />
      <HeroSection />
      <OurServicesSection />
      <BlogCardSection />
      <ContactUsSection />
    </div>
  );
}
