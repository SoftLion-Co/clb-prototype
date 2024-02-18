import { useState, useEffect } from "react";

const reqUrl =
  "https://wp.cl-brokers.com//wp-json/wp/v2/contact-us-photo?acf_format=standard&_fields=acf";

export interface ContactUsPhoto {
  acf: Acf;
}
export interface Acf {
  main_photo: string;
  careers_photo: string;
}

const useContactUsPhoto = () => {
  const [photosUrl, setPhotosUrl] = useState<ContactUsPhoto[]>([]);

  const fetchPhotos = async () => {
    try {
      const req = await fetch(reqUrl);
      const fetchedPhotosUrl: ContactUsPhoto[] = await req.json();
      setPhotosUrl(fetchedPhotosUrl);
    } catch (error) {
      console.error("Error fetching hero data:", error);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);
  return photosUrl;
};

export default useContactUsPhoto;
