"use client";
import React, { useEffect, useState } from "react";
import { Link } from "../navigation";
import Image from "next/image";
import Modal from "react-modal";
import classNames from "classnames";
import s from "./HeaderComponent.module.scss";
import Close from "@/images/vectors/close.svg";
import Burger from "@/images/vectors/burger-menu.svg";
import ArrowMenu from "@/images/vectors/arrow-menu.svg";
import MainButtonComponent from "./MainButtonComponent";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";


import UK from "@/images/flags/UK.svg";
import ES from "@/images/flags/ES.svg";
import DE from "@/images/flags/DE.svg";
import UA from "@/images/flags/UA.svg";
import RU from "@/images/flags/RU.svg";

type Country = {
  code: string;
  name: string;
  flag: string;
  locale: "en" | "es" | "de" | "ua" | "ru" | undefined;
};

const countriesMenu: Country[] = [
  { code: "UK", name: "United Kingdom", flag: UK, locale: "en" },
  { code: "ES", name: "Spain", flag: ES, locale: "es" },
  { code: "DE", name: "Germany", flag: DE, locale: "de" },
  { code: "UA", name: "Ukraine", flag: UA, locale: "ua" },
  { code: "RU", name: "Russia", flag: RU, locale: "ru" },
];

const menuItems = [
  { title: "aboutUs", type: "aboutUs", link: "/about-us" },
  { title: "services", type: "services", link: "" },
  { title: "blog", type: "link", link: "/blog" },
  { title: "careers", type: "link", link: "/careers" },
];

const servicesMenu = [
  { title: "partners", link: "/partners" },
  { title: "onlineTrading", link: "/online_trading" },
  { title: "ourBlog", link: "/our_blog" },
  { title: "contactUs", link: "/contact_us" },
];

const HeaderComponent = () => {
  const t = useTranslations("header")
  const t1 = useTranslations("servicesMenu")

  const pathname = usePathname();
  const pathWithoutLanguage = pathname.replace(/^\/[a-zA-Z]{2}(\/)?/, '/');
  const initialLocale = pathname.split('/')[1];

  const defaultCountry = countriesMenu[4];
  const initialCountry = countriesMenu.find(country => country.locale === initialLocale);

  const [selectedCountry, setSelectedCountry] = useState(
    initialCountry || defaultCountry
  );

  useEffect(() => {
    const locale = pathname.split('/')[1];
    const matchingCountry = countriesMenu.find(country => country.locale === locale);

    if (matchingCountry) {
      setSelectedCountry(matchingCountry);
    } else {
      setSelectedCountry(defaultCountry);
    }
  }, [pathname, defaultCountry]);

  const [isFlagDropdownOpen, setFlagDropdownOpen] = useState(false);
  const [isServicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [isArrowRotated, setArrowRotated] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  const handleDropdownMouseEnter = (dropdownType: any) => {
    switch (dropdownType) {
      case "flag":
        setFlagDropdownOpen(true);
        setServicesMenuOpen(false);
        break;
      case "aboutUs":
        setServicesMenuOpen(false);
        break;
      case "services":
        setServicesMenuOpen(true);
        break;
      default:
        break;
    }
    setArrowRotated(true);
  };

  const handleDropdownMouseLeave = () => {
    setFlagDropdownOpen(false);
    setServicesMenuOpen(false);
    setArrowRotated(false);
  };

  const handleCountrySelection = (country: any) => {
    if (country !== selectedCountry) {
      setFlagDropdownOpen(false);
      setSelectedCountry(country);
    }
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    if (window.innerWidth > 1280) {
      closeModal();
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const openModal = () => {
    setModalOpen(true);
    if (windowWidth <= 1280) {
      document.body.style.overflow = "hidden";
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const NavigationContent = (
    <ul className={s.header__list}>
      {menuItems.map((item) => (
        <li
          key={item.title}
          className={s.header__item}
          onMouseEnter={() => handleDropdownMouseEnter(item.type)}
          onMouseLeave={handleDropdownMouseLeave}
        >
          {item.type === "link" ? (
            <Link href={item.link}>{t(item.title)}</Link>
          ) : (
            <>
              <Link href={item.link}>{t(item.title)}</Link>
              {item.type === "services" && isServicesMenuOpen && (
                <ul className={s.header__dropdown}>
                  {servicesMenu.map((subItem) => (
                    <li key={subItem.title}>
                      <Link href={subItem.link}>{t1(subItem.title)}</Link>
                    </li>
                  ))}
                </ul>
              )}
              {item.type === "services" && (
                <span
                  className={classNames(s.arrow, {
                    [s.arrow__rotated]: isArrowRotated && isServicesMenuOpen,
                  })}
                >
                  <Image src={ArrowMenu} alt="⌵" />
                </span>
              )}
            </>
          )}
        </li>
      ))}
    </ul>
  );

  const ModalContent = (
    <>
      {NavigationContent}
      <MainButtonComponent className={s.header__touch} text="Get in touch" />
    </>
  );

  return (
    <header className={s.header}>
      <div className={s.header__box}>
        <div className={s.header__logo}>
          <Link href={"/"}>
            <p>LOGO</p>
          </Link>
        </div>

        <nav className={s.header__navigation}>{NavigationContent}</nav>

        <div className={s.header__contents}>
          <div
            className={s.flag__dropdown}
            onMouseEnter={() => handleDropdownMouseEnter("flag")}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <div className={s.flag}>
              <Link href={""}>
                <Image
                  className={classNames(s.flag__image, s.flag__custom)}
                  src={selectedCountry.flag}
                  alt={selectedCountry.name}
                  width={30}
                  height={20}
                />
              </Link>
              <span
                className={classNames(s.arrow, {
                  [s.arrow__rotated]: isFlagDropdownOpen,
                })}
              >
                <Image src={ArrowMenu} alt="⌵" />
              </span>
            </div>
            {isFlagDropdownOpen && (
              <ul className={s.flag__list}>
                {countriesMenu.map((country) => {
                  if (country !== selectedCountry) {
                    return (
                      <li
                        key={country.code}
                        onClick={() => handleCountrySelection(country)}
                      >
                        <Link href={`/${pathWithoutLanguage}`} locale={country.locale}>
                          <Image
                            className={s.flag__image}
                            src={country.flag}
                            alt={country.name}
                            width={30}
                            height={20}
                          />
                        </Link>
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
            )}
          </div>

          <MainButtonComponent
            className={s.header__touch}
            text={t("getInTouch")}
          />

          <button
            className={s.header__button}
            type="button"
            onClick={openModal}
          >
            <Image src={Burger} alt="Burer" width={30} height={30} />
          </button>
        </div>
      </div>

      <Modal
        className={classNames(s.modal, s.container)}
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <div className={s.modal__container}>{ModalContent}</div>
        <button className={s.modal__close} onClick={closeModal}>
          <Image src={Close} alt="close" width={20} height={20} />
        </button>
      </Modal>
    </header>
  );
};

export default HeaderComponent;
