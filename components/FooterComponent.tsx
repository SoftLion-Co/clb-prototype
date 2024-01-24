"use client";

import s from "./FooterComponent.module.scss";
import Link from "next/link";
import Image from "next/image";

import Logo from "@/images/Logo-brokers.svg";

import telegram from "@/images/footer/icon-telegram.svg";
import linkedin from "@/images/footer/icon-linkedin.svg";
import tiktok from "@/images/footer/icon-tiktok.svg";
import instagram from "@/images/footer/icon-instagram.svg";
import facebook from "@/images/footer/icon-facebook.svg";
import youtube from "@/images/footer/icon-youtube.svg";
import whatsapp from "@/images/footer/icon-whatsapp.svg";
import { useTranslations } from "next-intl";
import useLocale from "@/hooks/useLocale";
import classNames from "classnames";
import { motion } from "framer-motion";

const socialMediaIcons: { [key: string]: any } = {
  telegram,
  linkedin,
  tiktok,
  instagram,
  facebook,
  youtube,
  whatsapp,
};

const socialMediaLinks = [
  { name: "Telegram", href: "https://t.me/" },
  { name: "TikTok", href: "https://www.tiktok.com/" },
  { name: "Instagram", href: "https://www.instagram.com/" },
  { name: "Facebook", href: "https://www.facebook.com/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/" },
  { name: "YouTube", href: "https://www.youtube.com/" },
  { name: "WhatsApp", href: "https://wa.me/" },
];

const FooterComponent = () => {
  const t = useTranslations("footer");
  const local = useLocale();

  const textAnimation = {
    hidden: {
      y: 50,
      opacity: 0,
      delay: 1,
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      delay: 1,
      transition: { delay: custom * 0.1 },
    }),
  };

  return (
    <footer className={s.box}>
      <div className={s.footer}>
        <motion.div
          className={s.footer__container}
          initial={"hidden"}
          whileInView={"visible"}
          variants={textAnimation}
          viewport={{ margin: "20% 0% -20% 0%" }}
        >
          <div className={s.footer__content}>
            <Link href="/">
              <Image src={Logo} alt="Logo" />
            </Link>

            <ul className={s.footer__social}>
              {socialMediaLinks.map((socialMedia, index) => (
                <li key={index}>
                  <Link
                    className={s.aDefault}
                    href={socialMedia.href}
                    target="_blank"
                  >
                    <Image
                      className={s.footer__icon}
                      src={socialMediaIcons[socialMedia.name.toLowerCase()]}
                      alt={socialMedia.name}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={s.footer__box}>
            <div className={s.footer__lists}>
              <ul className={s.footer__list}>
                <motion.li
                  className={s.footer__item}
                  variants={textAnimation}
                  custom={1}
                >
                  <Link
                    className={s.footer__link}
                    href={`${local}/commodity-brokerage`}
                  >
                    Commodities Brokerage
                  </Link>
                </motion.li>
                <motion.li
                  className={s.footer__item}
                  variants={textAnimation}
                  custom={2}
                >
                  <Link
                    className={s.footer__link}
                    href={`${local}/freight-brokerage`}
                  >
                    Freight Brokerage
                  </Link>
                </motion.li>
              </ul>

              <ul className={classNames(s.footer__list, s.footer__list_gap)}>
                <motion.li
                  className={s.footer__item}
                  variants={textAnimation}
                  custom={3}
                >
                  <Link className={s.footer__link} href={`${local}/execution`}>
                    Execution
                  </Link>
                </motion.li>
                <motion.li
                  className={s.footer__item}
                  variants={textAnimation}
                  custom={4}
                >
                  <Link
                    className={s.footer__link}
                    href={`${local}/export-consulting`}
                  >
                    Export Consulting
                  </Link>
                </motion.li>
              </ul>

              <ul className={s.footer__list}>
                <motion.li
                  className={s.footer__item}
                  variants={textAnimation}
                  custom={5}
                >
                  <Link className={s.footer__link} href={`${local}/about-us`}>
                    About Us
                  </Link>
                </motion.li>
                <motion.li
                  className={s.footer__item}
                  variants={textAnimation}
                  custom={6}
                >
                  <Link className={s.footer__link} href="/">
                    Our Vacancies
                  </Link>
                </motion.li>
              </ul>

              <ul className={s.footer__list}>
                <motion.li
                  className={s.footer__item}
                  variants={textAnimation}
                  custom={7}
                >
                  <Link className={s.footer__link} href={`${local}/blog`}>
                    Our News
                  </Link>
                </motion.li>
                <motion.li
                  className={s.footer__item}
                  variants={textAnimation}
                  custom={8}
                >
                  <Link className={s.footer__link} href="/">
                    Privacy Policy
                  </Link>
                </motion.li>
              </ul>
            </div>

            <motion.p
              className={s.footer__copyright}
              variants={textAnimation}
              custom={9}
            >
              © 2023 Commodities & Logistics Brokers
            </motion.p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterComponent;
