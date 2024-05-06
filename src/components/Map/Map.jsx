import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
  const mapStyles = {
    height: "400px",
    width: "100%"
  };

  const defaultCenter = {
    lat: 19.166727976886698, //colima
    lng: -103.84531060374977
  };

  return (
    <LoadScript keyApi_Key="AIzaSyC_NUgKfBrvS7a4KZGbS31qB-1AtDpxOv0">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={10}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} /> 


      </GoogleMap>
    </LoadScript>
  );
}

export default Map;