import { useState, useEffect } from "react";

const useScrollToTop = () => {
  const [scrollToTop, setScrollToTop] = useState(false);

  useEffect(() => {
    const scrollToTopAnimation = () => {
      const scrollStep = window.scrollY / (window.scrollY > 500 ? 30 : 40); // змінна швидкості прокрутки, else це швидкість прокрутки в кінці сторінки, щоб були в курсі

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
  }, [scrollToTop]);

  return {
    scrollToTop,
    setScrollToTop,
  };
};

export default useScrollToTop;
