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
  { country: "Puerto Rico", city: "San Juan / Guaynabo", lat: 18.3574, lng: -66.1110, role: "Sub-capítulo Oficial (13+ integrantes)" },
  { country: "Panamá", city: "Ciudad de Panamá", lat: 8.9824, lng: -79.5199, role: "Capítulo Regional Pink Boots Latam" },
  { country: "Panamá", city: "Penonomé", lat: 8.5186, lng: -80.3553, role: "Integrantes de la red" },
  { country: "Perú", city: "Lima", lat: -12.0464, lng: -77.0428, role: "Integrantes de la red (3 integrantes)" },
  { country: "México", city: "Cuernavaca", lat: 18.9242, lng: -99.2216, role: "Integrantes de la red" },
  { country: "México", city: "Mexicali", lat: 32.6245, lng: -115.4523, role: "Integrantes de la red" },
  { country: "México", city: "Ensenada", lat: 31.8667, lng: -116.5964, role: "Integrantes de la red" },
  { country: "México", city: "San Luis Potosí", lat: 22.1565, lng: -100.9855, role: "Integrantes de la red" },
  { country: "Costa Rica", city: "San José", lat: 9.9281, lng: -84.0907, role: "Integrantes de la red" },
  { country: "El Salvador", city: "San Salvador", lat: 13.6929, lng: -89.2182, role: "Integrantes de la red" },
  { country: "Guatemala", city: "Tecpán", lat: 14.7608, lng: -90.9933, role: "Integrantes de la red" },
  { country: "Venezuela", city: "San Cristóbal", lat: 7.7669, lng: -72.2250, role: "Integrantes de la red" },
  { country: "Argentina", city: "Buenos Aires", lat: -34.6037, lng: -58.3816, role: "Integrantes de la red" },
  { country: "Chile", city: "Santiago", lat: -33.4489, lng: -70.6693, role: "Integrantes de la red" },
  { country: "Brasil", city: "Curitiba", lat: -25.4290, lng: -49.2671, role: "Integrantes de la red" },
];

export default function ChaptersMap() {
  return (
    <div className="h-[320px] w-full overflow-hidden rounded-xl border border-[var(--color-border-light)] shadow-sm sm:h-[380px]">
      <MapContainer
        center={[6.5, -74]}
        zoom={3.2}
        scrollWheelZoom={false}
        className="h-full w-full"
        style={{ background: "#f8f9fa" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((loc, idx) => (
          <Marker key={`${loc.country}-${loc.city}-${idx}`} position={[loc.lat, loc.lng]} icon={markerIcon}>
            <Popup>
              <div className="p-1">
                <strong className="text-sm font-bold text-[var(--color-pink-brand)]">{loc.country}</strong>
                <p className="text-xs text-gray-700">{loc.city}</p>
                <span className="mt-1 inline-block text-[11px] font-medium text-gray-500">{loc.role}</span>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
