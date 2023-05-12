import { GoogleMap, Marker } from "@react-google-maps/api";
import React from "react";

export default function Map(props) {
  const { isLoaded } = props;

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: -26.184722,
    lng: -58.175833,
  };
  const soberbio = {
    lat: -27.29549,
    lng: -54.196343,
  };

  const yrigoyen = {
    lat: -26.255317,
    lng: -53.646887,
  };
  const posadas = {
    lat: -27.366667,
    lng: -55.896944,
  };
  const laQuiaca = {
    lat: -22.105556,
    lng: -65.6,
  };
  const salvador = {
    lat: -22.05,
    lng: -63.7,
  };
  const mosconi = {
    lat: -22.6,
    lng: -63.816667,
  };

  return (
    isLoaded && (
      <>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={5}>
          <Marker position={soberbio} />
          <Marker position={yrigoyen} />
          <Marker position={posadas} />
          <Marker position={laQuiaca} />
          <Marker position={salvador} />
          <Marker position={mosconi} />
        </GoogleMap>
      </>
    )
  );
}
