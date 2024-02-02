import React from "react";
import MotionWrapper from "@/hooks/MotionWrapper";
import s from "./Incoterms.module.scss";
import IncotermsImg from "@/images/incoterms.svg";
import Image from "next/image";
import classNames from "classnames";

const Incoterms = () => {
  return (
    <MotionWrapper  variants >
      <Image
        className={classNames(s.incoterms, s.container)}
        src={IncotermsImg}
        alt="Incoterms"
        width={2000}
        height={2000}
      />
    </MotionWrapper>
  );
};

export default Incoterms;
