"use client"
import React, { PropsWithChildren, useRef } from 'react';
import { motion, useScroll } from 'framer-motion';

interface ScrollAnimationWrapperProps {
  animationType?: 'low' | 'high';
}

const ScrollAnimationWrapper = (props: PropsWithChildren<ScrollAnimationWrapperProps>) => {
  const ref = useRef<HTMLDivElement>(null);

  // Встановлюємо значення за замовчуванням 'low', якщо не вказано інше
  const { animationType = 'low' } = props || {};


  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: animationType === "low" ? ['0 1', '1.1 1'] : ['1 2', '0.5 1'],
  });

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scrollYProgress,
        opacity: scrollYProgress,
      }}
    >
      {props?.children}
    </motion.div>
  );
};

export default ScrollAnimationWrapper;
