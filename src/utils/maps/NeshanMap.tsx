"use client";
import { useEffect, useState } from "react";
import "@neshan-maps-platform/mapbox-gl/dist/NeshanMapboxGl.css";

// Define the type for the Neshan Mapbox GL library
type NmpMapboxGl = {
  Map: {
    new (options: {
      mapType: string;
      container: string;
      zoom: number;
      pitch: number;
      center: [number, number];
      minZoom: number;
      maxZoom: number;
      trackResize: boolean;
      mapKey: string;
      poi: boolean;
      traffic: boolean;
    }): NmpMapboxGlMap;
    mapTypes: {
      neshanRaster: string;
    };
  };
};

// Define the type for the map instance
type NmpMapboxGlMap = {
  remove: () => void;
};

export default function NeshanMap() {
  const [map, setMap] = useState<NmpMapboxGlMap | null>(null);

  useEffect(() => {
    // Dynamically import the library only on the client side
    import("@neshan-maps-platform/mapbox-gl").then(
      (nmp_mapboxgl: NmpMapboxGl) => {
        const mapInstance = new nmp_mapboxgl.Map({
          mapType: nmp_mapboxgl.Map.mapTypes.neshanRaster,
          container: "map",
          zoom: 11,
          pitch: 0,
          center: [51.389, 35.6892],
          minZoom: 2,
          maxZoom: 21,
          trackResize: true,
          mapKey: "web.ae5f9aa20aac4f64845ed2667787e1a9",
          poi: false,
          traffic: false,
        });

        setMap(mapInstance);
      }
    );

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, [map]);

  return (
    <div
      id="map"
      style={{ height: "350px", width: "100%", borderRadius: "20px" }}
    ></div>
  );
}
