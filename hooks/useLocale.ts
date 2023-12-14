"use client";
import { useEffect, useState } from "react";

const useLocale = () => {
  const [locale, setLocale] = useState<string>("");

  useEffect(() => {
    const updateLocale = () => {
      const pathname = window.location.pathname;
      const initialLocale = pathname.split("/")[1];
      setLocale(initialLocale);
    };

    updateLocale();
  });

  return locale;
};

export default useLocale;
