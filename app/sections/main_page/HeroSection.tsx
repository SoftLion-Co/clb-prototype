"use client";
import React, { useEffect, useState } from "react";
import s from "./HeroSection.module.scss";
import MainButtonComponent from "@/components/MainButtonComponent";
import Image from "next/image";
import HeroImage from "@/images/hero_video/photo1080.webp";
import { useTranslations } from "next-intl";
import { useNetwork, useOs } from "@mantine/hooks";
import useHeroVideo from "@/hooks/useHeroVideo";

function HeroSection() {
  const [shouldRenderPhoto, setShouldRenderPhoto] = useState(true);
  const { online, effectiveType } = useNetwork();
  const os = useOs();
  const heroVideo = useHeroVideo();

  const t = useTranslations("homePage");
  const t1 = useTranslations("components");

  useEffect(() => {
    // Detect if the user agent is Safari
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    // Determine whether to render the photo or video based on network speed, online status, OS, and Safari browser
    const shouldRender =
      !heroVideo.videoWEBM ||
      !heroVideo.videoMP4 ||
      !heroVideo.heroPhoto ||
      effectiveType === "slow-2g" ||
      effectiveType === "2g" ||
      (os === "macos" && isSafari);

    setShouldRenderPhoto(shouldRender);
  }, [online, effectiveType, os, heroVideo.heroPhoto, heroVideo.videoWEBM, heroVideo.videoMP4]);
  console.log("heroVideo.heroPhoto:", heroVideo.heroPhoto);

  return (
    <section className={s.box}>
      <div className={s.hero}>
        {shouldRenderPhoto ? (
          <Image
            className={s.hero__video}
            src={heroVideo.heroPhoto}
            alt="Hero Image"
            width={2000}
            height={2000}
            loading="lazy"
            fetchPriority="high"
          />
        ) : (
          <video
            className={s.hero__video}
            width="100%"
            height="100%"
            autoPlay
            playsInline
            loop
            muted
          >
            <source src={heroVideo.videoWEBM} type="video/webm" />
            <source src={heroVideo.videoMP4} type="video/mp4" />
          </video>
        )}
        <div className={s.hero__content}>
          <h1 className={s.hero__title}>{t("hero")}</h1>
          <div className={s.hero__text_wrapper}>
            <p className={s.hero__text}>{t("heroText1")}</p>
            <p className={s.hero__text}>{t("heroText2")}</p>
          </div>
          <MainButtonComponent
            text={t1("ourSercvicesButton")}
            className={s.hero__button}
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
