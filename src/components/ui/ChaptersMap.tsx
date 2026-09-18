"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const locations = [
  { country: "Puerto Rico", city: "Guaynabo", lat: 18.3574, lng: -66.1110, role: "Sub-capítulo" },
  { country: "Perú", city: "Lima", lat: -12.0464, lng: -77.0428, role: "Integrantes de la red" },
  { country: "México", city: "Cuernavaca", lat: 18.9242, lng: -99.2216, role: "Integrantes de la red" },
  { country: "Chile", city: "Santiago", lat: -33.4489, lng: -70.6693, role: "Integrantes de la red" },
  { country: "Brasil", city: "Brasil", lat: -15.7975, lng: -47.8919, role: "Integrantes de la red" },
];

export default function ChaptersMap() {
  return (
    <div className="h-[250px] w-full overflow-hidden rounded-lg sm:h-[300px]">
      <MapContainer
        center={[5, -72]}
        zoom={3.5}
        scrollWheelZoom={false}
        className="h-full w-full"
        style={{ background: "#f0f0f0" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((loc) => (
          <Marker key={loc.country} position={[loc.lat, loc.lng]} icon={markerIcon}>
            <Popup>
              <strong>{loc.country}</strong> — {loc.city}
              <br />
              <span className="text-xs text-gray-500">{loc.role}</span>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
