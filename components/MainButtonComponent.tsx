// import React, { FC } from "react";
// import Link from "next/link";

// import classNames from "classnames";
// import { Url } from "next/dist/shared/lib/router/router";
// import ArrowWhite from "@/images/vectors/arrow-white.svg";

"use client";
import React, { useState } from "react";
import Image from "next/image";
import s from "./MainButtonComponent.module.scss";
import Arrow from "@/images/vectors/arrow.svg";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const MainButtonComponent = () => {
  const t = useTranslations("getInTouch");

  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      type="submit"
      className={s.main__container}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.p
        className={s.main__text}
        animate={{ x: isHovered ? 40 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        Get In Touch
      </motion.p>
      <motion.div
        className={s.main__background}
        animate={{ x: isHovered ? -126 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <motion.div
          className={s.main__arrow}
          initial={{ rotate: 180 }} // Початкова позиція з поворотом на 180 градусів
          animate={{ rotate: isHovered ? 360 : 180 }} // Анімація повороту
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Image src={Arrow} alt="arrow" />
        </motion.div>
      </motion.div>
    </motion.button>
  );
};

export default MainButtonComponent;

// interface MainButtonProps {
//   text: string;
//   href?: Url;
//   className?: string;
//   typeButton?:
//     | "MainButton"
//     | "MainArrowButton"
//     | "MainUsualButton"
//     | "MainContactUsButton";
//   onClick?: () => void;
// }

// const MainButtonComponent: FC<MainButtonProps> = ({
//   text,
//   href,
//   className,
//   typeButton = "MainButton",
//   onClick,
// }) => {
//   const linkProps = {
//     href: href || "",
//   };

//   let buttonPadding = "";
//   if (typeButton === "MainButton" || typeButton === "MainContactUsButton") {
//     buttonPadding = "0";
//   } else if (
//     typeButton === "MainArrowButton" ||
//     typeButton === "MainUsualButton"
//   ) {
//     buttonPadding = "8px 16px";
//   }

//   let buttonContent;

//   if (typeButton === "MainButton" || typeButton === "MainContactUsButton") {
//     buttonContent = (
//       <button type="submit" className={s.main__container} onClick={onClick}>
//         <p className={s.main__text}>{text}</p>
//         <div className={s.main__background}>
//           <Image className={s.main__arrow} src={Arrow} alt="arrow" />
//         </div>
//       </button>
//     );
//   } else if (typeButton === "MainArrowButton") {
//     buttonContent = (
//       <div className={s.main__link} style={{ padding: buttonPadding }}>
//         <p>{text}</p>
//         <Image src={ArrowWhite} alt="arrow" />
//       </div>
//     );
//   } else if (typeButton === "MainUsualButton") {
//     buttonContent = (
//       <div style={{ padding: buttonPadding }}>
//         <p>{text}</p>
//       </div>
//     );
//   }

//   if (typeButton === "MainContactUsButton") {
//     return (
//       <div className={classNames(s.main__button, className)}>
//         {buttonContent}
//       </div>
//     );
//   } else {
//     return (
//       <div className={classNames(s.main__button, className)}>
//         <Link className={s.main__link} {...linkProps}>
//           {buttonContent}
//         </Link>
//       </div>
//     );
//   }
// };

// export default MainButtonComponent;
