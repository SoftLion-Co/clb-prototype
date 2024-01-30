"use client";
import React, { ComponentProps, PropsWithChildren } from "react";
import { motion, Variants } from "framer-motion";
import useFramerAnimations from "./useFramerAnimations";

interface ScrollAnimationWrapperProps extends ComponentProps<"div"> {
  rest?: any;
  viewport?: { margin: string };
  variants?: boolean;
  initial?: boolean;
  custom?: number;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "p" | "section";
}

const MotionWrapper = ({
  children,
  rest,
  variants = false,
  initial = false,
  custom = 0,
  className,
  viewport,
  tag,
}: PropsWithChildren<ScrollAnimationWrapperProps>) => {
  const defaultAnimation = useFramerAnimations();

  const motionProps = {
    ...(initial && { initial: "hidden", whileInView: "visible" }),
    ...(variants && { variants: defaultAnimation }),
    ...(custom && { custom }),
    className,
    viewport,
    ...rest,
  };

  const renderMotionElement = () => {
    switch (tag) {
      case "h1":
        return <motion.h1 {...motionProps}>{children}</motion.h1>;
      case "h2":
        return <motion.h2 {...motionProps}>{children}</motion.h2>;
      case "h3":
        return <motion.h3 {...motionProps}>{children}</motion.h3>;
      case "h4":
        return <motion.h4 {...motionProps}>{children}</motion.h4>;
      case "p":
        return <motion.p {...motionProps}>{children}</motion.p>;
      case "section":
        return <motion.section {...motionProps}>{children}</motion.section>;
      default:
        return <motion.div {...motionProps}>{children}</motion.div>;
    }
  };

  return renderMotionElement();
};

export default MotionWrapper;
