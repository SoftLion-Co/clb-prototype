"use client";
import React, { CSSProperties, ComponentProps, PropsWithChildren } from "react";
import { motion } from "framer-motion";
import useFramerAnimations from "./useFramerAnimations";

interface ScrollAnimationWrapperProps extends ComponentProps<"div"> {
  rest?: any;
  viewport?: { margin: string };
  animation?: "default" | "footer";
  variants?: boolean;
  initial?: boolean;
  custom?: number;
  className?: string;
  style?: CSSProperties | undefined
  tag?: "h1" | "h2" | "h3" | "h4" | "p" | "li" | "ul" | "section";
}

const MotionWrapper = ({
  children,
  rest,
  animation = "default",
  variants = false,
  initial = false,
  custom = 0,
  className,
  viewport,
  style,
  tag,
}: PropsWithChildren<ScrollAnimationWrapperProps>) => {
  const defaultAnimation = useFramerAnimations();
  const footerAnimation = useFramerAnimations("lowYMove")

  const resultAnimation = animation === "default" ? defaultAnimation : footerAnimation;

  const motionProps = {
    ...(initial && { initial: "hidden", whileInView: "visible" }),
    ...(variants && { variants: resultAnimation }),
    ...(custom && { custom }),
    className,
    viewport,
    style,
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
      case "li":
        return <motion.li {...motionProps}>{children}</motion.li>;
      case "ul":
        return <motion.ul {...motionProps}>{children}</motion.ul>;
      case "section":
        return <motion.section {...motionProps}>{children}</motion.section>;
      default:
        return <motion.div {...motionProps}>{children}</motion.div>;
    }
  };

  return renderMotionElement();
};

export default MotionWrapper;
