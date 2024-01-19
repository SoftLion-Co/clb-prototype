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

import LogoMobile from "@/images/Logo-brokers-mobile.svg";
import Logo from "@/images/Logo-header-brokers.svg";
import UK from "@/images/flags/UK.svg";
import ES from "@/images/flags/ES.svg";
import DE from "@/images/flags/DE.svg";
import UA from "@/images/flags/UA.svg";

type Country = {
  code: string;
  name: string;
  flag: string;
  locale: "en" | "es" | "de" | "ua" | "ru" | undefined;
};

const countriesMenu: Country[] = [
  { code: "UK", name: "Eng", flag: UK, locale: "en" },
  { code: "ES", name: "Es", flag: ES, locale: "es" },
  { code: "DE", name: "De", flag: DE, locale: "de" },
  { code: "UA", name: "Ua", flag: UA, locale: "ua" },
];

const menuItems = [
  { title: "aboutUs", type: "aboutUs", link: "/about-us" },
  { title: "services", type: "services", link: "" },
  { title: "blog", type: "link", link: "/blog" },
  { title: "careers", type: "link", link: "/careers" },
];

const servicesMenu = [
  { title: "commodityBrokerage", link: "/commodity-brokerage" },
  { title: "freightBrokerage", link: "/freight-brokerage" },
  { title: "execution", link: "/execution" },
  { title: "exportСonsulting", link: "/export-consulting" },
];

