"use client";
import React, { useState } from "react";
import classNames from "classnames";
import s from "./HeaderComponent.module.scss";
import MainButtonComponent from "./MainButtonComponent";
import Link from "next/link";
import Image from "next/image";

import UK from "@/images/flags/UK.svg";
import ES from "@/images/flags/ES.svg";
import DE from "@/images/flags/DE.svg";
import UA from "@/images/flags/UA.svg";
import RU from "@/images/flags/RU.svg";

const countries = [
  { code: "UK", name: "United Kingdom", flag: UK },
  { code: "ES", name: "Spain", flag: ES },
  { code: "DE", name: "Germany", flag: DE },
  { code: "UA", name: "Ukraine", flag: UA },
  { code: "RU", name: "Russia", flag: RU },
];

const servicesMenu = [
  { title: "Partners", link: "/partners" },
  { title: "Online trading", link: "/online_trading" },
  { title: "Our Blog", link: "/our_blog" },
  { title: "Contact Us", link: "/contact_us" },
];

const HeaderComponent = () => {
  const [isFlagDropdownOpen, setFlagDropdownOpen] = useState(false);
  const [isServicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isArrowRotated, setArrowRotated] = useState(false);

  const handleServicesMouseEnter = () => {
    setServicesMenuOpen(true);
    setArrowRotated(true);
  };

  const handleServicesMouseLeave = () => {
    setServicesMenuOpen(false);
    setArrowRotated(false);
  };

  const handleFlagMouseEnter = () => {
    setFlagDropdownOpen(true);
  };

  const handleFlagMouseLeave = () => {
    setFlagDropdownOpen(false);
  };

  const handleCountrySelection = (country: any) => {
    if (country !== selectedCountry) {
      setFlagDropdownOpen(false);
      setSelectedCountry(country);
    }
  };

  return (
    <header className={s.header}>
      <div className={s.header__box}>
        <div className={s.header__logo}>
          <Link href={"/"}>
            <p>LOGO</p>
          </Link>
        </div>

        <nav className={s.header__navigation}>
          <ul className={s.header__list}>
            <li className={s.header__item}>
              <Link href="/about_us">About us</Link>
            </li>
            <li
              className={classNames(s.header__item, {
                [s.active]: isServicesMenuOpen,
              })}
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              Services
              {isServicesMenuOpen && (
                <ul className={s.services__dropdownList}>
                  {servicesMenu.map((service) => (
                    <li key={service.title}>
                      <Link href={service.link}>{service.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
              <span
                className={classNames(s.header__arrow, {
                  [s.header__arrow_rotated]: isArrowRotated,
                })}
              >
                ⌵
              </span>
            </li>
            <li className={s.header__item}>
              <Link href="/blog">Blog</Link>
            </li>
            <li className={s.header__item}>
              <Link href="/careers">Careers</Link></li>
          </ul>
        </nav>

        <div className={s.header__contents}>
          <div
            className={s.flag__dropdown}
            onMouseEnter={handleFlagMouseEnter}
            onMouseLeave={handleFlagMouseLeave}
          >
            <div className={s.header__flag}>
              <Image
                className={classNames(
                  s.header__flag_image,
                  s.header__flag_custom
                )}
                src={selectedCountry.flag}
                alt={selectedCountry.name}
                width={30}
                height={20}
              />
              <span
                className={classNames(s.header__arrow, {
                  [s.header__arrow_rotated]: isFlagDropdownOpen,
                })}
              >
                ⌵
              </span>
            </div>
            {isFlagDropdownOpen && (
              <ul className={s.flag__dropdownList}>
                {countries.map((country) => {
                  if (country !== selectedCountry) {
                    return (
                      <li
                        key={country.code}
                        onClick={() => handleCountrySelection(country)}
                      >
                        <Image
                          className={s.header__flag_image}
                          src={country.flag}
                          alt={country.name}
                          width={30}
                          height={20}
                        />
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
            )}
          </div>

          <MainButtonComponent text="Get in touch" />
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
