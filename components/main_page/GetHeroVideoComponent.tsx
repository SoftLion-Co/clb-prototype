import React, { useState, useEffect } from "react";
import s from "@/app/sections/main_page/HeroSection.module.scss";
import { motion } from "framer-motion";

interface VideoData {
  acf: {
    hero_video_webm: string;
    hero_video_mp4: string;
  };
}

const videoReqUrl =
  "https://softlion.blog/wp-json/wp/v2/videos/500?acf_format=standard&_fields=acf";

const GetHeroVideoComponent = () => {
  const [video, setVideo] = useState<VideoData | null>(null);

  useEffect(() => {
    fetch(videoReqUrl)
      .then((response) => response.json())
      .then((data: VideoData) => setVideo(data))
      .catch((error) => console.error("Error fetching video:", error));
  }, []);

  const defaultAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  if (!video) {
    // Video data is still being fetched
    return <div className={s.hero__video}></div>; // or display a loading spinner/message
  }

  return (
    <motion.video
      initial={"hidden"}
      whileInView={"visible"}
      variants={defaultAnimation}
      transition={{ duration: 0.3 }}
      className={s.hero__video}
      width="100%"
      height="100%"
      autoPlay
      playsInline
      loop
      muted
    >
      <source src={video.acf.hero_video_webm} type="video/webm" />
      <source src={video.acf.hero_video_mp4} type="video/mp4" />
    </motion.video>
  );
};

export default GetHeroVideoComponent;
