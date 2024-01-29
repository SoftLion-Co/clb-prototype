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

  return (
    <footer className={s.box}>
      <div className={s.footer}>
        <div className={s.footer__container}>
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
                <li className={s.footer__item}>
                  <Link
                    className={s.footer__link}
                    href={`/${local}/commodity-brokerage`}
                  >
                    {t("commoditiesBrokerage")}
                  </Link>
                </li>
                <li className={s.footer__item}>
                  <Link
                    className={s.footer__link}
                    href={`/${local}/freight-brokerage`}
                  >
                    {t("freightBrokerage")}
                  </Link>
                </li>
              </ul>

              <ul className={classNames(s.footer__list, s.footer__list_gap)}>
                <li className={s.footer__item}>
                  <Link className={s.footer__link} href={`/${local}/execution`}>
                    {t("execution")}
                  </Link>
                </li>
                <li className={s.footer__item}>
                  <Link
                    className={s.footer__link}
                    href={`/${local}/export-consulting`}
                  >
                    {t("exportConsulting")}
                  </Link>
                </li>
              </ul>

              <ul className={s.footer__list}>
                <li className={s.footer__item}>
                  <Link className={s.footer__link} href={`/${local}/about-us`}>
                    {t("aboutUs")}
                  </Link>
                </li>
                <li className={classNames(s.footer__item, s.anchor__link)}>
                  <Link
                    className={s.footer__link}
                    href={`/${local}/careers#vacancies`}
                  >
                    {t("ourVacancies")}
                  </Link>
                </li>
              </ul>

              <ul className={s.footer__list}>
                <li className={s.footer__item}>
                  <Link className={s.footer__link} href={`/${local}/blog`}>
                    {t("ourNews")}
                  </Link>
                </li>
                <li className={s.footer__item}>
                  <Link className={s.footer__link} href="/">
                    {t("privacyPolicy")}
                  </Link>
                </li>
              </ul>
            </div>

            <p className={s.footer__copyright}>
              © 2023 Commodities & Logistics Brokers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
