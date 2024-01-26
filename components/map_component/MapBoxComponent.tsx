import s from "@/components/map_component/MapBoxComponent.module.scss";
import React, { useState, useEffect, useRef, useMemo } from "react";

import { CSSProperties } from "react";
import { motion, useAnimation } from "framer-motion";
import { useGesture } from "react-use-gesture";

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
  const [hoverPath, setHoverPath] = useState<{ [key: string]: boolean }>({});
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);
  const svgContentRef = useRef<SVGSVGElement | null>(null);
  const [currentScale, setCurrentScale] = useState(1);
  const [selectedCountryId, setSelectedCountryId] = useState<string | null>(
    null
  );

  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const MAX_MOBILE_SCALE = 3.5;
  const MAX_SCALE = 2;
  const MIN_SCALE = 1;

  const controls = useAnimation();

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

  const bindGesture = useGesture({
    onDrag: ({ offset: [x, y] }) => {
      setPosition({ x, y });
    },
    onPinch: ({ offset: [scaleChange] }) => {
      setScale((prevScale) =>
        Math.min(MAX_SCALE, Math.max(MIN_SCALE, prevScale + scaleChange))
      );
    },
  });

  const zoomIn = () => {
    const newScale = Math.min(MAX_MOBILE_SCALE, scale + 0.1);
    setScale(newScale);
    controls.start({ scale: newScale });
  };

  const zoomOut = () => {
    if (window.innerWidth <= 768 && scale <= 2) {
      return;
    }
    const newScale = Math.max(MIN_SCALE, scale - 0.1);
    setScale(newScale);
    controls.start({ scale: newScale });
  };

  const resetScaleAndPosition = () => {
    let newScale = 1;
    if (window.innerWidth <= 768) {
      newScale = 2.5;
    }
    setScale(newScale);
    setPosition({ x: 0, y: 0 });
    controls.start({
      scale: newScale,
      x: 0,
      y: 0,
    });
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
          newScale = 2;
        }
        if (scale !== newScale) {
          setScale(newScale);
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
        style={{ width: "100%", height: "100%", scale }}
        drag
        dragConstraints={getDragConstraints()}
        animate={controls}
        {...bindGesture()}
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
