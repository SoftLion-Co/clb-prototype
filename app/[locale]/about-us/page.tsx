import s from "./page.module.scss";
import PageTitleComponent from "@/components/PageTitleComponent";
import OurStorySection from "@/app/sections/about_us_page/OurStorySection";
import OurAdvantagesSection from "@/app/sections/about_us_page/OurAdvantagesSection";
import ContactUsSection from "@/app/sections/main_page/ContactUsSection";
import OurTeamSection from "@/app/sections/about_us_page/OurTeamSection";
import { useTranslations } from "next-intl";
import useLocale from "@/hooks/useLocale";

export default function AboutUs() {
  const t = useTranslations("aboutUs")

  const locale = useLocale();

  return (
    <div className={s.about}>
      <PageTitleComponent
        title={t("aboutUsTitle")}
        text={t("aboutUsText")}
        className={s.about__title}
      />
      <OurStorySection />
      <OurTeamSection />
      <OurAdvantagesSection />
      <ContactUsSection locale={locale}/>
    </div>
  );
}
