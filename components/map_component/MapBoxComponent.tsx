import s from "@/components/map_component/MapBoxComponent.module.scss";
import React, { useState, useEffect, useRef, useMemo } from "react";

import { CSSProperties } from "react";
import { motion, useAnimation, Transition } from "framer-motion";

import CountryMapSVG from "@/components/map_component/CountryMapSVG";
import countriesData from "@/components/map_component/countriesData";

interface CountryInfo {
  country: string;
  agriculturalCrops: string[];
  deliveryOptions: string[];
}

interface MapBoxComponentProps {
  onCountrySelect: (countryData: CountryInfo | null) => void;
}

const MapBoxComponent = ({ onCountrySelect }: MapBoxComponentProps) => {
  const controls = useAnimation();
  const [scale, setScale] = useState(1);
  const [hoverPath, setHoverPath] = useState<{ [key: string]: boolean }>({});
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);
  const svgContentRef = useRef<SVGSVGElement | null>(null);
  const [currentScale, setCurrentScale] = useState(1);
  const [selectedCountryId, setSelectedCountryId] = useState<string | null>(
    null
  );

  const SCALE_STEP = 0.1;
  const MAX_SCALE = 5;
  const MIN_SCALE = 1;

  const resetScaleAndPosition = () => {
    const resetTransition: Transition = {
      type: "spring",
      stiffness: 100,
      damping: 10,
    };

    let resetScale = 1;
    if (typeof window !== "undefined") {
      if (window.innerWidth <= 1280) {
        resetScale = 2;
      }
    }

    setCurrentScale(resetScale);
    setTranslate({ x: 0, y: 0 });
    controls.start({ scale: resetScale, x: 0, y: 0 }, resetTransition);
  };

  const zoomIn = () => {
    const newScale = Math.min(currentScale + SCALE_STEP, MAX_SCALE);
    setCurrentScale(newScale);
    const newTranslate = {
      x: translate.x * (newScale / currentScale),
      y: translate.y * (newScale / currentScale),
    };
    setTranslate(newTranslate);
  };

  const zoomOut = () => {
    const newScale = Math.max(currentScale - SCALE_STEP, MIN_SCALE);

    if (typeof window !== "undefined" && window.innerWidth <= 1280) {
      if (newScale >= 2) {
        setCurrentScale(newScale);
        const newTranslate = {
          x: translate.x * (newScale / currentScale),
          y: translate.y * (newScale / currentScale),
        };
        setTranslate(newTranslate);
      }
    } else {
      setCurrentScale(newScale);
      const newTranslate = {
        x: translate.x * (newScale / currentScale),
        y: translate.y * (newScale / currentScale),
      };
      setTranslate(newTranslate);
    }
  };

  const getDragConstraints = () => {
    if (!containerRef.current || !svgContentRef.current)
      return { top: 0, right: 0, bottom: 0, left: 0 };

    const containerBounds = containerRef.current.getBoundingClientRect();
    const svgBounds = svgContentRef.current.getBoundingClientRect();

    return {
      top: -(svgBounds.height * scale - containerBounds.height) / 2,
      right: (svgBounds.width * scale - containerBounds.width) / 2,
      bottom: (svgBounds.height * scale - containerBounds.height) / 2,
      left: -(svgBounds.width * scale - containerBounds.width) / 2,
    };
  };

  const handleMouseUp = () => {
    setStartPos({ x: 0, y: 0 });
  };

  const handleMouseEnter = (pathId: string) => {
    setHoverPath((prev) => ({ ...prev, [pathId]: true }));
  };

  const handleMouseLeave = (pathId: string) => {
    setHoverPath((prev) => ({ ...prev, [pathId]: false }));
  };

  const handleCountrySelect = (countryId: any) => {
    if (selectedCountryId === countryId) {
      setSelectedCountryId(null);
      onCountrySelect(null);
    } else {
      const countryData = countriesData.find((c) => c.country === countryId);
      if (countryData) {
        setSelectedCountryId(countryId);
        onCountrySelect(countryData);
      }
    }
  };

  useEffect(() => {
    const updateScale = () => {
      if (typeof window !== "undefined") {
        let newScale = 1;
        if (window.innerWidth <= 1280) {
          newScale = 1.6;
        }
        if (scale !== newScale) {
          setScale(newScale);
          setCurrentScale(newScale);
        }
      }
    };

    window.addEventListener("resize", updateScale);
    updateScale();

    return () => window.removeEventListener("resize", updateScale);
  }, [scale]);

  const defaultStyle: CSSProperties = useMemo(
    () => ({
      cursor: "pointer",
      fill: "#EBECE6",
      stroke: "#171717",
      strokeWidth: "0.1",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      transition: "fill 0.3s",
    }),
    []
  );
  const hoverStyle: CSSProperties = {
    ...defaultStyle,
    fill: "#A7B896",
  };

  const activeStyle: CSSProperties = {
    ...hoverStyle,
    fill: "#A7B896",
  };

  const buttonsData = [
    { onClick: zoomIn, text: "+" },
    { onClick: zoomOut, text: "-" },
    { onClick: resetScaleAndPosition, text: "𖣓" },
  ];

  return (
    <div
      className={s.map}
      onMouseUp={handleMouseUp}
      style={{
        width: "100%",
        overflow: "hidden",
      }}
      ref={containerRef}
    >
      <div className={s.map__buttons}>
        {buttonsData.map((button, index) => (
          <button
            onClick={button.onClick}
            className={s.map__button}
            key={index}
          >
            <p className={s.map__buttonText}>{button.text}</p>
          </button>
        ))}
      </div>
      <motion.div
        className={s.map__container}
        style={{ width: "100%", height: "100%", transform: `scale(${scale})` }}
        drag
        dragConstraints={getDragConstraints()}
        animate={controls}
        whileTap={{ cursor: "grabbing" }}
      >
        <CountryMapSVG
          handleCountrySelect={handleCountrySelect}
          selectedCountryId={selectedCountryId}
          hoverPath={hoverPath}
          hoverStyle={hoverStyle}
          activeStyle={activeStyle}
          defaultStyle={defaultStyle}
          scale={scale}
          currentScale={currentScale}
          translate={translate}
          svgContentRef={svgContentRef}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        />
      </motion.div>
    </div>
  );
};

export default MapBoxComponent;