const HeaderComponent = () => {
  const t = useTranslations("header");
  const t1 = useTranslations("servicesMenu");

  const pathname = usePathname();
  const pathWithoutLanguage = pathname.replace(/^\/[a-zA-Z]{2}(\/)?/, "/");
  const initialLocale = pathname.split("/")[1];

  const defaultCountry = countriesMenu[4];
  const initialCountry = countriesMenu.find(
    (country) => country.locale === initialLocale
  );

  const [selectedCountry, setSelectedCountry] = useState(
    initialCountry || defaultCountry
  );

  useEffect(() => {
    const locale = pathname.split("/")[1];
    const matchingCountry = countriesMenu.find(
      (country) => country.locale === locale
    );

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

  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlHeaderVisibility = () => {
    if (typeof window !== "undefined") {
      const scrolledDistance = window.scrollY;

      const scrollingUp = scrolledDistance < lastScrollY;

      if (scrollingUp || scrolledDistance <= 28) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }

      setLastScrollY(scrolledDistance);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlHeaderVisibility);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", controlHeaderVisibility);
      }
    };
  }, [lastScrollY]);

  const handleDropdownClick = (dropdownType: any) => {
    switch (dropdownType) {
      case "flag":
        setFlagDropdownOpen(!isFlagDropdownOpen);
        setServicesMenuOpen(false);
        break;
      case "services":
        setServicesMenuOpen(!isServicesMenuOpen);
        setFlagDropdownOpen(false);
        break;
      default:
        break;
    }
    setArrowRotated(!isArrowRotated);
  };

  const handleDropdownMouseEnter = (dropdownType: any) => {
    switch (dropdownType) {
      case "flag":
        setFlagDropdownOpen(true);
        setServicesMenuOpen(false);
        break;
      case "services":
        setServicesMenuOpen(true);
        setFlagDropdownOpen(false);
        break;
      default:
        break;
    }
    setArrowRotated(true);
  };

  const handleServicesMenuClick = () => {
    setServicesMenuOpen(!isServicesMenuOpen);
    setFlagDropdownOpen(false);
  };

  const handleDropdownMouseLeave = (dropdownType: any) => {
    switch (dropdownType) {
      case "flag":
        setFlagDropdownOpen(false);
        break;
      case "services":
        setServicesMenuOpen(false);
        break;
      default:
        break;
    }
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

  const handleLinkClick = () => {
    closeModal();
  };

  const NavigationContent = (
    <ul className={s.header__list}>
      {menuItems.map((item) => (
        <li
          key={item.title}
          className={s.header__item}
          onMouseEnter={() => handleDropdownMouseEnter(item.type)}
          onMouseLeave={() => handleDropdownMouseLeave(item.type)}
          onClick={() => {
            if (item.type === "services") {
              handleServicesMenuClick();
            } else {
              handleDropdownClick(item.type);
              handleLinkClick();
            }
          }}
        >
          {item.type === "link" ? (
            <Link
              className={s.header__text}
              href={item.link}
              onClick={handleLinkClick}
            >
              {t(item.title)}
            </Link>
          ) : (
            <>
              <div className={s.header__submenu}>
                <Link className={s.header__text} href={item.link}>
                  {t(item.title)}
                </Link>
                {item.type === "services" && (
                  <span
                    className={classNames(s.arrow, {
                      [s.arrow__rotated]: isArrowRotated && isServicesMenuOpen,
                    })}
                    onClick={handleServicesMenuClick}
                  >
                    <Image src={ArrowMenu} alt="⌵" />
                  </span>
                )}
              </div>

              {item.type === "services" && isServicesMenuOpen && (
                <ul className={s.header__dropdown}>
                  {servicesMenu.map((subItem) => (
                    <li className={s.header__dropdown_item} key={subItem.title}>
                      <Link
                        className={s.header__dropdown_text}
                        href={subItem.link}
                        onClick={handleLinkClick}
                      >
                        {t1(subItem.title)}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
        </li>
      ))}
    </ul>
  );

  const FlagContent = (
    <div
      className={s.flag__dropdown}
      onMouseEnter={() => handleDropdownMouseEnter("flag")}
      onMouseLeave={() => handleDropdownMouseLeave("flag")}
      onClick={() => handleDropdownClick("flag")}
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
        <p className={s.flag__name}>{selectedCountry.name}</p>

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
                  <Link
                    className={s.flag__link}
                    href={`/${pathWithoutLanguage}`}
                    locale={country.locale}
                  >
                    <Image
                      className={s.flag__image}
                      src={country.flag}
                      alt={country.name}
                      width={30}
                      height={20}
                    />
                    <p>{country.name}</p>
                  </Link>
                </li>
              );
            }
            return null;
          })}
        </ul>
      )}
    </div>
  );

  const ModalContent = (
    <>
      {NavigationContent}
      {FlagContent}
      <MainButtonComponent
        text={t("getInTouch")}
      />
    </>
  );

  return (
    <header
      className={classNames(s.header, { [s.hidden]: !showHeader })}
      style={{ zIndex: isModalOpen ? -1 : 10 }}
    >
      <div className={s.header__box}>
        <Link className={s.header__link} href={"/"}>
          <Image
            className={s.header__logo}
            src={Logo}
            alt="Logo"
            width={180}
            height={60}
          />

          <Image
            className={s.header__logo_mobile}
            src={LogoMobile}
            alt="Logo"
            width={50}
            height={36}
          />
        </Link>

        <nav className={s.header__navigation}>{NavigationContent}</nav>

        <div className={s.header__contents}>
          <div className={s.flag__content}>{FlagContent}</div>

          <MainButtonComponent
            className={s.header__touch}
            text={t("getInTouch")}
            typeButton="MainButton"
          />

          <button
            className={s.header__button}
            type="button"
            onClick={openModal}
          >
            <Image src={Burger} alt="Burger" width={30} height={30} />
          </button>
        </div>
      </div>
      <Modal
        className={classNames(s.modal, s.container)}
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <div className={s.modal__contents}>
          <Link className={s.header__link} href={"/"} onClick={handleLinkClick}>
            <Image
              className={s.header__logo_mobile}
              src={LogoMobile}
              alt="Logo"
              width={50}
              height={36}
            />
          </Link>
          <button className={s.modal__close} onClick={closeModal}>
            <Image src={Close} alt="close" width={20} height={20} />
          </button>
        </div>

        <div className={s.modal__container}>{ModalContent}</div>
      </Modal>
    </header>
  );
};

export default HeaderComponent;
