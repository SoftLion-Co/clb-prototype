import s from "./page.module.scss";
import PageTitleComponent from "@/components/PageTitleComponent";
import OurStorySection from "@/app/sections/about_us_page/OurStorySection";
import OurAdvantagesSection from "@/app/sections/about_us_page/OurAdvantagesSection";
import ContactUsSection from "@/app/sections/main_page/ContactUsSection";
import OurTeamSection from "@/app/sections/about_us_page/OurTeamSection";

export default function AboutUs() {
  return (
    <div className={s.about}>
      <PageTitleComponent
        title="About Us"
        text="Commodities & Logistics Brokers is your reliable partner in the world of freight transport. We're trusted because we offer time-tested solutions and a professional approach to each client."
        className={s.about__title}
      />

      <OurStorySection />
      <OurAdvantagesSection />
      <OurTeamSection />
      <ContactUsSection cv={false}/>
    </div>
  );
}
