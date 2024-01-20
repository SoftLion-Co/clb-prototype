import React from "react";
import s from "./MapChart.module.scss";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup,
} from "react-simple-maps";

const MapChart = () => {
  return (
    <ComposableMap
      className={s.style}
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-5, -3],
        scale: 1100,
      }}
    >
      <Geographies
        className={s.country}
        geography="/features.json"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`} // Приклад випадкового кольору
            />
          ))
        }
      </Geographies>
      <Geographies
        className={s.country}
        geography="/features/countries/germany.json"
        strokeWidth={0.5}
        fill={"#ff0000"}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} fill={"#ff0000"} />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
};

export default MapChart;
