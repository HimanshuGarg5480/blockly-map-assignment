import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  Marker,
  Polyline,
  useJsApiLoader,
} from "@react-google-maps/api";
import path, { highlightedPath } from "../constants/index.js";
import GOOGLE_API_KEY from "../../config.js";

const containerStyle = {
  width: "100vw",
  height: "100vh",
};

const center = {
  lat: 17.385044,
  lng: 78.486671,
};

const MyComponent = () => {
  const { isLoaded } = useJsApiLoader({
    id: GOOGLE_API_KEY,
    googleMapsApiKey: GOOGLE_API_KEY,
  });
  const [point, setPoint] = useState({
    lat: 17.385044,
    lng: 78.486671,
  });
  const [vehicleRoute,setVehicleRoute]=useState([]);
  let idx=0;
  let timer;
  const onStartClick = (e) => {
    e.preventDefault();
    timer = setInterval(() => {
      if (idx == path.length) {
        console.log(idx, " ", path.length);
        clearInterval(timer);
        return;
      }
      console.log(idx);
      const route = path.slice(0, idx + 1).map(p => ({
        lat: p.latitude,
        lng: p.longitude,
      }));
      setVehicleRoute(route);
      setPoint({
        lat: path[idx].latitude,
        lng: path[idx].longitude,
      });

      idx+=1;
    }, 500);
  };
  return (
    <div style={{ position: "relative" }}>
      {isLoaded && (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={20}>
          <Marker
            position={point}
            icon={{
              url: "https://p2.hiclipart.com/preview/862/202/554/toy-car-outline-icon-car-icon-baby-pack-1-icon-transport-icon-nissan-np300-used-car-car-dealership-nissan-livina-price-png-clipart.png",
              scaledSize: new window.google.maps.Size(40, 40),
              anchor: new window.google.maps.Point(20, 20),
              scale: 0.7,
            }}
          />
          <Polyline
            path={highlightedPath}
            options={{ strokeColor: "#00d5ff" }}
          />
          <Polyline path={vehicleRoute} options={{ strokeColor: '#FF0000' }} />
        </GoogleMap>
      )}
      <div
        style={{
          position: "absolute",
          width: "100vw",
          display: "flex",
          justifyContent:"center",
          bottom:0
        }}
      >
        <button onClick={onStartClick}>Start</button>
      </div>
    </div>
  );
};

export default React.memo(MyComponent);
