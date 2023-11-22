"use client";

import React, { useState } from "react";
import MapGL, { Source, Layer, MapboxEvent } from "react-map-gl";
import { Style } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

interface Viewport {
  width: string;
  height: number;
  latitude: number;
  longitude: number;
  zoom: number;
}

const TradingMarketsMapComponent = () => {
  const [viewport, setViewport] = useState<Viewport>({
    width: "100%",
    height: 400,
    latitude: 0,
    longitude: 0,
    zoom: 1,
  });

  const onMapLoaded = (event: MapboxEvent & { target: mapboxgl.Map }) => {
    const map = event.target;

    // Кастомізація карти
    const customStyle: Style = {
      version: 8,
      sources: {},
      layers: [
        {
          id: "countries",
          type: "fill",
          source: "countries",
          paint: {
            "fill-outline-color": "#000000",
            "fill-color": "rgba(255, 255, 255, 0.1)",
          },
        },
      ],
    };

    map.setStyle(customStyle);

    map.on(
      "click",
      (e: MapboxEvent & { features?: mapboxgl.MapboxGeoJSONFeature[] }) => {
        if (e.features && e.features.length > 0) {
          alert(`Ви навели на країну ${e.features[0].properties!.name}`);
        }
      }
    );
  };

  return (
    <div>
      <h1>Map</h1>
      <MapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/light-v11"
        onLoad={(event: MapboxEvent) => onMapLoaded(event)}
      >
        <Source
          id="countries"
          type="geojson"
          data={{
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                properties: {
                  name: "Україна",
                },
                geometry: {
                  type: "Polygon",
                  coordinates: [
                    [
                      [22.25, 48.8],
                      [24.0, 48.8],
                      [24.0, 52.1],
                      [22.25, 52.1],
                      [22.25, 48.8],
                    ],
                  ],
                },
              },
            ],
          }}
        />
        <Layer
          id="countries"
          type="fill"
          source="countries"
          paint={{
            "fill-color": "green",
            "fill-opacity": 0.7,
          }}
        />
      </MapGL>
    </div>
  );
};

export default TradingMarketsMapComponent;
