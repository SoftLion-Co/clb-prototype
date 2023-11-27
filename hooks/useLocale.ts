import { useEffect, useState } from 'react';

const useLocale = () => {
  const [locale, setLocale] = useState<string>(''); // Assuming the locale is a string

  useEffect(() => {
    const updateLocale = () => {
      const pathname = window.location.pathname;
      const initialLocale = pathname.split('/')[1];
      setLocale(initialLocale);
    };

    // Call the updateLocale function initially
    updateLocale();
  })
  
  return locale;
};

export default useLocale;
