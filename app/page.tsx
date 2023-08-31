"use client";

import { UserLocationContext } from "@/context/UserLocationContext";
import Booking from "@/components/Booking/Booking";
import MapBoxMap from "@/components/Map/MapBoxMap";
import { useEffect, useState } from "react";
import { SourceCordinateContext } from "@/context/SourceCordinateContext";
import { DestinationCordinateContext } from "@/context/DestinationCordinateContext";

export default function Home() {
  const [userLocation, setUserLocation] = useState<any>();
  const [sourceCordinates, setSourceCordinates] = useState<any>();
  const [destinationCordinates, setdestinationCordinates] = useState<any>();

  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      setUserLocation({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      });
    });
  };
  return (
    <div>
      <UserLocationContext.Provider value={{ userLocation, setUserLocation }}>
        <SourceCordinateContext.Provider
          value={{ sourceCordinates, setSourceCordinates }}
        >
          <DestinationCordinateContext.Provider
            value={{ destinationCordinates, setdestinationCordinates }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div>
                <Booking />
              </div>
              <div className="col-span-2 order-first md:order-last">
                <MapBoxMap />
              </div>
            </div>
          </DestinationCordinateContext.Provider>
        </SourceCordinateContext.Provider>
      </UserLocationContext.Provider>
    </div>
  );
}
