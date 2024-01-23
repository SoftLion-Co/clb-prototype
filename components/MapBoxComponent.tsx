"use client";
import s from "@/components/MapBoxComponent.module.scss";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { CSSProperties } from "react";

const MapBoxComponent = () => {
  const [hoverPath, setHoverPath] = useState<{ [key: string]: boolean }>({});
  const [currentScale, setCurrentScale] = useState(1);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);
  const svgContentRef = useRef<SVGSVGElement | null>(null);
  const [elementPositions, setElementPositions] = useState<any>({});
  const [scale, setScale] = useState(1);

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();

    const scaleFactor = e.deltaY > 0 ? 1.1 : 0.9;
    setCurrentScale((prevScale) => {
      const newScale = prevScale * scaleFactor;
      return Math.min(Math.max(newScale, 0.5), 2);
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
    setCurrentScale((prevScale) => Math.max(prevScale - 0.1, 0.5));
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

  return (
    <div
      className={s.map}
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
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
        <svg
          width={952 * scale}
          height={584 * scale}
          style={{
            transform: `scale(${currentScale}) translate(${translate.x}px, ${translate.y}px)`,
            transformOrigin: "0 0",
            transition: "transform 0.3s",
          }}
          ref={svgContentRef}
          viewBox="0 0 952 584"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          transform={`scale(${currentScale})`}
        >
          <g clip-path="url(#clip0_344_7219)">
            <rect width="952" height="584" rx="32" />

            <path
              d="M474.704 424.1L474.405 426.4L475.402 428.1L476 434.6L474.206 437.8L474.305 440.8L472.71 445.1L471.913 446.2L468.125 444.2L466.929 443.1L467.926 441.3L465.732 440.4L466.131 438.7L465.932 437.8L464.337 437.3L465.334 436V435.2L463.838 434.2L463.539 433.3L464.835 432.2L464.237 431.3L464.337 430L465.234 428.1L466.43 427.2L469.221 426.4L470.418 425.3L472.312 425.9L472.91 424.7L472.71 422L473.009 420.9L474.305 421.4L474.704 424.1ZM341.225 376.2L340.826 377.6L338.932 375.2L339.929 374.7L341.225 376.2ZM425.36 320.6L427.453 321.8H428.849L430.842 321.2L432.138 321.9L433.534 322L437.023 326.3L438.817 325.6L440.213 326L440.512 326.9L442.605 327L445.596 326.4L447.59 327.8L452.374 328.6L453.969 329.2L454.069 330.5L450.58 334.3L449.185 339.8L448.188 341.6L447.889 343.1L448.088 345.5L447.49 347.5V349L448.586 350.3L447.091 351L446.294 352.4L443.602 352.7L442.805 351.9H441.708L439.914 353.3L441.21 354.4L440.612 355.3L436.824 359.3L434.73 360.2L434.232 363.1L431.241 365.3L430.145 368.2L430.942 368.9L430.643 370.4L429.148 371.4V372.4L430.543 372.5L432.836 370.9L432.338 369.6L434.63 368.1L436.524 368L438.718 368.3L439.515 370.5L439.017 372.2L441.309 374.5L442.207 375.9L439.615 377.6L439.714 379.2L440.612 379.8L442.306 382.4L444.101 384L443.303 386.5L442.107 386.8L440.412 388.1L438.518 387.9L437.721 388.3L439.216 391.4L442.406 392.8L442.904 394.5L442.107 395.2L440.711 397.7L441.409 399L441.509 400.4L442.406 401.3L447.49 403.7L450.78 403.1L451.079 405.1L448.985 407.7L449.185 409.2L448.586 409.5L447.789 409.8L445.396 410.9L441.509 414.3L439.714 415.3L439.017 417.1L437.023 418.5L434.63 419L432.338 420L431.241 419.6H428.45L426.755 418.4L423.366 417.6L422.269 415.8L419.777 415.7L418.98 414.2L417.086 414.5L415.59 415.2L413.597 415.1L407.715 413.3L406.32 411.9L404.625 412.4L403.03 414L396.55 418.1L393.959 422.4L393.859 423.6L394.557 427.5L396.152 430L393.061 429.4L389.273 430.5L388.077 431.3L383.392 430.1L381.298 431.2L380.003 430L377.211 428.8V427.3L374.62 426.7L373.722 427.4L372.626 425.9L370.931 425.6L368.439 424.6L364.452 423.5L363.654 425.9H358.969L358.271 425.5L355.181 425.9L351.991 423.8L348.402 424.2L346.209 422.1L344.016 421.9L339.63 420.2L337.835 420.6L338.135 417.4L333.848 416.1L333.35 414.8L335.343 414.3L337.237 412.4L338.932 405.3L340.228 397L341.225 395.4L342.421 395L341.424 393.8L340.328 395.3L341.025 387.7L341.524 384.9L342.421 381.9L345.511 384.3L346.309 385.3L347.206 388.7L347.804 388.8L346.707 384.2L344.913 381.9L341.324 379.6L340.826 378.3L342.62 377.7L342.122 375.9L341.624 370L338.633 369.4L333.848 366.8L332.153 364.2L330.558 362.3L330.16 360.6L331.057 358.8L330.259 357.7L328.864 356.9L329.96 355.3L326.97 355.1L325.175 354.6L324.876 353.5L326.172 352.1L324.577 351.3L321.985 351.5L321.786 349.8L319.593 350.1L318.397 349.8L317.3 348.7L316.004 348.9L313.811 348.5L313.014 347.8L308.229 346.5L306.235 346.4L304.341 347L303.244 346.7L301.949 344.5L298.858 343.4L299.456 342.7L302.547 342.1L303.145 341.4L300.952 340.5L300.752 339.3L302.347 339.6L302.447 338.4L298.46 338.5L298.061 337.2L298.559 335.8L300.852 334.6L306.634 333.2L309.126 333.4L310.821 333.2L313.811 331.6L316.702 331.2L319.394 332L321.886 334.8L323.082 335.8L326.172 334.1L330.558 334.2L331.456 335.1L332.652 333.4L333.649 334.4L338.334 334.2L336.839 331.7L336.639 325.7L335.343 324L333.25 319.7L333.449 318.3L336.639 318.6L339.331 318L340.627 318.4L340.926 321.2L342.022 322.8H344.215L346.508 323.3L349.499 323.4L353.785 324.2L355.58 323.7L359.069 321.7L357.274 321L357.075 320.3L357.972 318.1L363.156 315.6L366.844 314.9L370.632 313.6L372.626 312.2L373.822 310.4L374.32 309.1L374.62 302.3L375.616 300.1L378.507 298.5L384.887 297.4L385.784 296.9L386.682 299.1V300.3L389.572 302.7L392.762 301.7L394.357 303.5L394.856 305.5L399.043 306.6L399.641 308.6L400.538 308.3L404.127 308.7L405.722 309.8L405.323 311.4L406.021 312.1L405.323 313.5L405.821 314.1L408.114 314.4L410.307 314.1L411.603 313.5L412.101 312.1L413.995 311.5L413.198 314.2L413.796 314.8L414.195 316.8L415.889 316.9L419.179 318.4L421.97 321L425.36 320.6Z"
              style={hoverPath["path44"] ? hoverStyle : defaultStyle}
              onMouseEnter={() => handleMouseEnter("path44")}
              onMouseLeave={() => handleMouseLeave("path44")}
            />

            <path
              id="france"
              d="M367.684 367V358.36H372.724V359.428H368.752V362.146H372.004V363.214H368.752V367H367.684ZM373.801 367V358.36H377.215C377.299 358.36 377.399 358.364 377.515 358.372C377.631 358.376 377.743 358.388 377.851 358.408C378.319 358.48 378.711 358.64 379.027 358.888C379.347 359.136 379.587 359.45 379.747 359.83C379.907 360.206 379.987 360.624 379.987 361.084C379.987 361.752 379.813 362.332 379.465 362.824C379.117 363.312 378.607 363.618 377.935 363.742L377.527 363.808H374.869V367H373.801ZM378.943 367L377.239 363.484L378.295 363.16L380.167 367H378.943ZM374.869 362.794H377.179C377.255 362.794 377.341 362.79 377.437 362.782C377.537 362.774 377.631 362.76 377.719 362.74C377.995 362.676 378.219 362.56 378.391 362.392C378.567 362.22 378.695 362.02 378.775 361.792C378.855 361.56 378.895 361.324 378.895 361.084C378.895 360.844 378.855 360.61 378.775 360.382C378.695 360.15 378.567 359.948 378.391 359.776C378.219 359.604 377.995 359.488 377.719 359.428C377.631 359.404 377.537 359.39 377.437 359.386C377.341 359.378 377.255 359.374 377.179 359.374H374.869V362.794ZM380.889 367L383.781 358.36H385.269L388.161 367H387.051L384.345 358.984H384.681L381.999 367H380.889ZM382.281 364.978V363.976H386.769V364.978H382.281ZM389.235 367V358.36H390.315L394.821 365.11V358.36H395.901V367H394.821L390.315 360.244V367H389.235ZM401.131 367.18C400.271 367.18 399.541 366.99 398.941 366.61C398.341 366.23 397.883 365.702 397.567 365.026C397.255 364.35 397.099 363.568 397.099 362.68C397.099 361.792 397.255 361.01 397.567 360.334C397.883 359.658 398.341 359.13 398.941 358.75C399.541 358.37 400.271 358.18 401.131 358.18C402.131 358.18 402.953 358.434 403.597 358.942C404.245 359.45 404.691 360.134 404.935 360.994L403.849 361.282C403.673 360.638 403.359 360.13 402.907 359.758C402.455 359.386 401.863 359.2 401.131 359.2C400.487 359.2 399.951 359.346 399.523 359.638C399.095 359.93 398.773 360.338 398.557 360.862C398.341 361.382 398.231 361.988 398.227 362.68C398.223 363.368 398.329 363.974 398.545 364.498C398.761 365.018 399.085 365.426 399.517 365.722C399.949 366.014 400.487 366.16 401.131 366.16C401.863 366.16 402.455 365.974 402.907 365.602C403.359 365.226 403.673 364.718 403.849 364.078L404.935 364.366C404.691 365.222 404.245 365.906 403.597 366.418C402.953 366.926 402.131 367.18 401.131 367.18ZM406.25 367V358.36H411.71V359.374H407.318V362.08H410.99V363.094H407.318V365.986H411.71V367H406.25Z"
              fill="#171717"
            />
          </g>
          <rect x="1" y="1" width="950" height="582" rx="31" stroke-width="2" />
          <defs>
            <clipPath id="clip0_344_7219">
              <rect width="952" height="584" rx="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default MapBoxComponent;
