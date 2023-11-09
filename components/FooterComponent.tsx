import s from "./FooterComponent.module.scss";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";

import telegram from "@/images/footer/icon-telegram.svg";
import linkedin from "@/images/footer/icon-linkedin.svg";
import tiktok from "@/images/footer/icon-tiktok.svg";
import instagram from "@/images/footer/icon-instagram.svg";
import facebook from "@/images/footer/icon-facebook.svg";
import youtube from "@/images/footer/icon-youtube.svg";
import whatsapp from "@/images/footer/icon-whatsapp.svg";

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
  return (
    <footer className={s.footer}>
      <div className={classNames(s.container, s.footer__container)}>
        <div className={s.footer__content}>
          <div className={s.footer__logo}>
            <Link href="">LOGO</Link>
          </div>

          <ul className={s.footer__info}>
            <li>
              <Link className={s.aDefault} href="">
                About Us
              </Link>
            </li>
            <li>
              <Link className={s.aDefault} href="">
                Privacy policy
              </Link>
            </li>
          </ul>

          <ul className={s.footer__list}>
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
          <div>
            <p className={classNames(s.pDefault, s.footer__title)}>
              Our Services
            </p>
            <ul className={s.footer__list_services}>
              <li className={s.pDefault}>
                <Link href="">Commodities Brokerage</Link>
              </li>
              <li className={s.pDefault}>
                <Link href="">Freight Brokerage</Link>
              </li>
              <li className={s.pDefault}>
                <Link href="">Execution</Link>
              </li>
              <li className={s.pDefault}>
                <Link href="">Export Consulting</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className={classNames(s.pDefault, s.footer__title)}>Careers</p>
            <ul className={s.footer__list_services}>
              <li className={s.pDefault}>
                <Link href="">Our Vacancies</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className={classNames(s.pDefault, s.footer__title)}>Media</p>
            <ul className={s.footer__list_services}>
              <li className={s.pDefault}>
                <Link href="">Our News</Link>
              </li>
            </ul>
          </div>
        </div>

        <p className={s.footer__copyright}>
          © 2023 Commodities & Logistics Brokers
        </p>
      </div>
    </footer>
  );
};

export default FooterComponent;
