"use client";
import s from "./SocialLinksSection.module.scss";
import Image from "next/image";
import telegram from "@/images/footer/icon-telegram.svg";
import facebook from "@/images/footer/icon-facebook.svg";
import linkedin from "@/images/footer/icon-linkedin.svg";
import whatsapp from "@/images/footer/icon-whatsapp.svg";
import { useTranslations } from "next-intl";

import {
  TelegramShareButton,
  FacebookShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
} from "react-share";
import classNames from "classnames";

const SocialLinksSection = () => {
  const t = useTranslations("components");

  const currentPath = "clb.com" + window.location.pathname;

  return (
    <section className={s.links}>
      <p className={classNames(s.links__share, s.pDefault)}>{t("share")}</p>
      <div className={s.links__list}>
        <TelegramShareButton
          url={currentPath}
          title={"Hello, check this awesome article!"}
        >
          <Image src={telegram} alt={"telegram"} />
        </TelegramShareButton>
        <FacebookShareButton
          url={currentPath}
          title={"Hello, check this awesome article!"}
          hashtag="ChechThisOut"
        >
          <Image src={facebook} alt={"facebook"} />
        </FacebookShareButton>
        <LinkedinShareButton
          url={currentPath}
          title={"Hello, check this awesome article!"}
        >
          <Image src={linkedin} alt={"linkedin"} />
        </LinkedinShareButton>
        <WhatsappShareButton
          url={currentPath}
          title={"Hello, check this awesome article!"}
        >
          <Image src={whatsapp} alt={"whatsapp"} />
        </WhatsappShareButton>{" "}
      </div>
    </section>
  );
};

export default SocialLinksSection;
