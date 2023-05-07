import { GoogleMap, Marker } from "@react-google-maps/api";
import React from "react";

export default function Map(props) {
  const { isLoaded } = props;

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 30.3165,
    lng: 78.0322,
  };
  return (
    isLoaded && (
      <>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
          <Marker position={center} />
        </GoogleMap>
      </>
    )
  );
}
