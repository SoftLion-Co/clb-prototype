"use client";
import s from "@/components/map_component/MapBoxComponent.module.scss";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { CSSProperties } from "react";
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
  const [currentScale, setCurrentScale] = useState(1);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);
  const svgContentRef = useRef<SVGSVGElement | null>(null);
  const [elementPositions, setElementPositions] = useState<any>({});
  const [selectedCountryId, setSelectedCountryId] = useState<string | null>(
    null
  );
  const [scale, setScale] = useState(1);

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();

    const scaleFactor = e.deltaY > 0 ? 1.1 : 0.9;
    setCurrentScale((prevScale) => {
      const newScale = prevScale * scaleFactor;
      return Math.min(Math.max(newScale, 0.9), 2);
    });
  };

  const handleScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      containerRef.current.scrollTop += e.deltaY;
    }
  };

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

  const handleCountrySelect = (countryId: string) => {
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

  function zoomIn() {
    setCurrentScale((prevScale) => Math.min(prevScale + 0.1, 2));
  }

  function zoomOut() {
    setCurrentScale((prevScale) => Math.max(prevScale - 0.1, 0.9));
  }

  const resetScaleAndPosition = () => {
    setCurrentScale(1);
    setTranslate({ x: 0, y: 0 });
  };

  const defaultStyle: CSSProperties = {
    cursor: "pointer",
    fill: "#EBECE6",
    stroke: "#171717",
    strokeWidth: "0.1",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    transition: "fill 0.3s",
  };

  const hoverStyle: CSSProperties = {
    ...defaultStyle,
    fill: "#A7B896",
  };

  const activeStyle: CSSProperties = {
    ...hoverStyle,
    fill: "#A7B896",
  };

  const handleMapMouseEnter = () => {
    document.body.style.overflow = "hidden";
  };

  const handleMapMouseLeave = () => {
    document.body.style.overflow = "auto";
  };

  return (
    <div
      className={s.map}
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseEnter={handleMapMouseEnter}
      onMouseLeave={handleMapMouseLeave}
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
      ref={containerRef}
    >
      <div className={s.map__buttons}>
        <button onClick={zoomIn} className={s.map__button}>
          <p className={s.map__buttonText}>+</p>
        </button>
        <button onClick={zoomOut} className={s.map__button}>
          <p className={s.map__buttonText}>-</p>
        </button>
        <button onClick={resetScaleAndPosition} className={s.map__button}>
          <p className={s.map__buttonText}>↩︎</p>
        </button>
      </div>
      <div
        className={s.map__container}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onScroll={handleScroll}
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
        ref={containerRef}
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
      </div>
    </div>
  );
};

export default MapBoxComponent;
