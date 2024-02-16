"use client";
import classNames from "classnames";
import s from "./IncotermsComponent.module.scss";
import React, { useState, useCallback, useMemo } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import IncotermsSvgComponent from "@/components/execution_page/IncotermsSvgComponent";

interface Incoterm {
  id: string;
  info: string;
}

interface ModalContent {
  id: string;
  info: string;
  position: { x: number; y: number };
}

const IncotermsComponent = () => {
  const t = useTranslations("execution.incoterms");

  const incotermsData: Incoterm[] = [
    { id: "1", info: t("EXW") },
    { id: "2", info: t("FCA") },
    { id: "3", info: t("FAS") },
    { id: "4", info: t("FOB") },
    { id: "5", info: t("CFR") },
    { id: "6", info: t("CIF") },
    { id: "7", info: t("CPT") },
    { id: "8", info: t("CIP") },
    { id: "9", info: t("DPU") },
    { id: "10", info: t("DAP") },
    { id: "11", info: t("DDP") },
  ];
  const [modalContent, setModalContent] = useState<ModalContent | null>(null);

  const handleMouseEnter = useCallback(
    (id: string, event: React.MouseEvent<SVGElement, MouseEvent>) => {
      const boundingBox = event.currentTarget.getBoundingClientRect();
      const position = {
        x: boundingBox.left,
        y: boundingBox.top + boundingBox.height + 10,
      };
      const data = incotermsData.find((item) => item.id === id);
      if (data) {
        setModalContent({ ...data, position });
      }
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    setModalContent(null);
  }, []);

  const modal = useMemo(
    () =>
      modalContent && (
        <motion.div
          className={classNames(s.modal, modalContent && s.active)}
          style={{
            top: modalContent.position.y,
            left: modalContent.position.x,
          }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <p className={s.incoterms__info}>{modalContent.info}</p>
        </motion.div>
      ),
    [modalContent]
  );

  return (
    <React.Fragment>
      <IncotermsSvgComponent
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />
      {modal}
    </React.Fragment>
  );
};

export default IncotermsComponent;
