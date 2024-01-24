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
  const [currentScale, setCurrentScale] = useState(
    window.innerWidth <= 768 ? 2.7 : 1
  );

  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);
  const svgContentRef = useRef<SVGSVGElement | null>(null);
  const [elementPositions, setElementPositions] = useState<any>({});
  const [selectedCountryId, setSelectedCountryId] = useState<string | null>(
    null
  );
  const [scale, setScale] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [touchStartPosition, setTouchStartPosition] = useState({ x: 0, y: 0 });

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setTouchStartPosition({ x: e.touches[0].clientX, y: e.touches[0].clientY });
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (isDragging) {
      e.preventDefault();

      const touch = e.touches[0];
      const deltaX = touch.clientX - touchStartPosition.x;
      const deltaY = touch.clientY - touchStartPosition.y;

      setTranslate((prevTranslate) => ({
        x: prevTranslate.x + deltaX,
        y: prevTranslate.y + deltaY,
      }));

      setTouchStartPosition({ x: touch.clientX, y: touch.clientY });
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleDocumentTouchMove = (e: TouchEvent) => {
      if (isDragging) {
        e.preventDefault();
      }
    };

    document.body.addEventListener("touchmove", handleDocumentTouchMove, {
      passive: false,
    });

    return () => {
      document.body.removeEventListener("touchmove", handleDocumentTouchMove);
    };
  }, [isDragging]);

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

  const MAX_SCALE = 5; // Максимальний масштаб

  const zoomIn = () => {
    setCurrentScale((prevScale) => {
      const newScale = prevScale + 0.1;
      if (window.innerWidth < 767.98) {
        const mobileScale = newScale + 0.1;
        return mobileScale > MAX_SCALE ? MAX_SCALE : mobileScale;
      }
      return newScale > MAX_SCALE ? MAX_SCALE : newScale;
    });
  };

  function zoomOut() {
    setCurrentScale((prevScale) => Math.max(prevScale - 0.1, 0.9));
  }

  const resetScaleAndPosition = () => {
    const defaultScale = window.innerWidth <= 768 ? 2.7 : 1;

    setCurrentScale(defaultScale);

    setTranslate({ x: 0, y: 0 });
  };

  useEffect(() => {
    const handleResize = () => {
      const newScale = window.innerWidth <= 768 ? 2 : 1;
      setCurrentScale(newScale);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  const buttonsData = [
    { onClick: zoomIn, text: "+" },
    { onClick: zoomOut, text: "-" },
    { onClick: resetScaleAndPosition, text: "↩︎" },
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
      <div
        className={s.map__container}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
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
