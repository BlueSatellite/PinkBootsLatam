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
  { country: "Panama", city: "Ciudad de Panama", lat: 8.9824, lng: -79.5199, role: "Sede principal" },
  { country: "Peru", city: "Lima", lat: -12.0464, lng: -77.0428, role: "Capitulo fundador" },
  { country: "Puerto Rico", city: "Guaynabo", lat: 18.3574, lng: -66.1110, role: "Sub-capitulo" },
  { country: "Colombia", city: "Bogota", lat: 4.7110, lng: -74.0721, role: "Miembro activo" },
  { country: "Chile", city: "Santiago", lat: -33.4489, lng: -70.6693, role: "Miembro activo" },
  { country: "Brasil", city: "Rio de Janeiro", lat: -22.9068, lng: -43.1729, role: "Pionero (2015)" },
  { country: "Argentina", city: "Buenos Aires", lat: -34.6037, lng: -58.3816, role: "Miembro activo" },
];

export default function ChaptersMap() {
  return (
    <div className="h-[400px] w-full overflow-hidden rounded-xl sm:h-[500px]">
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
