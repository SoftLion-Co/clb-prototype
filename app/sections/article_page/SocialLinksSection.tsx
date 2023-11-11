"use client";
import classNames from "classnames";
import s from "./SocialLinksSection.module.scss";
import Image from "next/image";
import Link from "next/link";

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
  { name: "TikTok", href: "https://www.tiktok.com/" },
  { name: "Instagram", href: "https://www.instagram.com/" },
  { name: "Facebook", href: "https://www.facebook.com/" },
  { name: "WhatsApp", href: "https://wa.me/" },
];

const SocialLinksSection = () => {
  return (
    <section className={s.links}>
      <p className={s.pDefault}>Share:</p>
      <ul className={s.links__list}>
        {socialMediaLinks.map((socialMedia, index) => (
          <li key={index}>
            <Link
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
    </section>
  );
};

export default SocialLinksSection;
