import s from "./page.module.scss";
import HeroSection from "./sections/HeroSection";
import ContactUsSection from "./sections/main_page/ContactUsSection";
import BlogCardSection from "./sections/main_page/BlogCardSection";

export default function Home() {
  return (
    <div className={s.home}>
      <HeroSection />
      <BlogCardSection />
      <ContactUsSection />
    </div>
  );
}
