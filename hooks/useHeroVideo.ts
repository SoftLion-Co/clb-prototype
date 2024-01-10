import { useState, useEffect } from "react";

const videoReqUrl =
  "https://softlion.blog/wp-json/wp/v2/videos/500?acf_format=standard&_fields=acf";

interface VideoAcf {
  acf: {
    hero_video_webm: string;
    hero_video_mp4: string;
    hero_photo: string;
  };
}

interface VideoUrls {
  videoWEBM: string;
  videoMP4: string;
  heroPhoto: string;
}

const useHeroVideo = () => {
  const [videoUrls, setVideoUrls] = useState<VideoUrls>({
    videoWEBM: "",
    videoMP4: "",
    heroPhoto: ""
  });

  useEffect(() => {
    const fetchHeroVideo = async () => {
      try {
        const req = await fetch(videoReqUrl, { cache: "no-cache" });
        const fetchedVideoData: VideoAcf = await req.json();

        // Assuming the response structure is correct
        const { hero_video_webm, hero_video_mp4, hero_photo } = fetchedVideoData.acf;

        setVideoUrls({
          videoWEBM: hero_video_webm,
          videoMP4: hero_video_mp4,
          heroPhoto: hero_photo,
        });
      } catch (error) {
        console.error("Error fetching hero video:", error);
      }
    };

    fetchHeroVideo();
  }, []);

  return videoUrls;
};

export default useHeroVideo;
