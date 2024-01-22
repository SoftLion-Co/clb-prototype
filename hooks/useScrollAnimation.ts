import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const useScrollAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 2", "1.1 1"],
  });

  return {
    animationProps: {
      ref,
      style: {
        scale: scrollYProgress,
        opacity: scrollYProgress,
      },
    },
  };
};

export default useScrollAnimation;
