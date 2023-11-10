import { useState, useEffect } from "react";

const useScrollToTop = () => {
  const [scrollToTop, setScrollToTop] = useState(false);
  const [interruptScroll, setInterruptScroll] = useState(false);

  useEffect(() => {
    const scrollToTopAnimation = () => {
      const scrollStep = window.scrollY / (window.scrollY > 500 ? 25 : 30);

      if (interruptScroll) {
        setScrollToTop(false);
        setInterruptScroll(false);
        return;
      }

      if (window.scrollY !== 0) {
        window.scrollTo(0, window.scrollY - scrollStep);
        requestAnimationFrame(scrollToTopAnimation);
      } else {
        setScrollToTop(false);
      }
    };

    if (scrollToTop) {
      requestAnimationFrame(scrollToTopAnimation);
    }
  }, [scrollToTop, interruptScroll]);

  return {
    scrollToTop,
    setScrollToTop: () => {
      setScrollToTop(true);
    },
    setInterruptScroll: () => {
      setInterruptScroll(true);
    },
  };
};

export default useScrollToTop;
