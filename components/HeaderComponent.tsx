"use client";
import React, { useEffect, useState, useCallback, useMemo } from "react";
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
import { motion } from "framer-motion";

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
  locale: "en" | "es" | "de" | "ua" | undefined;
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
  const defaultCountry = countriesMenu[4];
  const pathWithoutLanguage = useMemo(
    () => pathname.replace(/^\/[a-zA-Z]{2}(\/)?/, "/"),
    [pathname]
  );
  const initialLocale = useMemo(() => pathname.split("/")[1], [pathname]);

  const [isFlagDropdownOpen, setFlagDropdownOpen] = useState(false);
  const [isServicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [isArrowRotated, setArrowRotated] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  const initialCountry = useMemo(
    () => countriesMenu.find((country) => country.locale === initialLocale),
    [initialLocale]
  );
  const [selectedCountry, setSelectedCountry] = useState(
    initialCountry || defaultCountry
  );

  useEffect(() => {
    const locale = pathname.split("/")[1];
    const matchingCountry = countriesMenu.find(
      (country) => country.locale === locale
    );

    setSelectedCountry(matchingCountry || defaultCountry);
  }, [pathname, defaultCountry]);

  const controlHeaderVisibility = useCallback(() => {
    if (typeof window !== "undefined") {
      const scrolledDistance = window.scrollY;
      const scrollingUp = scrolledDistance < lastScrollY;

      setShowHeader(scrollingUp || scrolledDistance <= 28);
      setLastScrollY(scrolledDistance);
      setServicesMenuOpen(false);
      setFlagDropdownOpen(false);
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlHeaderVisibility);
      return () => {
        window.removeEventListener("scroll", controlHeaderVisibility);
      };
    }
  }, [controlHeaderVisibility]);

  const handleDropdownClick = useCallback(
    (dropdownType: string) => {
      setFlagDropdownOpen(
        dropdownType === "flag" ? !isFlagDropdownOpen : false
      );
      setServicesMenuOpen(
        dropdownType === "services" ? !isServicesMenuOpen : false
      );
      setArrowRotated(!isArrowRotated);
    },
    [isFlagDropdownOpen, isServicesMenuOpen, isArrowRotated]
  );

  const handleDropdownMouseEnter = useCallback((dropdownType: string) => {
    setFlagDropdownOpen(dropdownType === "flag");
    setServicesMenuOpen(dropdownType === "services");
    setArrowRotated(true);
  }, []);

  const handleServicesMenuClick = useCallback(() => {
    setServicesMenuOpen(!isServicesMenuOpen);
    setFlagDropdownOpen(false);
  }, [isServicesMenuOpen]);

  const handleDropdownMouseLeave = useCallback((dropdownType: string) => {
    if (dropdownType === "flag") setFlagDropdownOpen(false);
    if (dropdownType === "services") setServicesMenuOpen(false);
    setArrowRotated(false);
  }, []);

  const handleCountrySelection = useCallback((country: Country) => {
    setSelectedCountry(country);
    setFlagDropdownOpen(false);
  }, []);

  const openModal = useCallback(() => {
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    document.body.style.overflow = "auto";
  }, []);

  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
    if (window.innerWidth > 1280) closeModal();
  }, [closeModal]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [handleResize]);

  const handleLinkClick = useCallback(() => {
    closeModal();
  }, [closeModal]);

  const handleClose = () => {
    setFlagDropdownOpen(false);
    setServicesMenuOpen(false);
  };

  const NavigationContent = useMemo(
    () => (
      <ul className={s.header__list}>
        {menuItems.map((item) => (
          <li
            key={item.title}
            className={s.header__item}
            onMouseEnter={() =>
              item.type === "services" && handleDropdownMouseEnter(item.type)
            }
            onMouseLeave={() =>
              item.type === "services" && handleDropdownMouseLeave(item.type)
            }
          >
            {item.type !== "services" ? (
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
                  <p
                    className={s.header__text}
                    onClick={handleServicesMenuClick}
                  >
                    {t(item.title)}
                  </p>
                  <span
                    className={classNames(s.arrow, {
                      [s.arrow__rotated]: isArrowRotated && isServicesMenuOpen,
                    })}
                    onClick={handleServicesMenuClick}
                  >
                    <Image src={ArrowMenu} alt="⌵" />
                  </span>
                </div>

                {isServicesMenuOpen && (
                  <motion.ul
                    className={s.header__dropdown}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {servicesMenu.map((subItem) => (
                      <motion.li
                        className={s.header__dropdown_item}
                        key={subItem.title}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link
                          className={s.header__dropdown_text}
                          href={subItem.link}
                          onClick={handleLinkClick}
                        >
                          {t1(subItem.title)}
                        </Link>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </>
            )}
          </li>
        ))}
      </ul>
    ),
    [
      t,
      t1,
      menuItems,
      isArrowRotated,
      isServicesMenuOpen,
      handleDropdownMouseEnter,
      handleDropdownMouseLeave,
      handleServicesMenuClick,
      handleLinkClick,
    ]
  );

  const FlagContent = useMemo(
    () => (
      <div
        className={s.flag__dropdown}
        onMouseEnter={() => handleDropdownMouseEnter("flag")}
        onMouseLeave={() => handleDropdownMouseLeave("flag")}
        onClick={() => handleDropdownClick("flag")}
      >
        <div className={s.flag}>
          <Image
            className={classNames(s.flag__image, s.flag__custom)}
            src={selectedCountry.flag}
            alt={selectedCountry.name}
            width={30}
            height={20}
          />
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
          <motion.ul
            className={s.flag__list}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {countriesMenu.map((country) => {
              if (country !== selectedCountry) {
                return (
                  <motion.li
                    key={country.code}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
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
                  </motion.li>
                );
              }
              return null;
            })}
          </motion.ul>
        )}
      </div>
    ),
    [
      selectedCountry,
      countriesMenu,
      pathWithoutLanguage,
      isFlagDropdownOpen,
      handleDropdownMouseEnter,
      handleDropdownMouseLeave,
      handleDropdownClick,
      handleCountrySelection,
    ]
  );

  const ModalContent = useMemo(
    () => (
      <>
        {NavigationContent}
        {FlagContent}
        <MainButtonComponent
          defaultTo="contactUsSection"
          onClick={closeModal}
          text={t("getInTouch")}
          typeButton="MainButton"
        />
      </>
    ),
    [NavigationContent, FlagContent, t, closeModal]
  );

  return (
    <header
      className={classNames(s.header, { [s.hidden]: !showHeader })}
      style={{ zIndex: isModalOpen ? -1 : 10 }}
    >
      <div className={s.header__box}>
        <Link className={s.header__link} href="/">
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
            defaultTo="contactUsSection"
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
        overlayClassName={s.modal__overlay}
      >
        <div className={s.modal__contents}>
          <Link className={s.header__link} href="/" onClick={handleLinkClick}>
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
        <motion.div
          className={s.modal__container}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
        >
          {ModalContent}
        </motion.div>
      </Modal>
    </header>
  );
};

export default HeaderComponent;
