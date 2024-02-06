import React, { useState, useEffect } from "react";
import Image from "next/image";
import s from "@/app/sections/main_page/HeroSection.module.scss";
import MotionWrapper from "@/hooks/MotionWrapper";

interface PhotoData {
  acf: {
    hero_photo: string;
  };
}

const photoReqUrl =
  "https://softlion.blog/wp-json/wp/v2/videos/531?acf_format=standard&_fields=acf";

const GetHeroImageComponent = () => {
  const [photo, setPhoto] = useState<PhotoData | null>(null);

  useEffect(() => {
    fetch(photoReqUrl)
      .then((response) => response.json())
      .then((data: PhotoData) => setPhoto(data))
      .catch((error) => console.error("Error fetching photo:", error));
  }, []);

  if (!photo) {
    // Photo data is still being fetched
    return <div className={s.hero__video}></div>; // or display a loading spinner/message
  }

  return (
    <MotionWrapper initial viewport>
      <MotionWrapper variants>
        <Image
          src={photo.acf.hero_photo}
          alt="Hero Photo"
          width={2500}
          height={2000}
          className={s.hero__video}
        />
      </MotionWrapper>
    </MotionWrapper>
  );
};

export default GetHeroImageComponent;
