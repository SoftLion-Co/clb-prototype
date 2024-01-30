"use client";

import s from "./FooterComponent.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

import Logo from "@/images/Logo-brokers.svg";

import telegram from "@/images/footer/icon-telegram.svg";
import linkedin from "@/images/footer/icon-linkedin.svg";
import tiktok from "@/images/footer/icon-tiktok.svg";
import instagram from "@/images/footer/icon-instagram.svg";
import facebook from "@/images/footer/icon-facebook.svg";
import youtube from "@/images/footer/icon-youtube.svg";
import whatsapp from "@/images/footer/icon-whatsapp.svg";
import { useTranslations } from "next-intl";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
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

const getOffset = () => {
  if (typeof window !== "undefined") {
    const screenWidth = window.innerWidth;
    let offset = -70;

    if (screenWidth <= 767.98) {
      offset = -70;
    } else if (screenWidth >= 768 && screenWidth <= 1279.98) {
      offset = -70;
    } else if (screenWidth >= 1280 && screenWidth <= 1920) {
      offset = -124;
    } else if (screenWidth > 1920) {
      offset = -124;
    }

    return offset;
  }

  return -70;
};

const FooterComponent = () => {
  const t = useTranslations("footer");
  const locale = useLocale();
  const [offset, setOffset] = useState(getOffset());

  useEffect(() => {
    const handleResize = () => {
      setOffset(getOffset());
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

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
                    href={`/${locale}/commodity-brokerage`}
                  >
                    {t("commoditiesBrokerage")}
                  </Link>
                </li>
                <li className={s.footer__item}>
                  <Link
                    className={s.footer__link}
                    href={`/${locale}/freight-brokerage`}
                  >
                    {t("freightBrokerage")}
                  </Link>
                </li>
              </ul>

              <ul className={classNames(s.footer__list, s.footer__list_gap)}>
                <li className={s.footer__item}>
                  <Link
                    className={s.footer__link}
                    href={`/${locale}/execution`}
                  >
                    {t("execution")}
                  </Link>
                </li>
                <li className={s.footer__item}>
                  <Link
                    className={s.footer__link}
                    href={`/${locale}/export-consulting`}
                  >
                    {t("exportConsulting")}
                  </Link>
                </li>
              </ul>

              <ul className={s.footer__list}>
                <li className={s.footer__item}>
                  <Link className={s.footer__link} href={`/${locale}/about-us`}>
                    {t("aboutUs")}
                  </Link>
                </li>
                <li className={classNames(s.footer__item, s.anchor__link)}>
                  <ScrollLink
                    to="ourVacancies"
                    spy={true}
                    smooth={true}
                    offset={offset}
                    duration={500}
                    className={s.footer__link}
                  >
                    <Link href={`/${locale}/careers#ourVacancies`}>
                      {t("ourVacancies")}
                    </Link>
                  </ScrollLink>
                </li>
              </ul>

              <ul className={s.footer__list}>
                <li className={s.footer__item}>
                  <Link className={s.footer__link} href={`/${locale}/blog`}>
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
