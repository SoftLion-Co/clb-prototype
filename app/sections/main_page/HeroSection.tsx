"use client";
import React, { useEffect, useState } from "react";
import s from "./HeroSection.module.scss";
import MainButtonComponent from "@/components/MainButtonComponent";
import Image from "next/image";
import HeroTestImage from "@/images/hero_video/hero-photo.webp";
import { useTranslations } from "next-intl";

function HeroSection() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSafari, setIsSafari] = useState(false);
  const t = useTranslations("homePage");
  const t1 = useTranslations("components");

  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));

    setIsLoading(false);
  }, []);

  return (
    <section className={s.box}>
      <div className={s.hero}>
        {isLoading && <Image
              className={s.hero__video}
              src={HeroTestImage}
              alt="Hero Image"
              width={2000}
              height={2000}
              loading="lazy"
            />}
        {!isLoading &&
          (isSafari ? (
            <Image
              className={s.hero__video}
              src={HeroTestImage}
              alt="Hero Image"
              width={2000}
              height={2000}
              loading="lazy"
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
              <source
                src={require("@/images/hero_video/video1080.webm")}
                type="video/webm"
              />
              <source
                src={require("@/images/hero_video/video1080.mp4")}
                type="video/mp4"
              />
            </video>
          ))}
      </div>
    </section>
  );
}

export default HeroSection;
