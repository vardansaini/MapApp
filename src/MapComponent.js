// src/MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  const positions = [
    { lat: 49.6935, lng: -112.8418, label: 'Lethbridge', steps: 123500 },
    { lat: 53.1316, lng: -114.1046, label: 'Lac la Biche', steps: 125450 },
    { lat: 51.0447, lng: -114.0719, label: 'Calgary', steps: 500000 },
    { lat: 53.5461, lng: -113.4938, label: 'Edmonton', steps: 300000 },
    { lat: 54.7267, lng: -113.2841, label: 'Athabasca', steps: 450000 },
    { lat: 53.5333, lng: -113.4221, label: 'St. Albert', steps: 200000 },
    { lat: 56.7265, lng: -111.3810, label: 'Fort McMurray', steps: 600000 },
    { lat: 54.7685, lng: -113.7226, label: 'Slave Lake', steps: 400000 },
    { lat: 53.2800, lng: -110.0059, label: 'Lloydminster', steps: 860000 },
    { lat: 49.0005, lng: -111.9606, label: 'Coutts', steps: 0 },
  ];

  const path = [
    [49.6935, -112.8418], // Lethbridge
    [51.0447, -114.0719], // Calgary
    [53.5461, -113.4938], // Edmonton
    [53.5333, -113.4221], // St. Albert
    [54.7267, -113.2841], // Athabasca
    [54.7685, -113.7226], // Slave Lake
    [56.7265, -111.3810], // Fort McMurray
    [53.1316, -114.1046], // Lac la Biche
    [53.2800, -110.0059], // Lloydminster
    [49.0005, -111.9606]  // Coutts
  ];

  return (
    <MapContainer center={[53.5461, -113.4938]} zoom={6} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {positions.map((pos, index) => (
        <Marker key={index} position={[pos.lat, pos.lng]}>
          <Popup>
            {pos.label}: {pos.steps.toLocaleString()} STEPS
          </Popup>
        </Marker>
      ))}
      <Polyline positions={path} color="blue" />
    </MapContainer>
  );
};

export default MapComponent;
