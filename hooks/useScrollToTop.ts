import { useState, useEffect } from "react";

const useScrollToTop = () => {
  const [scrollToTop, setScrollToTop] = useState(false);

  useEffect(() => {
    let userInterrupted = false;

    const handleUserScroll = () => {
      userInterrupted = true;
    };

    const scrollToTopAnimation = () => {
      const scrollStep = window.scrollY / (window.scrollY > 500 ? 35 : 50);

      if (userInterrupted || window.scrollY === 0) {
        setScrollToTop(false);
        userInterrupted = false;
        return;
      }

      window.scrollTo(0, window.scrollY - scrollStep);
      requestAnimationFrame(scrollToTopAnimation);
    };

    if (scrollToTop) {
      userInterrupted = false;
      window.addEventListener("wheel", handleUserScroll, { passive: true });
      window.addEventListener("touchmove", handleUserScroll, { passive: true });
      window.addEventListener("keydown", handleUserScroll, { passive: true });
      requestAnimationFrame(scrollToTopAnimation);
    }

    return () => {
      window.removeEventListener("wheel", handleUserScroll);
      window.removeEventListener("touchmove", handleUserScroll);
      window.removeEventListener("keydown", handleUserScroll);
    };
  }, [scrollToTop]);

  return {
    scrollToTop,
    setScrollToTop: () => {
      setScrollToTop(true);
    },
  };
};

export default useScrollToTop;
