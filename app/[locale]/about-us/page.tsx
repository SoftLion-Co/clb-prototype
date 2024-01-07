import s from "./page.module.scss";
import PageTitleComponent from "@/components/PageTitleComponent";
import OurStorySection from "@/app/sections/about_us_page/OurStorySection";
import OurAdvantagesSection from "@/app/sections/about_us_page/OurAdvantagesSection";
import ContactUsSection from "@/app/sections/main_page/ContactUsSection";
import OurTeamSection from "@/app/sections/about_us_page/OurTeamSection";
import { useTranslations } from "next-intl";
import classNames from "classnames";

export default function AboutUs() {
  const t = useTranslations("aboutUs");

  return (
    <div className={s.about}>
      <div className={s.box}>
        <PageTitleComponent
          title={t("aboutUsTitle")}
          text={t("aboutUsText")}
          className={s.background}
        />
      </div>

      <OurStorySection />
      <OurTeamSection />
      <OurAdvantagesSection />
      <ContactUsSection />
    </div>
  );
}
