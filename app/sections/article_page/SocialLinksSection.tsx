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
import { motion } from "framer-motion";

const SocialLinksSection = () => {
  const t = useTranslations("components");

  const currentPath = "clb.com" + window.location.pathname;

  const textAnimation = {
    hidden: {
      y: 100,
      opacity: 0,
      delay: 1,
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      delay: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  return (
    <motion.section
      className={s.links}
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ margin: "20% 0% -10% 0%" }}
      variants={textAnimation}
    >
      <p className={s.links__share}>{t("share")}</p>
      <div className={s.links__list}>
        <TelegramShareButton
          url={currentPath}
          title={"Hello, check this awesome article!"}
        >
          <Image src={telegram} alt={"telegram"} className={s.links__icon} />
        </TelegramShareButton>
        <FacebookShareButton
          url={currentPath}
          title={"Hello, check this awesome article!"}
          hashtag="ChechThisOut"
        >
          <Image src={facebook} alt={"facebook"} className={s.links__icon} />
        </FacebookShareButton>
        <LinkedinShareButton
          url={currentPath}
          title={"Hello, check this awesome article!"}
        >
          <Image src={linkedin} alt={"linkedin"} className={s.links__icon} />
        </LinkedinShareButton>
        <WhatsappShareButton
          url={currentPath}
          title={"Hello, check this awesome article!"}
        >
          <Image src={whatsapp} alt={"whatsapp"} className={s.links__icon} />
        </WhatsappShareButton>{" "}
      </div>
    </motion.section>
  );
};

export default SocialLinksSection;
