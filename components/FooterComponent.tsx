import s from "./FooterComponent.module.scss";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";

import Logo from "@/images/Logo-brokers.svg";

import telegram from "@/images/footer/icon-telegram.svg";
import linkedin from "@/images/footer/icon-linkedin.svg";
import tiktok from "@/images/footer/icon-tiktok.svg";
import instagram from "@/images/footer/icon-instagram.svg";
import facebook from "@/images/footer/icon-facebook.svg";
import youtube from "@/images/footer/icon-youtube.svg";
import whatsapp from "@/images/footer/icon-whatsapp.svg";
import { useTranslations } from "next-intl";

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
  { name: "LinkedIn", href: "https://www.linkedin.com/" },
  { name: "TikTok", href: "https://www.tiktok.com/" },
  { name: "Instagram", href: "https://www.instagram.com/" },
  { name: "Facebook", href: "https://www.facebook.com/" },
  { name: "YouTube", href: "https://www.youtube.com/" },
  { name: "WhatsApp", href: "https://wa.me/" },
];

const FooterComponent = () => {
  const t = useTranslations("footer");

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
                  <Link className={s.footer__link} href="/">
                    Commodities Brokerage
                  </Link>
                </li>
                <li className={s.footer__item}>
                  <Link className={s.footer__link} href="/">
                    Freight Brokerage
                  </Link>
                </li>
              </ul>

              <ul className={s.footer__list}>
                <li className={s.footer__item}>
                  <Link className={s.footer__link} href="/">
                    Execution
                  </Link>
                </li>
                <li className={s.footer__item}>
                  <Link className={s.footer__link} href="/">
                    Export Consulting
                  </Link>
                </li>
              </ul>

              <ul className={s.footer__list}>
                <li className={s.footer__item}>
                  <Link className={s.footer__link} href="/">
                    About Us
                  </Link>
                </li>
                <li className={s.footer__item}>
                  <Link className={s.footer__link} href="/">
                    Our Vacancies
                  </Link>
                </li>
              </ul>

              <ul className={s.footer__list}>
                <li className={s.footer__item}>
                  <Link className={s.footer__link} href="/">
                    Our News
                  </Link>
                </li>
                <li className={s.footer__item}>
                  <Link className={s.footer__link} href="/">
                    Privacy Policy
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
