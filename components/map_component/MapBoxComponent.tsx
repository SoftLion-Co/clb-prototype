import s from "@/components/map_component/MapBoxComponent.module.scss";
import React, { useState, useEffect, useRef, useMemo } from "react";

import { CSSProperties } from "react";
import { motion, useAnimation, Transition } from "framer-motion";

import CountryMapSVG from "@/components/map_component/CountryMapSVG";
import countriesData from "@/components/map_component/countriesData";

import {
  TransformWrapper,
  TransformComponent,
  ReactZoomPanPinchRef,
} from "react-zoom-pan-pinch";

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
  const transformWrapperRef = useRef<ReactZoomPanPinchRef>(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [scale, setScale] = useState(1);
  const [selectedCountryId, setSelectedCountryId] = useState<string | null>(
    null
  );

  const controls = useAnimation();
  const SCALE_STEP = 0.25;
  const MAX_SCALE = 4;
  const MIN_SCALE = 1;

  const zoomIn = () => {
    if (transformWrapperRef.current) {
      transformWrapperRef.current.zoomIn(SCALE_STEP, 200);
      const newScale = Math.min(currentScale + SCALE_STEP, MAX_SCALE);
      setCurrentScale(newScale);
    }
  };

  const zoomOut = () => {
    if (transformWrapperRef.current) {
      transformWrapperRef.current.zoomOut(SCALE_STEP, 200);
      const newScale = Math.max(currentScale - SCALE_STEP, MIN_SCALE);
      setCurrentScale(newScale);
    }
  };

  const resetScaleAndPosition = () => {
    const resetTransition: Transition = {
      type: "spring",
      stiffness: 100,
      damping: 10,
    };

    let resetScale = 1;
    if (typeof window !== "undefined") {
      if (window.innerWidth <= 1279.98) {
        resetScale = 1.2;
      }
    }

    if (typeof window !== "undefined") {
      if (window.innerWidth > 1280) {
        setCurrentScale(resetScale);
      }
    }

    if (transformWrapperRef.current) {
      transformWrapperRef.current.resetTransform();
      setCurrentScale(1.7);
      setTranslate({ x: 0, y: 0 });
      controls.start({
        scale: resetScale,
        x: 0,
        y: 0,
        transition: { type: "spring", stiffness: 100, damping: 10 },
      });

      requestAnimationFrame(() => {
        controls.start({
          x: 0,
          y: 0,
          ...getDragConstraints(),
        });
      });
    }

    controls.start({ scale: resetScale, x: 0, y: 0 }, resetTransition);
  };

  const getDragConstraints = () => {
    if (!containerRef.current || !svgContentRef.current) {
      return { top: 0, right: 0, bottom: 0, left: 0 };
    }

    const containerBounds = containerRef.current.getBoundingClientRect();
    const svgBounds = svgContentRef.current.getBoundingClientRect();

    const maxX = (svgBounds.width * currentScale - containerBounds.width) / 2;
    const maxY = (svgBounds.height * currentScale - containerBounds.height) / 2;

    return {
      top: -maxY,
      right: maxX,
      bottom: maxY,
      left: -maxX,
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
        setCurrentScale(window.innerWidth <= 1279.98 ? 2.7 : 1);
      }
    };

    window.addEventListener("resize", updateScale);
    updateScale();

    return () => window.removeEventListener("resize", updateScale);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      resetScaleAndPosition();
    };

    handleResize();
  }, []);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsLargeScreen(window.innerWidth > 1279.98);
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
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

  const hoverStyle: CSSProperties = useMemo(() => {
    if (isLargeScreen) {
      return {
        ...defaultStyle,
        fill: "#A7B896",
      };
    }
    return defaultStyle;
  }, [isLargeScreen, defaultStyle]);

  const activeStyle: CSSProperties = {
    ...hoverStyle,
    fill: "#A7B896",
  };

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
        {isLargeScreen && (
          <>
            <button onClick={zoomIn} className={s.map__button}>
              <p className={s.map__buttonText}>+</p>
            </button>
            <button onClick={zoomOut} className={s.map__button}>
              <p className={s.map__buttonText}>-</p>
            </button>
          </>
        )}
        <button onClick={resetScaleAndPosition} className={s.map__button}>
          <p className={s.map__buttonText}>𖣓</p>
        </button>
      </div>
      <TransformWrapper
        initialScale={1}
        ref={transformWrapperRef}
        panning={{
          disabled: true,
        }}
      >
        <TransformComponent
          wrapperStyle={{
            width: "100%",
            height: "100%",
          }}
          contentStyle={{ width: "100%", height: "100%" }}
        >
          <motion.div
            className={s.map__container}
            style={{
              width: "100%",
              height: "100%",
              transform: `scale(${currentScale})`,
              transformOrigin: "center center",
            }}
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
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};

export default MapBoxComponent;
