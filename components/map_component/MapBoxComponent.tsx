import s from "@/components/map_component/MapBoxComponent.module.scss";
import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
} from "react";

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
  const [elementPositions, setElementPositions] = useState<any>({});
  const [currentScale, setCurrentScale] = useState(1);
  const [selectedCountryId, setSelectedCountryId] = useState<string | null>(
    null
  );

  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const MAX_SCALE = 5;
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
    onPinch: ({ offset: [d] }) => {
      const newScale = Math.min(Math.max(1, scale + d / 100), 5);
      setScale(newScale);
    },
    onDrag: ({ offset: [x, y] }) => {
      setPosition({ x, y });
    },
  });

  const resetScaleAndPosition = () => {
    setScale(1);
    controls.start({
      scale: 1,
      x: 0,
      y: 0,
    });
  };

  const zoomIn = () => {
    const newScale = Math.min(MAX_SCALE, scale + 0.1);
    setScale(newScale);
    controls.start({ scale: newScale });
  };

  const zoomOut = () => {
    const newScale = Math.max(MIN_SCALE, scale - 0.1);
    setScale(newScale);
    controls.start({ scale: newScale });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentScale(window.innerWidth <= 768 ? 2.7 : 1);
    }
  }, []);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setStartPos({ x: e.clientX - translate.x, y: e.clientY - translate.y });
  };

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.buttons === 1 || startPos.x !== 0 || startPos.y !== 0) {
        setTranslate({
          x: e.clientX - startPos.x,
          y: e.clientY - startPos.y,
        });
      }
    },
    [startPos]
  );

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
    if (svgContentRef.current) {
      const paths = svgContentRef.current.querySelectorAll("path");
      paths.forEach((path) => {
        const pathId = path.getAttribute("id");
        if (pathId) {
          const currentPosition = elementPositions[pathId];
          if (currentPosition) {
            path.style.transformOrigin = "center";
            path.style.transform = `scale(${currentScale})`;
            path.style.transform += `translate(${currentPosition.x}px, ${currentPosition.y}px)`;
          }
        }
      });
    }
  }, [currentScale, elementPositions]);

  useEffect(() => {
    const updateScale = () => {
      if (typeof window !== "undefined") {
        setCurrentScale(window.innerWidth <= 768 ? 2.7 : 1);
      }
    };

    window.addEventListener("resize", updateScale);
    updateScale();

    return () => window.removeEventListener("resize", updateScale);
  }, []);

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
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
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
