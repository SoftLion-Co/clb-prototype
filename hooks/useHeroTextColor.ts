"use client"
import { useState, useEffect } from "react";

const colorReqUrl =
  "https://softlion.blog/wp-json/wp/v2/videos/531?acf_format=standard&_fields=acf.text_color";

interface ColorData {
  acf: ColorDataAfc;
}

interface ColorDataAfc {
  text_color: "dark" | "light";
}

const useHeroTextColor = () => {
  const [color, setColor] = useState<"dark" | "light">();

  const fetchColor = async () => {
    const req = await fetch(colorReqUrl);
    const fetchedColor: ColorData = await req.json();
    const resultColor = fetchedColor.acf.text_color;
    setColor(resultColor);
  };

  useEffect(() => {
    fetchColor();
  }, []);

  return color;
};

export default useHeroTextColor;
